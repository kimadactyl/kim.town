# Site Migration Log

**Date:** 2024-12-13
**Source sites:** alliscalm.net (Ghost), kim.town (digital garden)
**Target:** Astro blog

---

## Successfully Migrated Posts (31 total)

### From alliscalm.net (19 posts)

| Post | Date | Tags |
|------|------|------|
| Victory Points Suck | Jul 08 2017 | games, academic |
| Paul Graney, Pioneer of Acoustic Ecology? | Jun 14 2016 | sound, academic |
| Dear Friend | Jun 01 2016 | portfolio, web |
| Tai Chi School | Apr 11 2016 | portfolio, web |
| What is a Factory? | Jan 02 2016 | academic, technology |
| Stop Making Pincushion Maps! | Jul 06 2015 | web, design |
| Noise Eater | Jun 30 2015 | portfolio, sound, web |
| From Civilisation to Pax Porfiriana | May 25 2015 | games, academic |
| First National Festival of LGBT History | Mar 01 2015 | portfolio, web |
| Art of Noises | Oct 15 2014 | games, sound, academic |
| Pass-SING: gender, sound, power and patriarchy | Aug 27 2014 | sound, gender, academic |
| Selective Imagination | Jun 30 2014 | games, culture |
| Publishing PhD theses | Jun 12 2014 | academic |
| Don't trust "I Side With" | May 15 2014 | politics |
| Embody Move Association | Sep 23 2013 | portfolio, web |
| Rethinking Sound and the Web: Part 2 | Jun 18 2012 | sound, web |
| Sounds and the Web Don't Work | May 16 2012 | sound, web |
| Work for Change | Nov 18 2012 | portfolio, web |
| Kate's Cuttings | Nov 18 2012 | portfolio, web |

### From kim.town (12 posts)

| Post | Date | Tags |
|------|------|------|
| Are the interesting conversations in the room, or in the corridor? | Jul 26 2024 | blog, events |
| Thoughts on the first 18 months of running a Mastodon server | Jun 22 2024 | technology, social-media |
| Singularity | Feb 20 2024 | technology, nrt |
| Minimum Viable Organisations | Dec 28 2023 | organisation, publication |
| Go | Nov 17 2023 | games, nrt |
| Fax | Nov 16 2023 | technology, nrt |
| Estrogen | Oct 13 2023 | gender, nrt |
| Community | Sep 21 2023 | nrt, organisation |
| BMI | Sep 15 2023 | nrt, health |
| Artist | Sep 07 2023 | nrt, art |
| Document | Sep 29 2023 | technology, nrt |
| Goodhart's Law | Sep 22 2023 | concepts, nrt |

---

## Posts Not Migrated (404 errors)

These posts were listed on the original sites but returned 404 errors when attempting to fetch:

| Post | Source |
|------|--------|
| Acoustic Citizenship: The Night and Day Debacle | alliscalm.net |
| Why I love watching England lose | alliscalm.net |
| Experiments in JavaScript: arbor.js | alliscalm.net |
| Recordings from The Termite Club at Ladyfest Leeds 2007 | alliscalm.net |
| Agriculture: Soundscape recordings from 2007 | alliscalm.net |
| Rethinking Sound and the Web: Part 3 | alliscalm.net |

---

## Images Migrated

**48 images** downloaded from alliscalm.net (32MB total)
Location: `src/assets/images/alliscalm/`

| Image | Used In |
|-------|---------|
| pax-1.jpg, pax.jpg, suburbia.jpg, dream-home-1.jpg, kana-gawa-1.jpg, madness-at-midnight.jpg, tta.jpg | Victory Points Suck |
| WSP1.jpg, PaulGraney1.jpg | Paul Graney |
| Screenshot-from-2016-06-30-16-46-14.png, Screenshot-from-2016-06-30-16-46-43.png | Dear Friend |
| Screenshot-from-2016-06-30-14-27-09.png, Screenshot-from-2016-06-30-14-28-11.png, Screenshot-from-2016-06-30-14-38-34.png | Tai Chi School |
| 20160102_133523--Medium-.jpg, Eniac.jpg, 20160102_133532--Medium-.jpg | What is a Factory |
| Screenshot-from-2015-10-12-*.png, 18unujny2bc0wjpg.jpg, propaganda-maps.jpg | Stop Making Pincushion Maps |
| Screenshot-from-2016-06-30-15-55-46.png, Screenshot-from-2016-06-30-15-57-38.png | Noise Eater |
| civ.png, civ2.jpg, eu4-1.png, cities.jpg, purto_rico.jpg, imperial.jpg, pax-medium.jpg, dalmuti.jpg | Pax Porfiriana |
| Screenshot-from-2016-06-30-15-42-48.png, Screenshot-from-2016-06-30-15-35-09.png | LGBT Festival |
| art-of-noises.jpg, Tragical_Ballad_18th_century.png | Art of Noises |
| netrunner-magewars.png | Selective Imagination |
| plato-1.jpg, plato.jpg, thor.jpg, krakatoa.jpg, bell-radius.jpg, voices.png, parliament.jpg | Pass-SING |
| embody-move-association-1.png | Embody Move |
| workforchange.png | Work for Change |
| kates-cuttings.png | Kate's Cuttings |

### Images that failed to download (404)
- canal-mania-1.jpg
- waggle-dance-1.jpg

### kim.town
No images - all posts are text-only.

---

## Not Migrated

### Elephants In The Dark
This appears to be a separate project/sub-site linked from alliscalm.net navigation, not a blog post.

---

## Technical Notes

- Built with Astro 5.x using the blog template
- Posts stored as Markdown in `src/content/blog/`
- Each post has `source` frontmatter field indicating origin site (`alliscalm` or `kimtown`)
- Tags preserved from original posts where available
- RSS feed at `/rss.xml`
- Sitemap generated automatically

---

## Content Verification (2024-12-13)

All posts have been verified against original sources:

### alliscalm.net posts
- **Victory Points Suck** - Full content with 7 inline images
- **Pax Porfiriana** - Full content with 8 inline images
- **Pass-SING** - Full content with 7 inline images
- **Art of Noises** - Complete with historical context
- **Stop Making Pincushion Maps** - Complete with design examples
- **What is a Factory** - Complete essay on industrial computing
- **All portfolio posts** - Complete project descriptions

### kim.town posts
- All 12 posts verified - these are intentionally shorter digital garden/NRT style posts

---

## To Do

- [x] Copy images from original sites (48 images, 32MB)
- [x] Add hero images to post frontmatter (15 posts with hero images)
- [x] Verify all posts have complete content (not summaries)
- [x] Add inline images to posts that reference them
- [ ] Verify all internal links work
- [ ] Update `astro.config.mjs` with production URL
- [ ] Attempt to recover 404'd posts via Wayback Machine if desired
