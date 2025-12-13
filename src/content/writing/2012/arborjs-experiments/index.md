---
title: 'Experiments in JavaScript: arbor.js'
description: 'Arbor.js is a great little library that lets you make visual thesaurus style springy node diagrams using JSON network descriptions.'
pubDate: 'Jun 22 2012'
updatedDate: 'Oct 14 2015'
tags: ['javascript', 'data-visualization', 'web-development']
source: 'alliscalm'
sourceUrl: 'https://alliscalm.net/arborjs-experiments/'
---

I'm the first to admit I'm pretty horrible at elegant coding nowadays. When I was younger I used to have all the code skillz and none of the ideas - now it's totally the other way around, a direction I'm pretty happy about! In order to try and rectify this I've been playing with a few JavaScript libraries recently when it's come up for various projects.

![arbor.js demo](./images/vintro-1.png)

[Arbor.js](http://arborjs.org/) is a great little library that lets you make visual thesaurus style springy node diagrams using JSON network descriptions. I worked on a visual intro for a client, and while it wasn't right for them in the end I had fun playing with the library. A lot of the power of this comes from the renderer.js file, which essentially allows you to write your own functions for outputting the data. In this case, I added a method to allow images to be used. It is, however, fairly badly documented and you'll have to work out a lot from the examples.

This has in no way been performance tweaked, doesn't run on IE and crawls on a tablet. Also you may need to refresh a few times to get the images to load properly. I know, it's basically perfect right?

Documentation aside it's a very elegant, easy to use library and I'd definitely consider it for other projects.

[Try it out!](http://d.alliscalm.net/vintro/)

_Thanks to the folk at ION._
