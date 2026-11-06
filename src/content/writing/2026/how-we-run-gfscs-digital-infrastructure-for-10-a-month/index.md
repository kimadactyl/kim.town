---
title: 'How we run GFSC''s digital infrastructure for £10 a month'
description: 'Blog, newsletter, docs, login, stats and more, on one server for about a tenner. Autistici/Inventati asked for a thousand servers. Here''s one of them.'
pubDate: 'Oct 01 2026'
heroImage: './images/hero.jpeg'
tags: ['how to']
source: 'gfsc-community'
externalUrl: 'https://gfsc.community/how-we-run-gfscs-digital-infrastructure-for-10-a-month/'
---

In [my last post](https://gfsc.community/we-need-to-talk-about-the-whatsapp-activism-complex/), I suggested there might be a better way of doing things than having to be in 50 WhatsApp groups. This post is about how we’re giving it our best shot.

Over the last few months, we’ve been consolidating everything at Geeks for Social Change as far as possible so it can be collectively run and maintained. At the centre of this is a server that we’re using as a form of community organising in itself: it runs all the little open source web services we need to do our core operations. Hosting each of these individually is kind of a pain in the butt, which is why most people never do it. But once we started committing some labour to getting a really good setup for hosting apps in general, we found it to be an incredible tool for decentralising, for getting high fidelity on tasks and operations, and for letting more people be involved than we’ve ever managed before.

Here’s everything we’re running on our own server, and what it replaced for us:

- **Blog, email newsletter and membership management:** [Ghost](https://ghost.org/) at gfsc.community, instead of some combination of Patreon, Mailchimp, Substack and Medium
- **Login for everything:** [Dex](https://dexidp.io/) on top of GitHub (your GitHub account is now also your GFSC ID), instead of Okta, Google Workspace, or (most commonly) a different login for every app
- **Internal docs and handbook:** [Outline](https://www.getoutline.com/), instead of Notion and Google Docs
- **Scratch notes and shared pads:** [HedgeDoc](https://hedgedoc.org/) instead of Google Docs and third party Etherpads
- **Web stats for every site:** [Matomo](https://matomo.org/), instead of Plausible (which we were paying for) or Google Analytics
- **Social media scheduling:** [Postiz](https://postiz.com/), installed but parked for now (see below), instead of Buffer
- **Discord integration:** our custom built [donna-bot](https://github.com/geeksforsocialchange/donna-bot). Replaces various single-function third-party Discord bots.
- **Monitoring on every box:** [Grafana Alloy](https://grafana.com/oss/alloy-opentelemetry-collector/) collectors
- **Databases and forms (coming next):** [Grist](https://www.getgrist.com/), instead of Airtable and Google Forms
- **Fediverse presence for the blog:** Ghost’s built-in ActivityPub, instead of running our own Mastodon server, although this needs work before we commit fully
- **And **[**PlaceCal**](https://placecal.org/)** itself**, on its own two boxes, deployed the same way

The title’s actually a little bit of a cheat, sorry about that, because we also have our PlaceCal servers to host and we use them a little bit for some of these too (in total we now spend about &#xa3;37 a month on a total of 4 servers including this one). But for most organisations, we think a single [Hetzner](https://www.hetzner.com/cloud) box will do the job and will run all of this. To put that in context, this is basically the price of two monthly seats on any app, or one and a half: even Google Workspace is about &#xa3;6 to &#xa3;7 per person per month.

Before, we were juggling a dozen different SaaS apps on their free tiers, and that’s where all the labour goes: maintaining those tools. Now we have single, documented routes and places for everything we do.

> In these days of rabid, ideological and groundless repression you have often asked us:&#xa0;*&#x201c;How can we support you?&#x201d;*

> The first answer that has come to our minds is: if you want to help,&#xa0;**create new spaces online**.&#xa0;**There are way too few autonomous servers around there**, whether for email and web hosting or for any other useful communication tools.&#xa0;

– [**Autistici/Inventati Collective**](https://keepitfree.ai/announcements/go-forth-and-multiply-may-10-100-1000-servers-spark-up/)

![How we run GFSC’s digital infrastructure for &#xa3;10 a month](https://gfsc.community/content/images/2026/09/OIP-991451106.jpg)![How we run GFSC’s digital infrastructure for &#xa3;10 a month](https://gfsc.community/content/images/2026/09/image2.png)![How we run GFSC’s digital infrastructure for &#xa3;10 a month](https://gfsc.community/content/images/2026/09/the-truth-about-poob-v0-hc5u4bg16sne1.png)
*How it might feel reading about Grist, Okta, Matomo, Postiz, Dokku, Docker, Kamal and Grafana in quick succession.

*

## The goal is pragmatism

This whole approach has been about pragmatism. So a few caveats. Our overall goal is to self-host our own apps and move off corporate services. We’re also trying not to overcomplicate our lives: in this case that means keeping things as close as possible to how they are now, so we can update them incrementally and increase our independence over time. I’m very disabled and have very little time for this. I have no ambition to be a coder long term. I’m just a pragmatic, scrappy anarchist trying to get stuff done. Other volunteers have little time too. So we’re trying to set it up to be as low effort and as maintainable as possible.

Therefore, yes, before people come for me, we are using GitHub and AI to manage this. You could do it without if you wanted to: I just didn’t have the skills or inclination personally. I think this is one of the best uses of AI: short term interventions to reduce your dependence on big tech long term. If you’ve ever tried to set this kind of thing up manually you’ll know the pain of spending hours or days faffing with yaml files and restarting docker containers and kicking tyres and swearing. AI takes the pain out of this process of trial and error, which I think drastically lowers the bar to quitting the corporate stack.

Specifically, the three rules we have been building to are:

**One source of identity, as far as humanly possible.** This is where a lot of organisations come unstuck. Over time we generate larger and larger databases, larger and larger email lists, and WhatsApp and Signal groups full of people who may have been involved at some point but are now not active. These then map over onto other apps, and we forget who has the trial account, where the login is, whose account that is, and whose SSH key that is on the server, by the way? It comes to be a mess. So we have GitHub and OIDC as the single source of identity, as far as we can. Not everything has OIDC, but it seems to be the place things are converging.

**Host as many of our own services as possible.** Doing this not only has the immediate benefit of removing other people’s computers and monthly fees, it also makes it far easier for us to automate integrations between our services. This gets us back to the Linux single responsibility principle, where every tool just has to do one thing, because they can all talk to each other. And we’re not, again, juggling free tiers.

**One way to do everything, not ten.** For example, for deployment we were previously using Co-op Cloud, Dokku and Kamal. Making it just Kamal means everything runs in one single reliable way. Volunteers only have to learn one method, we can set up better reporting and reliability for the methods we are using, and we can actually start to build up expertise.

This is exactly our example of [building shared infrastructure](https://gfsc.community/the-geeks-for-social-change-manifesto-v1-0/) and owning our own means of production.

## One login: GitHub as your GFSC ID

The biggest call we made was to use GitHub as our GFSC ID. This came out of realising that, as a community manager, I ended up having to facilitate a bunch of things in different places. We had code repositories all over the place, all of them needing different logins, all of which needed me to manage them. And, like most organisations, we weren’t very good at removing people or keeping on top of it.

So while there are a lot of issues with GitHub, we get far too much value from our nonprofit plan to turn down. We basically have unlimited private repos, templates, CI minutes, and deploy pipelines, and it’s all completely free. Almost everyone already has an account on it. This is the free as in beer stuff for us: there is no open source alternative that would beat this. Having it all in one place also makes it easier to migrate later, because we know exactly what we’re hosting and where.

On top of the team management GitHub gives us, we use [Dex](https://dexidp.io/) as a little middleman that provides an OIDC gateway. We tried [PocketID](https://pocket-id.org/) briefly first, but found it too fiddly. So all we have to do to add someone to every single service is add them to our GitHub team. We have some granularity on this too, and we can use it to collaborate with other organisations: we can add another organisation, and some teams within it, to view parts of ours, and everything is tracked in a single access file.

At some point we might migrate this out to a dedicated identity server like [Authentik](https://goauthentik.io/) or [Keycloak](https://www.keycloak.org/), but for now those take a lot of memory and are very complicated. The main thing we’d like from that is to combine all the different logins across all our services without people having to rely on a GitHub login. Having all our identity done in one place should make it easy to migrate at a later date though!

## One way to deploy, one way to update: Kamal and Renovate

As mentioned at the top, we were already using [Kamal](https://kamal-deploy.org/) to run PlaceCal. It basically uses Docker to push updates to a remote server, driven from Git. This means all we have to do to update software is merge to the main branch. Our infrastructure repository has all the services and the mappings for what goes where, and no one needs SSH, secrets or anything beyond GitHub access to work on it.

Access lives in one file in the same repo: who has SSH where, who has write on which repos, who’s in which wiki group. Changing it is a pull request, and everyone’s keys are pulled straight from their GitHub account. We then have [Renovate](https://docs.renovatebot.com/) tracking updates: it opens (and merges) pull requests whenever there’s a new version of something, automatically.

What this means is that everything we want to do is tracked in a GitHub issue. If people have time, they can simply have a go at taking something off the backlog. We have a complete log of every change anyone makes to a server. The only hidden things that still need me are actually accessing the Hetzner control panel and Cloudflare; everything else can be done by volunteers without me. So people can come and talk at the collective meetings, or they can do something completely async.

## Where it’s harder, and where we went corporate on purpose

As with all this stuff, there are a few annoying rough edges. We still have to pay for [Mailgun](https://www.mailgun.com/) for transactional email, because we can’t really self-host deliverable emails (believe us, we tried). We’re using [Cloudflare](https://www.cloudflare.com/) for hosting, DNS and protection, mostly because it has an enormous free suite with multi-user login.

Then there are a few bits where we’re struggling. We started using [Postiz](https://postiz.com/) to do our social media, but this is definitely an area where it gets harder. You need to register developer accounts with every platform, the server requirements are quite high, and I think these things just break more often. Registering a LinkedIn developer app, for instance, can apparently take a few weeks. So for now we’re using Buffer, but we’ll definitely come back to this later.

Our server is also starting to get quite full. We’d like to upgrade it, but the next jump up from here is more like &#xa3;20 a month, so we’ll probably do that when we have a few more things we want to run.

[Grafana Cloud](https://grafana.com/products/cloud/) is great. It’s a shame it’s not on our OIDC login, but it’s obviously essential that monitoring runs somewhere other than the server you’re trying to monitor. Ghost also doesn’t have OIDC login, which is a real shame, as this is probably the number one thing we’d like to have connected.

Discord is perhaps the thing that feels most out of control. There’s no easy way to maintain Discord configurations, channel setups and moderation; it’s all click ops. But everyone’s on it, we’re already using it as the centre of our community, and we now have [a little bot](https://github.com/geeksforsocialchange/donna-bot) we can use for integrations.

And finally, as mentioned before, we decided to [discontinue our Mastodon server](https://gfsc.community/why-we-discontinued-our-mastodon-server/), and we probably wouldn’t run it again. Having these external-facing services has all the issues we talked about in that article. So I suppose what we’re saying is that this setup is for internal-facing services, and for things everyone is registered for.

## If you want to do this yourself

1. **Pick one source of identity.** For us that’s GitHub, with Dex turning it into an OIDC login for everything else. Add someone to a team and they’re in everywhere.
2. **One repo for all your infrastructure.** One folder per app, each with its Kamal config and a secrets file that holds names only.
3. **Merge to main deploys.** Nobody needs SSH or secrets to change how an app runs, just GitHub access.
4. **Let Renovate open the update PRs.** You merge them; nothing goes stale because nobody remembered.
5. **One access file.** Who has SSH where, who has write on what, who’s in which wiki group. Changed by pull request, keys pulled from GitHub.
6. **Monitor from somewhere else,** and keep a runbook in markdown so the next person doesn’t need you.

Our repo is basically a folder per app, an access file, and a Renovate config, plus that runbook.

```
gfsc-infrastructure/
├── README.md            # what runs where
├── RUNBOOK.md           # how deploys, secrets, access and break-glass work
├── PROVISIONING.md      # how to build a server from nothing
├── access.yml           # who can do what, everywhere: change by PR
├── renovate.json        # automatic update PRs
├── dex/                 # the login (GitHub to OIDC)
├── outline/             # one folder per app, like this one:
├── hedgedoc/
│   ├── Dockerfile       # wraps the vendor image
│   ├── config/deploy.yml   # the Kamal config, no secrets in here
│   └── .kamal/secrets   # names only; values live in GitHub Actions
└── .github/workflows/   # one deploy-<app>.yml per folder, plus checks
```

We’re working on an anonymised version of this you can fork for your own thing. [Join the mailing list](https://gfsc.community/#/portal/signup) and we’ll tell you when it’s out.

## Conclusion

So yeah, it’s messy, and it works, and it’s ours. Having this server has given a completely different focus to our operations. It gets us away from the ongoing chat-log disposability of Discord and group chats, and gives us actual concrete things to base the work on, so that we have properly tracked tasks and responsibilities, as outlined in [some](https://gfsc.community/consensus-decision-making-sucks/) of [our other articles](https://gfsc.community/mega-meetings-a-no-pressure-model-of-accountability/). We set strategic goals once a month and run a weekly drop-in, and beyond that, nothing is mandatory.

We’re really happy with it. There are a lot of improvements to make and things we might change in a year or so, and we’d love to know what you think, and whether you’ve been trying anything similar.

I hope that it becomes increasingly normal for activist-y orgs to start having their own infrastructure customised to their own needs. Autistici/Inventati, quoted up top, who ran this kind of infrastructure for movements for 25 years until the US [government shut them down last week](https://keepitfree.ai/announcements/go-forth-and-multiply-may-10-100-1000-servers-spark-up/), signed off with &#x201c;may a thousand servers spark up&#x201d;. Here’s ours.

*Want support to make your own? Join our *[*Discord*](https://discord.com/invite/EwFHSp8h9h)*. Want us to set one up for you? *[*Contact us*](https://gfsc.community/connect/)*, we consult!*
