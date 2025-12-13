---
title: 'Sounds and the Web Don''t Work'
description: 'Generally speaking, I think the web handles audio very badly.'
pubDate: 'May 16 2012'
tags: ['audio-visualization', 'ux-design', 'web-audio']
source: 'alliscalm'
sourceUrl: 'https://alliscalm.net/sounds-and-the-web-dont-work/'
---

Generally speaking, I think the web handles audio very badly. By comparison, photos and visual data are handled very well, with automatic thumbnails, lightboxes and the light being _de-rigueur_ on the modern web. Think about the amount of ways sites like Facebook and Flickr help people deal with image data in subtle, nuanced ways. Similarly, video is handled fairly well, with embedded video being a natural fit in the same ways images are. For some reason, YouTube playlists seem an easier way to listen to (say) a band than any website I can think of. Why is this?

## My position

I have a huge amount of audio files to process in a meaningful way - listening to them, not working with measurements based on them. Currently there's no good way to browse this data. I'm either working with generic "audio file" thumbnails, or referring to a spreadsheet, or looking at a spectrogram - things which dedicated websites like Soundcloud currently do, and none of which are ideal! None of these visualisations tell me anything interesting or useful about a sound, in the same way a thumbnail does. None of them are very meaningful even to a sound engineer - spectograms are generally only of use when directly editing audio, not listening back.

## A solution?

In order to work with them effectively, it'd be awesome if I could get some kind of automated thumbnail generation telling me meaningful properties of the sounds, in order to allow quick comparison and evaluation of salient points. Some of these properties could be:

- Duration
- Rough frequency content
- Type (music, audio recording, podcast, etc)
- Volume/dynamic range

They could be represented abstractly with things like:

- Shape
- Colour
- Opacity
- Pattern
- Small icons

As a general move towards sounds being more usable/accessible on the web it'd be nice to do a small project seeing if we can creatively make, say, 100x100 or 200x200px thumbnails of audio files in an automated (or semi automated) way. Think facebook/flickr picture galleries, but with "previews" that tell you plenty about the sound.

What would a red circle sound like? What would be the intuitive visualisation of an air horn? These questions would need to be answered in a small study, I think. If only there were an audio version of Draw Something (a subject for a future post), we'd have a wealth of data here. However I think it would be a fascinating graphic design challenge to see how much data you can cram into a thumbnail. Using my example, would I be able to pick out 10 loud sound recordings, or 5 short ones with lots of high frequency content at a quick glance? How about ones with several desirable variables?

## Help?

I'd like to begin solving this problem which I see as fundamental to getting sounds used on the web and in computing in general. I think the solution would potentially have 3 stages - server side audio analysis, scripting of thumbnail drawing based on identified properties, and some kind of web output. It would be nice to have it as a jQuery/HTML5 library of some description that could then start to form a consolidated visualisation library for the web.
