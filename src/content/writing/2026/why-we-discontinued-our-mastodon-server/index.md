---
title: 'Why we discontinued our Mastodon server'
description: 'After three years of running our Fediverse server, we''re shutting it down. Not because we''ve given up on the Fediverse, but because it isn''t safe or sustainable enough for a community org like ours to run a server on a shoestring. Here''s our roundup of the good, the bad, and the ugly.'
pubDate: 'Jun 23 2026'
heroImage: './images/hero.jpg'
tags: ['practice', 'essays']
source: 'gfsc-community'
externalUrl: 'https://gfsc.community/why-we-discontinued-our-mastodon-server/'
---

We set up our [Mastodon](https://gfsc.community/community-spotlight-mastodon/) server in late 2022. It was an experiment started at the peak of our success winning funding bids. I’d never touched Mastodon before and didn’t really understand what it was, but one of our staff was a big fan of lurk (a Mastodon instance), and as a studio with a decent turnover we had the resources to have a go at using it as our official communications platform, it felt like the right thing to do. Specifically we ran the Hometown branch which was set up by the wonderful [Autonomic](https://autonomic.zone/) who provided a lot of support for us in kind (and you should use them for your hosting needs).

The thing with the Fediverse, unlike other social media, is that there’s no corporation out there footing the bill for your use. So it makes sense to set up your own server, if you don’t want to be a drain on the network.

However since 2024, all of our core funding and funding bids have fallen away. The server dwindled to three active users, and the operating costs and effort of keeping it maintained were no longer worth it for our economy of scale. It was a bigger cost, and more effort, than the rest of our hosting put together.

I love the idea of Mastodon, but we’ve had to temporarily stop hosting on our own server. We can’t justify the cost or the effort, especially with no income coming in to speak of. We’re not giving up on the idea forever, though: we just need a proper reset, to think about why we’re on the fediverse and what we hope to get out of it.

This article is about our experience of the last four years, using everyone’s favourite retro format: what we liked (rose), what was promising (bud), and what the eventual killers were (thorn).

![Why we discontinued our Mastodon server](https://images.unsplash.com/photo-1530906622963-8a60586a49c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDEzfHxyb3NlfGVufDB8fHx8MTc4MjEzODAwM3ww&ixlib=rb-4.1.0&q=80&w=2000)
*Photo by [Nikita Tikhomirov](https://unsplash.com/@niki_mir) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)*

## Rose: the good stuff

### It’s prefigurative

Probably the best thing about running Mastodon is that it feels like one of the most genuinely prefigurative networks on the web today. People have wanted this kind of microblogging social media ever since Twitter, and here it actually is, really running. You can join the network right now. It’s genuinely decentralised. Everything it claims about itself, technically, is true. It’s a real, running thing you can join, an experiment that people actually use. We ran a one-day unconference called UntechCon that got a decent audience primarily because of the Fediverse. It’s one of the very few things you can point to and say: this is what community-owned infrastructure actually looks like.

### It’s got a unique audience

It’s genuinely got a different audience to other platforms, one you won’t find anywhere else. It’s hard to tell exactly where our donors have come from, but I think we’ve gained a lot of supporters and donors through the Mastodon network, and it’s felt like our most successful social media apart from Instagram. I feel like this might change over time, but a lot of what I enjoyed about the earlier internet was the way it skewed towards supporting creators and people who upload original content. It’s more about hobbyists, and finding people with similar interests. When I go on other social networks now, like Bluesky, it mostly seems to be a competition to have the spiciest take of the day and yell at each other. The emphasis on those platforms is on going viral and being a commentator, *literally* a reactionary getting famous doing ‘react’ posts to current events.

The Mastodon audience feels very into what they’re doing, for better or worse. There are an awful lot of posts about things I don’t really need to read any more about: Linux, the fediverse itself, the differences between protocols, the same 3 anti-AI arguments ad nauseam, and so on. But there are also posts about moss and windows and gardening and niche interests, tons of furries and queer people, and a general sense of counterculture I think lost from mainstream platforms. In other words it’s the sort of stuff that feels like my internet.

### It’s non-commercial with no ads (and that has more implications than you’d think)

There are no algorithms, so you can really only discover people through hashtags. My friend who got me into it once put it to me that corporate social media is a kind of infinite horizon, where you can make eye contact with anyone, anywhere in the world. For me that’s a bit too open nowadays. There’s a naive idea of the town square in there that I don’t think quite works; in practice it’s more like a global shouting match. Because of the way the protocol works, on Mastodon you can generally only see people a couple of servers away, friends of friends, which makes it a very different experience. It also means the politicians, the pop stars and the footballers mostly aren’t on there. It’s not a network you join to keep up with key people. It’s one you join to find the weirdos whose interests you share.

And then there’s the big one: there are no ads, and no influencers in the same way. There’s still discourse, but it’s a different kind of discourse, and it feels far less cognitively overloading. The interface isn’t constantly changing. I’m not having new things poked at me. I’m not being told to follow Manchester United or Piers fucking Morgan. It feels more like a bulletin board, more constructive, more focused on making things. The dunking is there, and there are some genuinely nasty sides to it that we’ll come to later, but a lot of it feels like it comes from a place of autistic special interest rather than people turning up purely to pick fights.

![Why we discontinued our Mastodon server](https://images.unsplash.com/photo-1578678416030-d59936abe284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDI4fHxidWR8ZW58MHx8fHwxNzgyMTM4MDIyfDA&ixlib=rb-4.1.0&q=80&w=2000)
*Photo by [Georg Eiermann](https://unsplash.com/@georgeiermann) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)*

## Bud: promising but unfinished

### There’s little reason for most people to join

The most promising things about the fediverse are the ones that aren’t quite there yet, and I hinted at the biggest one in the last section: the audiences aren’t there, so it’s really hard to get anyone to switch over. I spent a lot of time talking to people who’d are politically aligned with it to try and get them to join our server, like activist organisations, artists and community organisers. In principle plenty of them are up for it, but in practice they’re never able to prioritise it: it never drifts high enough up their to-do list for them to manage. This is the kind of big chicken-and-egg problem that needs to be taken seriously.

### The audience can be culturally monolithic

Mastodon servers are almost entirely programmers. According to some stats, it’s 67% male, overwhelmingly white, and the trending hashtags are all programming languages. The single biggest cluster of servers is all for technical people. There are historic issues with Black users being driven away, and disabled people are far more likely to find it inaccessible: in one widely-cited survey they were over three times as likely to describe Mastodon as inaccessible. This doesn’t really seem to bother anyone, and I’m not sure whether that’s down to the culture, but with my GFSC hat on, I think the problem is there’s no investment in community development effort on the ground taking these things seriously on a structural level.

Most people I talk to actually want to be on *less* social media, not more. Everyone I’ve talked to about this who’s interested would, honestly, rather not use anything, so adding one more option isn’t really on the table. People inevitably go where their audiences are, and where their income comes from, and neither of these are on Mastodon.

### The governance prioritises features over community

This is exacerbated by the governance. There are some moves towards making it more community-owned, but almost every decision made so far has been by and for programmers. So while we’ve got rid of the corporate side of things, the priorities of a largely white, male, cis, Western programmer base get put first, with questions about community safety and moderation might work , or how we could build support networks for moderators seen as side details. There are endless protocol wars and debates about the platform itself and how it compares to others, far more than any other social media site. And honestly, the community can be extremely hostile and quite single-minded. While the technology is decentralised, the culture feels monolithic. There’s a Mastodon way of thinking, and if you don’t like it, you can expect to be told you’re wrong, repeatedly.

### It’s expensive

Finally, the cost and hosting are really out of reach for grassroots organisations. If you’re not explicitly a tech-based organisation, there’s no way you’re going to go down the path of maintaining your own server, so you’ll use something else. Mastodon is a massive piece of software that’s genuinely hard to run. Most of the other options out there are still in beta, which brings a whole realm of problems I’m not really up for touching. Until it’s easier for orgs to self-host this kind of thing, they won’t do it. Most of the monthly fees to run it out there are just out of range, especially at a time when most organisations are trying to reduce their spending, not increase it. We did have a few kind donors supporting us, which made a huge difference and we are very grateful for them – but we never got close to covering costs overall and we are not sure what the route to doing this systematically would be.

This obviously reinforces the lack of audience: people might pay to put adverts on Instagram or Threads or Bluesky because they can reach an extended audience, but there’s no way they’re going to pay just to be on the fediverse, where the audience is unproven.

![Why we discontinued our Mastodon server](https://images.unsplash.com/photo-1504717821152-66ca3db3ed8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHRob3JufGVufDB8fHx8MTc4MjEzODA1NHww&ixlib=rb-4.1.0&q=80&w=2000)
*Photo by [Andrey Grinkevich](https://unsplash.com/@grin) / [Unsplash](https://unsplash.com/?utm_source=ghost&utm_medium=referral&utm_campaign=api-credit)*

## Thorn: what needs to change

### There’s a lot of extremely bad people and no support to deal with them

Finally the bad stuff. When you start running your own server, you realise just how close you are to the extremely bad parts of the internet, all the time. I’d gone pretty much abuse-free until one day I posted a selfie of myself (a white trans woman), and it got reposted onto what looked like a fascist, transphobic, CSA-adjacent server. I honestly didn’t spend time looking too closely. It came back with horrible transphobic and abusive remarks, people were photoshopping it, and it was very quickly getting boosted between several other servers, all with the same comments about my appearance.

Luckily, I was literally online and watching when it happened, and I had access to the admin features to put blocks across servers that had picked it up. If I hadn’t been, I assume it would have got much worse. It was incredibly horrible, and I assume every other admin is dealing with a lot of this. (Or maybe they’re not, because they’re not marginalised in any way, which itself speaks to the white-dude-programmer-led culture?).

No part of the setup or install instructions for Mastodon warns you this might happen. There’s no culture around supporting the people who do moderation, and I can’t quite see what the long view is here. There are some things around shared blocklists, but I don’t know whether they’d catch this kind of thing. You can tell it’s been built by people who’ve never been targeted online and probably aren’t at risk of being mobbed by fascists. When it arrives, you’re on your own. There was no emotional support, nowhere I could turn.

### Moderation is an unsolved problem and it’s getting worse

This is borne out by the numbers. [IFTAS](https://about.iftas.org/2026/01/08/the-2025-social-web-trust-safety-report-is-here/), the one organisation trying to support fediverse moderators, [nearly collapsed in early 2025 over funding](https://about.iftas.org/2025/02/06/funding-challenges-and-the-future-of-our-work/) and had to cut most of its services. Its 2025 report found the moderator-to-user ratio is the worst it’s ever been, at around 1 to 3,500, with one in five admins reporting trauma or exhaustion. And there’s a huge pattern of admins simply walking away: [mastodon.technology](https://ashfurrow.com/blog/mastodon-technology-shutdown/) shut down after five and a half years, with its admin citing burnout and resentment, and med-mastodon, botsin.space and moth.social have all gone the same way.

### The Online Safety Act

There’s also the legal side. This has massive implications under the [Online Safety Act](https://jrashford.com/the-online-safety-act-a-new-threat-to-the-fediverse/), and it’s another ongoing thing in the space: the UK’s Online Safety Act basically means that if you run any kind of service people can use, you’re held to the same standards as Facebook. As far as I know, as soon as one of these servers hosting CSE material federates with mine, that material is being downloaded onto my server, and I could be in serious fucking trouble, to say the least.

Again, there’s no support from the network for this. I think everyone’s grinning and bearing it and doing their best. A few legal-minded people have tried to write up guidance ([one admin’s assessment for a single-user server](https://www.bentasker.co.uk/posts/blog/law/doing-an-osa-assessment-for-my-single-user-fedi-server.html) gives a sense of the burden), but honestly it’s just a huge risk right now, especially in the UK, to run a server when we don’t know how any of these laws will land or how Ofcom is going to enforce and support them. It feels like it’s locked small groups out of running anything. You can look at all the [community forums that have closed down over it](https://www.computing.co.uk/news/2025/legislation-regulation/call-to-exempt-small-sites-from-the-online-safety-act) and see the fediverse as a kind of ticking problem.

### There’s no funding for IRL community building

The hardest part of all of this is funding the work. Right now it’s really hard to get a server off the ground unless that’s your specific passion in itself. A lot of communities are generous with server donations, but as yet we don’t have an answer to how we’re supposed to do community moderation.

This links back to what Mozilla have called the [post-naive internet](https://www.mozillafoundation.org/en/nothing-personal/the-post-naive-internet-era/). So far, we’ve just been using services run by corporations who outsource their moderation to poor countries where it can be done cheaply, and there’s a lot written about [the human cost of those moderation centres](https://www.behindthescreen-book.com/). Getting people to help out with moderation or administration feels like an entire organising task in itself, separate from the labour of setting up the server. There isn’t the sense of people chipping in to support it the way they would for other community efforts: the labour is invisible and you can feel a lot like a corporate call centre worker but for free when things go down. Since moving onto someone else’s server, I’ve found how easy it is to forget the enormous amount of work that goes into it already.

Bottom line is I lost a lot of money out my own pocket running it that will never be recovered and only really caught shit for doing it. Of course this is a mess of my own making (which is fine!), but ultimately it’s an expensive service to run, and that’s before we think about resourcing it properly and being able to properly fund tech support and give at least mental health support to moderators. I think Mastodon needs to learn from the history of mutual aid organising. Perhaps the most disappointing thing about running a server was exactly this: how little other people were willing to engage in building a shared thing, together, as for me that’s the joy of mutual aid. If hosting a server isn’t your passion, the fediverse has very little to offer you as an admin, which is going to place a hard limit limit the kinds of groups, and the kinds of people, who can be on it. In short I think it probably doesn’t have a future until we cultivate a cultural feeling for this that’s more “let’s organise food not bombs” and less “let’s start an unpaid NGO”,

There’s probably a sweet spot somewhere between running a tiny server for a handful of people and running a massive one where nobody really knows each other, perhaps in the hundred-to-a-thousand active user range, but I’m not sure. It’s something we want to research properly, talking to other server admins to find out what actually works.

## Coda

Honestly, my anxiety and mental health since shutting down our server has drastically improved. I don’t think I realised how anxious it was making me until we shut it down. Running a server made sense when we had funding and staff. As a tiny unfunded org, it wasn’t safe, it wasn’t sustainable, and it wasn’t having enough impact to justify the cost and effort.

So where we’re at right now: we’ve shut the server down. I’ve migrated my personal account to [lurk](https://post.lurk.org/), and we’ve migrated the studio account to [sunbeam.city](https://sunbeam.city/@gfsc), and we hope to support these communities more when we have a bit of breathing room. Our Ghost blog also has a fediverse integration, but progress on that feels like it’s been abandoned, which is a real shame, because ideally we’d just use that and run one less service. This is a holding position, though, because we’re not giving up on the idea.

What we’d like to do next is keep having proper conversations with our friends and allies about starting something together, aimed at GFSC’s mission of helping people use technology to do community things. We want to set up a new server, perhaps called organise.diy (a placeholder domain I picked up for &#xA3;1.50), aimed specifically at UK community organisers. The fediverse is very, very tech-focused, and what we’re really trying to do at GFSC is build a social practice around technology adoption, rather than just put another piece of software out there. Through our PlaceCal work and a few other things, we’re already talking to organisations who’d be interested. But realistically, we need to win a funding bid or receive a large donation to do the necessary community development work so we can think holistically about the impact of leaving corporate platforms in control of our communications. If this is a thing you’d like to partner with us on, do get in touch.

We’ve had a version of this before. I’ve [written about Indymedia in the past](https://gfsc.community/our-social-business-model-how-gfsc-plans-to-fund-community-infrastructure/), and what made Indymedia work wasn’t just the software and the technology. It was the network of computer suites and computer centres in social centres up and down the country where you could go and get training in how to publish a news post. The software became less important than the fact that you could walk into a local community centre and someone would help you post. We are definitely not there with Mastodon. It’s still explicitly advertising itself along the lines of what the technology can do, which isn’t of interest to most people. We need to start situating it in places people already go and providing support in place if we are to have any serious chance of challenging big tech hegemonies here.

We’ve been having a lot of these conversations, and we’d hoped to do this more as a straight switchover, but we’ve realised that isn’t really possible. We’ve also tried to get funding for it and been unsuccessful so far. But we think we need to keep making the case: if we genuinely want software that’s for communities and actually transformative, we can’t expect it to spread virally online the way every other technology does. We have to do the community work on the ground. We’re also going to have to collectively get together around things like the Online Safety Act and figure out how moderation can ever be sustainable. If we can do that as a community service, it’ll make the whole network work a lot better.

As a finishing thought: if you want the Fediverse to survive: stop asking for features, stop splitting hairs about protocols, and stop moaning that people aren’t on it. Ask what’s missing. Because honestly, right now it just isn’t good enough for what most community organisations need. There are major unsolved problems that need to be addressed before it’s ready for the prime time. Rather than getting mad at Bluesky for taking over the debate, the fediverse needs to look at itself and ask who it’s including, who it’s excluding, and how it can actually become a transformative social network, rather than a technological toy for computer programmers.
