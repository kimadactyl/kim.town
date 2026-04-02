#!/usr/bin/env node

/**
 * Sync gfsc.community posts (by Kim only) to kim.town-v2 writing collection.
 *
 * Fetches the RSS feed, filters for Kim's posts, converts HTML to markdown,
 * downloads hero images, and creates/updates post files.
 *
 * Usage: node scripts/syncGfscCommunity.js [--dry-run]
 *
 * IMPORTANT: This imports full post text verbatim. Never summarise or truncate.
 */

import { parseStringPromise } from 'xml2js'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONTENT_DIR = path.join(__dirname, '..', 'src', 'content', 'writing')
const RSS_URL = 'https://gfsc.community/rss/'
const AUTHOR_FILTER = 'Dr Kim Foale'
const DRY_RUN = process.argv.includes('--dry-run')

async function fetchRSS() {
  const res = await fetch(RSS_URL)
  if (!res.ok) throw new Error(`Failed to fetch RSS: ${res.status}`)
  const xml = await res.text()
  return parseStringPromise(xml)
}

function slugFromUrl(url) {
  // https://gfsc.community/some-post-slug/ -> some-post-slug
  const match = url.match(/gfsc\.community\/([^/]+)\/?$/)
  return match ? match[1] : null
}

function yearFromDate(dateStr) {
  return new Date(dateStr).getFullYear().toString()
}

