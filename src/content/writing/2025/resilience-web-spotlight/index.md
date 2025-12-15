---
title: 'Resilience Web: Community Spotlight'
description: "It's a platform that maps community, social justice and environmental groups in a local area. These maps are created and maintained by the people who live there."
pubDate: 'Sep 19 2025'
heroImage: './images/hero.jpg'
tags: ['community', 'interviews', 'open-source', 'interviews']
source: 'gfsc-community'
externalUrl: 'https://gfsc.community/resilience-web-community-spotlight/'
---

## What is Resilience Web?

Resilience Web is a platform enabling community groups to map social justice and environmental organizations within their neighborhoods. Residents contribute and maintain these localized maps collaboratively. The initiative aims to "make it easy for neighbourhood residents to keep community information accurate and up-to-date" similar to Wikipedia's model.

The platform currently operates in Cambridge, Norwich, South West London, York, Stroud, Carmarthen, and other areas. Recent additions include geographical mapping features, with planned expansions for discussion boards and local mailing lists.

## Project Origins

The project began in 2021 when Anna from Transition Cambridge requested help digitizing a hand-drawn community map. Diner built an initial version within days, then expanded it into a proper database system. As broader interest emerged, Helen and Charlie joined the effort, followed by Thea.

## Technical Infrastructure

The platform uses Next.js (React) and a Postgres database managed through Prisma ORM. The public site generates static pages at build time with on-demand updates when listings change. Vercel provides free hosting sponsorship. The codebase is publicly available on GitHub.

## Current Challenges

The team faces capacity constraints since members work part-time alongside other employment. Growth remains slow without dedicated promotion personnel. Funding limitations also create sustainability concerns.

## Integration with PlaceCal

While Resilience Web displays community groups themselves, PlaceCal focuses on events those organizations host. A proof-of-concept is underway to display PlaceCal events directly within the Resilience Web platform.
