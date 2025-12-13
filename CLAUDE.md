# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Guidelines

- Never summarize content for me. Always provide full, complete information.
- When importing posts, ensure every post has images (heroImage in frontmatter) and double-check that all content has been properly ported over from the original source.
- Don't prompt me to approve commands unless I specifically ask you
- Store original URLs in article frontmatter and prompt me if you get 404s
- Store posts in folders by year
- Store images in a folder in the post directory

## Project Overview

This is an Astro blog consolidating two previous sites: **alliscalm.net** (Ghost) and **kim.town** (digital garden). It contains 37 migrated blog posts with 48 images.

**Site URL:** https://alliscalm.net

## Commands

```bash
npm run dev        # Start dev server at localhost:4321
npm run build      # Type check (astro check) then build to ./dist/
npm run preview    # Preview built site locally
```

## Architecture

### Content Collections

- Blog posts in `src/content/blog/` as Markdown/MDX
- Schema in `src/content.config.ts` enforces: title, description, pubDate, source (enum: 'alliscalm'|'kimtown')
- Optional: updatedDate, heroImage, coverImageCredit, tags

### Custom Remark Plugins (`src/plugins/`)

- `remark-reading-time.mjs` - Adds `minutesRead` to frontmatter
- `remark-modified-time.mjs` - Gets last modified date from git history

### Layouts

- `BaseLayout.astro` - Main wrapper with navbar and footer
- `BlogPostLayout.astro` - Post template with hero image, TOC, reading time

### Key Config Files

- `src/consts.ts` - Site title, description, social links, nav links
- `astro.config.mjs` - Site URL, integrations, markdown plugins
- `src/styles/global.css` - Theme CSS variables, Tailwind imports

### Path Aliases (tsconfig.json)

- `@/*` → `src/*`
- `@blogimages/*` → `src/assets/blogimages/*`

### Theming

Dark/light mode via CSS variables and localStorage. Theme colors defined in `src/styles/global.css` under `@theme`.

## Migration Status

Migration complete. See `MIGRATION_LOG.md` for details.
