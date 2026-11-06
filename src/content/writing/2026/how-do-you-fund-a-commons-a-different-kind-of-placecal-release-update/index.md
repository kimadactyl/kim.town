---
title: 'How do you fund a commons? A different kind of PlaceCal release update'
description: 'Adding an MCP server to improve AI chatbot search in PlaceCal started a bigger conversation: who pays for a community-owned commons, and what do you trade to keep one alive? A real-world discussion on AI ethics.'
pubDate: 'Nov 05 2026'
heroImage: './images/hero.jpg'
tags: ['ethics', 'practice']
source: 'gfsc-community'
externalUrl: 'https://gfsc.community/how-do-you-fund-a-commons-a-different-kind-of-placecal-release-update/'
---

We last updated you on PlaceCal in June, when we [shipped a directory](https://gfsc.community/placecal-v0-28-update-we-now-have-a-directory/). Since then, we’ve shipped a new theming engine that lets people host their own sites on PlaceCal, given [The Trans Dimension](https://transdimension.uk/) an overhaul, started getting our [pricing information](https://join.placecal.org/) live, and made a bunch of other improvements.

In response to multiple public sector enquiries we’ve seen recently about AI and community information, I added an [MCP server](https://placecal.org/mcp) as a small layer over our existing GraphQL endpoint. MCP means [&#x201c;Model Context Protocol&#x201d;](https://mcpservers.org/learn/what-is-an-mcp-server), and is a way for AI assistants like ChatGPT, Claude or Copilot to directly query PlaceCal events and group information without having to crawl the site itself. You can kind of think of it like a human interface to an API that otherwise would need you to write code to access it. For example, you can ask it &#x201c;tell me queer events in Manchester this weekend&#x201d; and it can query that directly over the API, rather than loading a set of web pages and scraping the data from them.

This perhaps reasonably raised a few eyebrows on [the Discord](https://discord.gfsc.studio/). Someone interested in setting PlaceCal up in Glasgow asked whether this would be something groups could opt out of. There’s a lot of very justified fear around AI and AI companies that this update did nothing to allay, and I could deffo have communicated it better. This prompted an interesting discussion about all the competing interests that go into AI: our desire to fund PlaceCal, communities’ need to get on with having accurate, high-quality, accessible, translated information now, in the tools they already use, and a general view of the trend and what it means for society.

On one level this is a worked conversation about AI ethics, but underneath it all is a conversation about money. How do you create a commons under capitalism? What compromises, and what competing needs, do you have to balance to keep one alive?

![How do you fund a commons? A different kind of PlaceCal release update](https://gfsc.community/content/images/2026/11/DP167135.jpg)
*Commons used to look like this, and anyone could graze their animals there. A public good, now in private hands.*

## Nobody funds the commons

Open source tech people tend to see software as the goal and users as a side product. The goal is polishing and perfecting the software. Generally the target audience is other tech people, and the mentality is that everyone is a liberated individual who runs their own server, or their own software, or something similar. It kind of embodies the original white-libertarian-rich-cisdude-coder [RMS version of freedom](https://www.gnu.org/philosophy/free-sw.html), which seemed to mean everyone has the freedom to become a tech nerd.

By contrast with typical venture capital tech startups, investors see money as the goal with software user count as a proxy to get them there via more investment. Every venture capital startup is fundamentally interested in its user base and interactions, and how it can monetise them.

Trying to centre communities and users directly puts us in a weird third position. Personally, I see myself as a sociologist: coding isn’t really my calling. I’m a community organiser who uses technology, and software feels like the plumbing for that. Don’t get me wrong, I do care about writing good code. I’ve shipped a bunch of Rails sites, and I’ve done it a bunch. But fundamentally, I don’t see my long-term role in the project as a programmer, my goal is social impact and tech is one tool to get us there.

To me PlaceCal is more like [Wikipedia](https://www.wikipedia.org/) than say, Libre Office, Mastodon or Firefox. Sure, [MediaWiki](https://www.mediawiki.org/) is the open source software that backs it up, but Wikipedia is the main use for it. It’s the same with [OpenStreetMap](https://www.openstreetmap.org/). We’re trying to create something where the main thing is the organising itself, and the software is a tool to do that. For us, centralisation is a bonus – we are attempting to create a public directory. Like Wikipedia, any decentralisation in its operation lives on the political organising layer, not within the software itself *(whilst noting that our community development approach creates a wide network of event iCal feeds that we are currently the only ones consuming)*.

So there are three different approaches here, and only two of them have a funding route. Open source and tech grant funders will pay for software to be developed for software people. Venture capital will pay for your business idea, to try and build software that gets people using it. Nobody wants to pay for a commons to be built. Or at least, we’re not big enough to attract that kind of investment or philanthropic giving yet. It makes me wonder what Wikipedia was like for its first dozen articles, and how they scaled from there. It’s messy, and the outcomes don’t fit into any of the existing boxes. There isn’t a supportive infrastructure around it, and it doesn’t seem to be a social objective in either of the worlds we’ve discussed.

So how can we fund it?

## Why the money we can get misses it

So, venture capitalists need an exit. The goal is to build a company that’s sold to a bigger company, which is structurally incompatible with what we’re doing.

Open source funders fund the code, using metrics like GitHub stars, installs, code purity, and ecosystem: how much it’s depended on by other things. They don’t really seem to care about the operational stack or working with digitally excluded groups.

For example: we got turned down by one funder because of our support for things like Google Calendar and Outlook, when they thought we should be pushing people towards open source things like [Gancio](https://gancio.org/) and [Mobilizon](https://mobilizon.org/). (I would love to see them have that conversation with any of the 80-year-olds who run church groups in Moss Side). I think the goals here feel completely alien and unrealistic, and out of touch with what on-the-ground digital inclusion looks like with community groups.

Digital sovereignty, at least in Europe, currently seems to be translated as something like: &#x201c;let’s keep our current military surveillance industrial thing, but have it run by European rather than American operators&#x201d;. Not that this isn’t a good thing, I guess, but I don’t really think it leads towards a liberated world.

The gap we’ve hit a lot of times is that community funds don’t want to fund digital: in part because of the expertise, in part because of the cost, but overall because I don’t think they really understand it. They have no real metrics to understand this, and we’re often going in at a strategic level above the one the often poorly paid fund managers are operating at.

Digital funds, on the other hand, don’t really seem to want to fund community work. They have the same idea of universality that the tech sector does, of making one thing that ships to millions or billions. Our much more arduous work, working individually with community groups one at a time, is, I think, outside the realm of what they’re expecting to fund.

![How do you fund a commons? A different kind of PlaceCal release update](https://gfsc.community/content/images/2026/11/HCS_bus49.jpeg)
*The bus factor: if it collides with the linchpin of any project, this is bad for everyone involved.*

## So what is our route?

The realistic state of PlaceCal is that operationally it’s still a [bus factor one](https://en.wikipedia.org/wiki/Bus_factor) project. A lot of people are starting to set up and be part of this, we have a few sales in the wings, and we are setting up a trainer pool that can start to carry this in the new year. We nearly  have enough donations to cover our basic operational costs, and maybe some of our time will be covered in the near future. But really, what this needs to be sustainable is a small team of 3 to 5 that can cover code, operations, tech support, community management, moderation, legal and finance. This is obviously a significant overhead, and a very long way from where we are now.

From an anarchist perspective, I think we’re always operating within the cracks of empire, trying to find our way through pragmatically to a better future. Most of the time, what this means is that we’re reliant on ourselves and other people giving their labour for free, in the hope that we can change the world in a material way that makes this labour less needed (unless, of course, it’s necessary for life). The best way to make things sustainable is to make them fun or paid, or ideally both.

Currently, we’re trying to shift to trading income. While we think the eventual view of this is more institutional-level funding, for now the people really interested in what we’re building are small community centres with enough free budget to pay us around &#xa3;2,000, and a &#xa3;30 to &#xa3;50 a month contribution towards maintaining our servers and bug fixes. This is great, and in some ways it feels a lot more sustainable than when we were reliant entirely on funding bids. But obviously there’s an enormous gap from here to having that team of five paid people.

The big institution-level interest we’re getting has now completely pivoted towards AI, but we currently estimate each one of these sales is worth ten times what we get from a community-level fund. It’s become incredibly apparent that if we’re going to have any chance of shipping this, AI chat agent interaction is going to be a required part of it. So this brings us back to the intro to this piece.

## Where we draw the line

I’m a big believer that to really make a project work, you have to be laser-focused on one goal. For us, I think that goal is a highly accessible, simple, sustainable public interface that respects people’s privacy and helps people find everything to do, all in one place. All of our other decisions are judged against that.

Every decision we’ve made so far is about being a kind of Swiss Army knife for community information. So we accept any input, and we’ve added a whole bunch of open data things: sitemaps, JSON-LD, microformats, iCal feeds and a GraphQL API endpoint. What the MCP server does is just wrap around the GraphQL endpoint, and let non-technical users query it through ChatGPT or Copilot or whatever they’re using.

So what does opting out of this look like? At what level would we stop it? Would we just have groups not go through to the MCP server? They’re still going to show up in search because of all the other linked data, so would we remove the linked data? Would we remove them from the iCal endpoints? It’s a bit of a quandary. I think underlying it all, it’s extremely difficult to be &#x201c;an open, accessible and complete platform, *except for...*&#x201d;. The worst-case scenario is that we risk implying groups don’t exist when they actually do, or creating confusion at a community level. But when people pop up with problems like this, it’s because they care about the project and I want to work out how we can respect that and keep people inside the tent.

We’ve done our best to block training bots. We’re under the assumption that new models wouldn’t be trained using the MCP endpoint, but rather by bots crawling the web all the time, and there’s not a lot we can do about that *(in fact, *[*our recently added climate assessment*](https://placecal.org/sustainability)* suggests that these crawlers are a bigger part of our climate footprint than our actual users – we’re currently working out what to do about this)*.

Our overall goal is to reduce social isolation amongst the most digitally excluded and socially isolated people. For people like over-70s, and especially people whose first language isn’t English, just having a natural language interface to the results in PlaceCal, in their first language is an enormous accessibility improvement. So while I personally understand the anxiety around AI, it’s starting to feel like we need to break that anxiety down into smaller chunks. For me, being able to access this kind of public information easily really outweighs any potential concerns about AI, and other people are welcome to disagree with me.

Fundamentally, as one disabled trans person maintaining a community service for 400-plus groups and ten partnerships, I would not have been able to continue this project without AI. In another universe, this would be seen as a public priority: we would have a team working on it, and we could make those decisions as a team. Sadly, we don’t live in that universe. Right now, this is the crack of empire I’m able to operate the platform within, and make a vision for a different way of doing community information.

![How do you fund a commons? A different kind of PlaceCal release update](https://gfsc.community/content/images/2026/11/1280px-Tsar_Bell-_the_largest_of_the_world_-19777634070--1.jpg)
*There’s a crack in empire. That’s where good work can be done.*

## The ask

Perhaps the most difficult thing for us is that we’re missing a community manager. There are over 400 community groups on PlaceCal who we haven’t spoken to since they were onboarded, and for many of them we were their only online presence back when we had the resource to manage that relationship. There’s massive potential to work through people’s worries and hopes about all this.

Our perspective from the start has always been that, regardless of our beliefs, to get people on side you first have to support them on their own terms. When we did have community development resource, a lot of what this looked like was helping people with their IT basics. Lots of community groups are stuck on setting up email filters, or learning how to use a basic Google Form to take event registrations. And yes, very often they want information about how they can use ChatGPT to send an email to their landlord, or to create these resources, as most community organisers are drowning in responsibility and have very little resource to do it.

I think once people are on side, we can then have a collective discussion about how we can move forwards together. If we don’t do this, we’re basically asking a stranger to change without offering them anything, which doesn’t feel good at all.

It feels really unsafe and risky right now to talk about having any positive use of AI at all in the circles I move in. I wish we had a way of raising these concerns while also properly resourcing, and being kinder to, the people who are just trying to get on with organising community life: our partners, the organisers, and me. It feels like there’s a lot of fear and anxiety, and people don’t quite know where to place it. I can’t personally stop big tech doing its thing, and I’m just trying to make the best of what we have going on right now.

So how do you create a commons under capitalism? For us, it starts with supporting people on their own terms. There are always reasons not to do things, but sometimes you just have to get on with it. How can we do that without alienating people?

It would be nice to imagine we could have meaningful community ownership of PlaceCal one day, one that doesn’t rely on me to mediate, and I’d [welcome ideas](https://gfsc.community/get-involved/) on how to get there. I would love not to be the one making these kinds of decisions for everyone. And always, [we welcome support](https://gfsc.community/support-us/) to be able to continue with this mission.

*Oh, and you can follow [PlaceCal releases and development on GitHub](https://github.com/geeksforsocialchange/PlaceCal/releases)!*
