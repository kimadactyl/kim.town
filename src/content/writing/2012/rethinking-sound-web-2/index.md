---
title: 'Rethinking Sound and the Web: Part 2'
description: 'I''ve bounced the ideas in Sounds and the web off a few people now and had some very valuable feedback.'
pubDate: 'Jun 18 2012'
heroImage: './images/hero.jpg'
tags: ['sound', 'design', 'data']
source: 'alliscalm'
sourceUrl: 'https://alliscalm.net/rethinking-sound-and-the-web-part-2/'
---

I've bounced the ideas in Sounds and the web off a few people now and had some very valuable feedback. The more I talk about it the more I'm determined to make this a reality. On re-reading my initial article there's a lot missing - I'll try and embellish this idea and look to making a prototype sooner rather than later.

## Why visualise?

The most fundamental question raised in this is, _why visualise?_ Sounds and images are processed very differently by the brain. Image thumbnails are hugely informative, in a way an audio thumbnail could never be. Secondly, a common crux in any studio environment where people are dealing critically with audio data, there's an awful tendency for people to try and compare waveforms by eye, to balance the position of mixer controls, or line up LEDs on outboard gear rather than using their ears.

Indeed, many of my biggest audio revelations have been working on a mixing desk with no meter bridge. Even doing my HND, the supervisors would periodically get us to turn off all visualisation equipment, and it makes a huge difference. People simply have more confidence in their eyes than their ears, due to the primacy of the visual in our society. So, why make the problem worse?

## Types of information

I'd argue that thinking about a visualisation of an audio file isn't exactly what I'm looking for here, paradoxical as that may seem. Here's a brief list of common forms and their strengths and weaknesses. If you can think of any others, let me know?

| Type of visualisation | What it tells you | What it's good for | Drawbacks |
|---|---|---|---|
| Audio file thumbnail | Nothing | Picking the right file if your audio has sensible filenames? | Current default in all major OSs and the web |
| Spectogram | Detailed frequency content in relation to time; timbral information | Audio file repair, detailed technical analysis | Large display space requirement, need acoustics training to interpret |
| Waveform graph | Detailed amplitude information in relation to time; volume information | Editing multiple audio files; navigating known files | Large space requirement, no frequency information |
| Graphic score | Rich semantic information | Representing music; compositional medium | Must be manually drawn; space requirements; only suitable for certain recordings |

## A different use case

These formats all have their own distinct use cases, but none of these are really what I'm after. I'm not looking for detailed information here - this isn't a way to browse a single audio file. The information in a spectogram or waveform graph is overkill. It's also not particularly relevant - I'm not looking for a _literal graph_ of the content of an audio file, I'm looking for a _semantic representation_. I'm also looking to be able to deal with a large number of files with relative ease, finding something appropriate, quickly, that I then may use one of these other formats to further analyse.

This is key - this doesn't invalidate any of these other visualisations! What I'm arguing for is something that is above all _simple_, but containing the most prevalent data to compare one audio file with another. I'm trying to find another level of visualization - one that's more zoomed out, abstract, large-scale. With relation to the argument of visualisation being a poor simulacra for listening, I actually think this will be a superior solution in many cases. Whereas a spectogram or waveform graph encourages you to have a _direct_ feedback between the height of a peak and it's expected volume, or alerts you to the presence of a certain partial, an abstract, semantic representation instead gives you the information you need to decide if you want to listen to a file, but doesn't tell you anything more than that.

Finally, there's no reason why this can't also be augmented with manual text description - but I stress again, the idea of this system is to be automated, and allow easy comparison of a large amount of audio files. Requiring too much user input will make this far less likely to be adopted.

## The problem of execution!

I'm paradoxically looking for something non-technical, but trying to invent a new visual shorthand at the same time. In a roundabout way, I'm also looking at developing an automated system of metadata generation for audio files for visualisations to draw themselves from. This is looking at quite a big technical stack already! I'm investigating Raphael.js to output drawings, and I think ideally audio metadata would be stored in JSON or some similar lightweight database. The actual audiofile processing is a step I don't have a clue about. However I still think my basic categories are the key data we need to represent in some way. Here's a potential scale, which I'd love to get some more input on:

| Parameter | Visual output |
|---|---|
| Duration | A logarithmic-scale bar at the bottom of the thumbnail. |
| Main frequency | Colour. Red for bass, violet for treble. |
| Timbral content | Shape. Jaggier is more varied, smoother is more sinusoidal. |
| Type | A small glyph - perhaps a treble clef, mouth or tree (guess). |
| Volume | Opacity. Quieter sounds are paler, loud ones more solid. |

There's also potential to overlay more than one shape - perhaps treble, mid and bass can be done on separate, overlaid shapes, with size for volume instead?

## Responsive visualisations

Taking this to it's logical conclusion, sound files should respond to their context. Given 500x500 pixels, they could switch to a spectogram, for instance. Scaled down to 10x10 px, they should probably revert back to a simple measure of type. Mouse-over states could show some kind of animation effect. Contextual selectors could allow foregrounding of different elements. Better metadata could allow for sorts by duration, amount of bass, or richer timbre. The possibilities are varied, and almost entirely unexplored. I'm starting to think about trying to pursue some funding to explore this properly - so any and all potential collaborators please get in touch! I'd like to make the next post some proposed outputs, so any artists, designers or javascript developers would be most welcome.

*Many thanks to Amanda, Angela and Martin for their feedback on my initial post.*
