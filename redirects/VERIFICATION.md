# Content fidelity verification: old sites → migrated posts

Comparison of live old sites against migrated markdown in `src/content/{writing,work}/`. Run **before** flipping DNS so redirects don't send readers from full articles to AI-summarised versions.

## Status: ALL CLEAR

All 29 posts have been verified. 19 had AI-summarisation issues and have been re-ported verbatim from the live source. The redirect files (`redirects/alliscalm.net/_redirects`, `redirects/cassowaryproject.org/_redirects`) are now safe to deploy.

## Methodology

For each post:
1. WebFetched the live URL (alliscalm.net or cassowaryproject.org).
2. Compared paragraph-by-paragraph against the migrated markdown.
3. Where mismatches existed (paraphrased prose, invented section headings, dropped paragraphs/blockquotes, AI-rewritten descriptions), rewrote the migrated file as a verbatim copy from the live source — preserving frontmatter while restoring the original voice.

## Re-ported on 2026-05-06 (19 posts)

| URL | Migrated path | What was wrong |
|---|---|---|
| alliscalm.net/victory-points-suck/ | writing/2017/victory-points-suck/ | Missing entire Waggle Dance section + intro line |
| alliscalm.net/dear-friend/ | writing/2016/dear-friend/ | Missing CTA links and Source link, frontmatter list converted to markdown headings |
| alliscalm.net/paul-graney-pioneer-acoustic-ecology/ | writing/2016/paul-graney-pioneer-acoustic-ecology/ | Drastically shortened to ~250 words; lost the Sophie Arkette and Ruskin blockquotes, most of the article body |
| alliscalm.net/art-of-noises/ | writing/2014/art-of-noises/ | **Fabricated** content (Russolo, Lefebvre, William Morris references not in original); replaced simple game listing with invented analytical essay |
| alliscalm.net/pass-sing/ | writing/2014/pass-sing/ | Completely rewritten under invented headings ("Gods: Divine Sound Authority" etc.); bullet lists collapsed; original voice lost |
| alliscalm.net/sound-and-the-web-3/ | writing/2013/sound-and-the-web-3/ | Italics on framing paragraphs stripped; bold "Question:" missing; hyperlinks stripped; heading levels off |
| alliscalm.net/pax-porfiriana/ | writing/2015/pax-porfiriana/ | Truncated Puerto Rico, Pax Porfiriana, and Bruno Faidutti blockquotes |
| alliscalm.net/elephants-in-the-dark/ | work/2014/elephants-in-the-dark/ | Fabricated "Concept" section with John Godfrey Saxe reference not in original; technical credits and locations rewritten |
| alliscalm.net/acoustic-citizenship-night-day/ | writing/2014/acoustic-citizenship-night-day/ | Italics, hyperlinks, bold formatting stripped throughout |
| alliscalm.net/what-is-a-factory/ | writing/2016/what-is-a-factory/ | Truncated Brett Victor blockquote (3 sentences → 1) |
| alliscalm.net/sounds-and-the-web-dont-work/ | writing/2012/sounds-web-dont-work/ | Section heading levels (### → ##) — minor |
| alliscalm.net/stop-making-pincushion-maps/ | writing/2015/stop-making-pincushion-maps/ | All hyperlinks stripped; title case altered; one heading level off |
| cassowaryproject.org/living-in-the-ruins/ | writing/2015/living-in-the-ruins/ | Heavily rewritten under invented headings ("Pre-WWII Planning", "The Crescents Era", "Community Identity"); ~11 paragraphs of personal voice removed (East Germany aside, Philip K Dick "kibble", Bingo Jesus closer) |
| cassowaryproject.org/transcribing-royal-charter/ | writing/2015/transcribing-royal-charter/ | Restructured under fake headings; **both Charter blockquotes deleted** (the centrepiece of the post); "stay tuned" line and closing reflection removed |
| cassowaryproject.org/understanding-modern-manchester-through-baths-and-wash-houses/ | writing/2016/understanding-manchester-baths-wash-houses/ | Multiple paragraphs rewritten/paraphrased; "habitus" definition reduced; reservoir context truncated |
| alliscalm.net/embody-move-association/ | work/2013/embody-move-association/ | Extensively paraphrased; invented "Key Challenges" and "Technical Details" sections; description rewritten |
| alliscalm.net/first-national-festival-of-lgbt-history/ | work/2015/first-national-festival-lgbt-history/ | Paraphrased throughout ("This was a huge and engaging volunteer job" → "This volunteer position consumed considerable free time") |
| alliscalm.net/tai-chi-school/ | work/2016/tai-chi-school/ | Paraphrased ("After doing so many client sites" → "After completing numerous client projects") |
| alliscalm.net/england-losing/ | writing/2014/england-losing/ | Quotation marks added around content that wasn't quoted in original; "it's" → "its" silently corrected (the original has the typo) |
| alliscalm.net/kates-cuttings/ | work/2012/kates-cuttings/ | Invented "Visual Navigation" section heading |

## OK from initial verification — no action needed (10 posts)

| URL | Migrated path |
|---|---|
| alliscalm.net/agriculture-soundscape-recordings-from-2007/ | writing/2012/agriculture-soundscape-recordings-from-2007/ |
| alliscalm.net/arborjs-experiments/ | writing/2012/arborjs-experiments/ |
| alliscalm.net/rethinking-sound-and-the-web-part-2/ | writing/2012/rethinking-sound-web-2/ |
| alliscalm.net/dont-trust-i-side-with/ | writing/2014/dont-trust-i-side-with/ |
| alliscalm.net/publishing-phd-theses/ | writing/2014/publishing-phd-theses/ |
| alliscalm.net/selective-imagination/ | writing/2014/selective-imagination/ |
| alliscalm.net/termite-club-ladyfest-leeds/ | writing/2014/termite-club-ladyfest-leeds/ |
| alliscalm.net/work-for-change/ | work/2012/work-for-change/ |
| alliscalm.net/noise-eater/ | work/2015/noise-eater/ |
| cassowaryproject.org/visualising-qualitative-data-on-maps/ | writing/2015/stop-making-pincushion-maps/ (cross-posted) |

## Caveats

- A handful of inline images referenced in the original articles weren't downloaded during migration (e.g. `waggle-dance-1.jpg`, `canal-mania-1.jpg` for victory-points-suck; the WSP photo for paul-graney; several pieces of artwork for pax-porfiriana). The text references survive in the re-ported posts but the images are absent. This was the state pre-existing the verification work.
- Where re-ports inserted markdown image syntax, only locally-available images were referenced. Image filenames in some cases differ from the original URLs because the migration renamed them (e.g. `cellar-dwelling-exterior.jpeg` instead of the original Ghost CMS slug).
- The work-collection schema uses `year` not `pubDate` and adds `client`, `role`, `liveUrl` fields — those were preserved when re-porting.
