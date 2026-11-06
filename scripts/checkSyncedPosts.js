#!/usr/bin/env node

/**
 * Exits 1 if any synced post is incomplete or badly converted. Needs a built dist/.
 *
 * Usage: node scripts/checkSyncedPosts.js src/content/writing/2026/some-post [...]
 */

import fs from 'fs'
import path from 'path'
import { removeSignupCards } from './removeSignupCards.js'

const RSS_URL = 'https://gfsc.community/rss/'
const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' }

function decodeEntities(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (entity, name) => ENTITIES[name] ?? entity)
}

const stripTags = (html) => html.replace(/<(style|svg|script)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' ')

function words(text) {
  return decodeEntities(text)
    .replace(/\]\([^)]*\)/g, '] ')
    .replace(/https?:\/\/\S+/g, ' ')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
}

function missingWords(source, local) {
  const counts = new Map()
  for (const word of local) counts.set(word, (counts.get(word) || 0) + 1)
  return source.filter((word) => {
    const left = counts.get(word) || 0
    counts.set(word, left - 1)
    return left < 1
  })
}

const count = (text, pattern) => (text.match(pattern) || []).length

function renderedText(html) {
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0] ?? html
  return decodeEntities(article.replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ').replace(/<[^>]+>/g, ' '))
}

function checkPost(dir, items, feeds) {
  const problems = []
  const raw = fs.readFileSync(path.join(dir, 'index.md'), 'utf8')
  const [, frontmatter, ...rest] = raw.split('---')
  const body = rest.join('---')
  const url = frontmatter.match(/externalUrl:\s*'([^']+)'/)?.[1]
  const item = items.find((i) => i.includes(`<link>${url}</link>`))
  if (!item) return [`no matching item in ${RSS_URL} for ${url}`]

  const html = item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/)?.[1] ?? ''
  const source = removeSignupCards(html)

  const hero = frontmatter.match(/heroImage:\s*'\.\/([^']+)'/)?.[1]
  const heroPath = hero && path.join(dir, hero)
  if (!hero) problems.push('no heroImage')
  else if (!fs.existsSync(heroPath)) problems.push(`hero file missing: ${hero}`)
  else if (!fs.readFileSync(heroPath).subarray(0, 8).some(Boolean)) problems.push('hero file is empty')

  const missing = missingWords(words(stripTags(source)), words(body))
  if (missing.length) problems.push(`${missing.length} words missing: ${missing.slice(0, 12).join(' ')}`)
  if (/nc-loop|Email sent!|No spam\. Unsubscribe/.test(body)) problems.push('signup card leaked')
  if (count(body, /\bundefined\b/g) > count(source, /\bundefined\b/g)) problems.push('stray "undefined"')
  if (count(body, /<iframe/g) < count(source, /<iframe/g)) problems.push('iframe missing')
  if (count(body, /^```/gm) < count(source, /<pre/g) * 2) problems.push('code block not fenced')

  const route = dir.split(path.sep).slice(-2).join('/')
  const page = path.join('dist', 'writing', route, 'index.html')
  if (!fs.existsSync(page)) return [...problems, 'no built page']
  const rendered = renderedText(fs.readFileSync(page, 'utf8'))
  const sourceText = decodeEntities(stripTags(source))
  if (count(rendered, /\*/g) > count(sourceText, /\*/g)) problems.push('literal asterisks on the page')

  const link = `/writing/${route}/`
  if (!feeds.all.includes(link)) problems.push('not in rss.xml')
  if (feeds.personal.includes(link)) problems.push('in rss-personal.xml, so it would double-post to Discord')
  return problems
}

const dirs = process.argv.slice(2)
if (!dirs.length) {
  console.error('Usage: node scripts/checkSyncedPosts.js <post directory> [...]')
  process.exit(1)
}

const res = await fetch(RSS_URL)
if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status}`)
const items = (await res.text()).split('<item>').slice(1)
const feeds = {
  all: fs.readFileSync('dist/rss.xml', 'utf8'),
  personal: fs.readFileSync('dist/rss-personal.xml', 'utf8'),
}

let failed = false
for (const dir of dirs) {
  const problems = checkPost(dir, items, feeds)
  console.log(`${problems.length ? 'FAIL' : 'ok  '} ${dir}`)
  for (const problem of problems) console.log(`     ${problem}`)
  failed ||= problems.length > 0
}
process.exit(failed ? 1 : 0)