function htmlToMarkdown(html) {
  // Basic HTML to markdown conversion
  // Handles the common elements in Ghost output
  let md = html

  // Remove leading hero image (handled separately via frontmatter)
  md = md.replace(/^<img[^>]*>/, '')

  // Headings
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n')
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n')
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n')
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n')

  // Bold and italic
  md = md.replace(/<strong>(.*?)<\/strong>/gi, '**$1**')
  md = md.replace(/<b>(.*?)<\/b>/gi, '**$1**')
  md = md.replace(/<em>(.*?)<\/em>/gi, '*$1*')
  md = md.replace(/<i>(.*?)<\/i>/gi, '*$1*')

  // Links - strip ref tracking params
  md = md.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, (_, url, text) => {
    const cleanUrl = url.replace(/[?&]ref=gfsc\.community/, '')
    return `[${text}](${cleanUrl})`
  })

  // Images
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)')
  md = md.replace(/<img[^>]*src="([^"]*)"[^>]*\/?>/gi, '![]($1)')

  // Figures with captions
  md = md.replace(/<figure[^>]*>(.*?)<figcaption>(.*?)<\/figcaption>.*?<\/figure>/gis, '$1\n*$2*\n\n')
  md = md.replace(/<figure[^>]*>(.*?)<\/figure>/gis, '$1\n\n')

  // Lists
  md = md.replace(/<ul[^>]*>(.*?)<\/ul>/gis, (_, inner) => {
    return inner.replace(/<li[^>]*>(.*?)<\/li>/gis, '- $1\n') + '\n'
  })
  md = md.replace(/<ol[^>]*>(.*?)<\/ol>/gis, (_, inner) => {
    let i = 0
    return inner.replace(/<li[^>]*>(.*?)<\/li>/gis, () => `${++i}. ` + arguments[1] + '\n') + '\n'
  })

  // Blockquotes
  md = md.replace(/<blockquote[^>]*>(.*?)<\/blockquote>/gis, (_, inner) => {
    const clean = inner.replace(/<\/?p[^>]*>/gi, '').trim()
    return clean.split('\n').map(l => `> ${l.trim()}`).join('\n') + '\n\n'
  })

  // Paragraphs
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gis, '$1\n\n')

  // Line breaks
  md = md.replace(/<br\s*\/?>/gi, '\n')

  // Horizontal rules
  md = md.replace(/<hr[^>]*\/?>/gi, '\n---\n\n')

  // Strip remaining tags
  md = md.replace(/<[^>]+>/g, '')

  // Decode HTML entities
  md = md.replace(/&amp;/g, '&')
  md = md.replace(/&lt;/g, '<')
  md = md.replace(/&gt;/g, '>')
  md = md.replace(/&quot;/g, '"')
  md = md.replace(/&#x27;/g, "'")
  md = md.replace(/&apos;/g, '\u2019')
  md = md.replace(/&#x2018;/g, '\u2018')
  md = md.replace(/&#x2019;/g, '\u2019')
  md = md.replace(/&#x201C;/g, '\u201C')
  md = md.replace(/&#x201D;/g, '\u201D')
  md = md.replace(/&#x2013;/g, '\u2013')
  md = md.replace(/&#x2014;/g, '\u2014')
  md = md.replace(/&nbsp;/g, ' ')

  // Clean up ref tracking params that weren't caught in link conversion
  md = md.replace(/\?ref=gfsc\.community/g, '')
  md = md.replace(/&ref=gfsc\.community/g, '')

  // Clean up excessive whitespace and indentation from Ghost HTML
  md = md.split('\n').map(line => line.trim()).join('\n')
  md = md.replace(/\n{3,}/g, '\n\n')
  md = md.trim()

  return md
}

async function downloadImage(url, destDir) {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.warn(`  Warning: failed to download image ${url}: ${res.status}`)
      return null
    }
    const buffer = Buffer.from(await res.arrayBuffer())
    let ext = path.extname(new URL(url).pathname)
    // If no extension, detect from content-type header
    if (!ext) {
      const contentType = res.headers.get('content-type') || ''
      if (contentType.includes('jpeg') || contentType.includes('jpg')) ext = '.jpg'
      else if (contentType.includes('png')) ext = '.png'
      else if (contentType.includes('webp')) ext = '.webp'
      else if (contentType.includes('gif')) ext = '.gif'
      else ext = '.jpg' // fallback
    }
    const filename = 'hero' + ext
    const destPath = path.join(destDir, filename)
    await fs.writeFile(destPath, buffer)
    return filename
  } catch (e) {
    console.warn(`  Warning: failed to download image ${url}: ${e.message}`)
    return null
  }
}

async function getExistingPosts() {
  // Scan all writing posts for externalUrl pointing to gfsc.community
  const existing = new Set()
  const years = await fs.readdir(CONTENT_DIR)
  for (const year of years) {
    const yearDir = path.join(CONTENT_DIR, year)
    const stat = await fs.stat(yearDir)
    if (!stat.isDirectory()) continue
    const posts = await fs.readdir(yearDir)
    for (const post of posts) {
      const indexPath = path.join(yearDir, post, 'index.md')
      try {
        const content = await fs.readFile(indexPath, 'utf-8')
        const urlMatch = content.match(/externalUrl:\s*['"]([^'"]+)['"]/)
        if (urlMatch && urlMatch[1].includes('gfsc.community')) {
          existing.add(urlMatch[1].replace(/\/$/, ''))
        }
      } catch {
        // No index.md, skip
      }
    }
  }
  return existing
}

function formatDate(dateStr) {
  const d = new Date(dateStr)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')} ${d.getFullYear()}`
}

async function main() {
  console.log('Fetching gfsc.community RSS feed...')
  const rss = await fetchRSS()
  const items = rss.rss.channel[0].item || []

  console.log(`Found ${items.length} total posts`)

  // Filter for Kim's posts only
  const kimPosts = items.filter(item => {
    const creator = item['dc:creator']?.[0]
    return creator === AUTHOR_FILTER
  })

  console.log(`Found ${kimPosts.length} posts by ${AUTHOR_FILTER}`)

  // Get existing posts to avoid duplicates
  const existing = await getExistingPosts()
  console.log(`Found ${existing.size} existing gfsc.community posts in kim.town-v2`)

  let created = 0
  let skipped = 0

  for (const item of kimPosts) {
    const url = item.link[0].replace(/\/$/, '')
    const slug = slugFromUrl(url)
    const title = item.title[0]

    if (existing.has(url)) {
      console.log(`  Skip (exists): ${title}`)
      skipped++
      continue
    }

    if (!slug) {
      console.warn(`  Warning: couldn't extract slug from ${url}`)
      continue
    }

    const year = yearFromDate(item.pubDate[0])
    const postDir = path.join(CONTENT_DIR, year, slug)
    const imagesDir = path.join(postDir, 'images')
    const description = item.description?.[0] || ''
    const tags = (item.category || []).map(c => c.toLowerCase())
    const htmlContent = item['content:encoded']?.[0] || ''
    const heroUrl = item['media:content']?.[0]?.$?.url || null

    console.log(`  Creating: ${title} (${year}/${slug})`)

    if (DRY_RUN) {
      created++
      continue
    }

    // Create directories
    await fs.mkdir(imagesDir, { recursive: true })

    // Download hero image
    let heroImage = null
    if (heroUrl) {
      heroImage = await downloadImage(heroUrl, imagesDir)
    }

    // Convert HTML to markdown (full text, never summarised)
    const markdown = htmlToMarkdown(htmlContent)

    // Build frontmatter
    const frontmatter = [
      '---',
      `title: '${title.replace(/'/g, "''")}'`,
      `description: '${description.replace(/'/g, "''")}'`,
      `pubDate: '${formatDate(item.pubDate[0])}'`,
    ]

    if (heroImage) {
      frontmatter.push(`heroImage: './images/${heroImage}'`)
    }

    if (tags.length > 0) {
      frontmatter.push(`tags: [${tags.map(t => `'${t}'`).join(', ')}]`)
    }

    frontmatter.push(`source: 'gfsc-community'`)
    frontmatter.push(`externalUrl: '${url}/'`)
    frontmatter.push('---')

    const fileContent = frontmatter.join('\n') + '\n\n' + markdown + '\n'
    await fs.writeFile(path.join(postDir, 'index.md'), fileContent)

    created++
  }

  console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`)
  if (DRY_RUN) console.log('(dry run - no files written)')
}

main().catch(e => {
  console.error('Sync failed:', e)
  process.exit(1)
})
