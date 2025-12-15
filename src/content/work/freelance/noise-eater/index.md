---
title: "Noise Eater"
description: "NoiseEater is a webapp that automatically identifies wind, distortion, and microphone handling noise in your audio file."
year: 2015
tags: ["web", "audio", "research", "ruby"]
source: "freelance"
sourceUrl: "https://alliscalm.net/noise-eater/"
heroImage: "./images/Screenshot-from-2016-06-30-15-55-46.png"
role: "Developer"
client: "Salford University"
---

NoiseEater is a webapp that automatically identifies wind, distortion, and microphone handling noise in your audio file. This was a commission from Salford University in order to show off cutting edge noise detection algorithms developed in the Acoustics Research Centre.

![Noise Eater application screenshot](./images/Screenshot-from-2016-06-30-15-55-46.png)

This was a significant technical challenge, as the algorithms are written in C++. To do this, I developed a wrapper for it in Sinatra, a lightweight Ruby framework. There are essentially two apps: one that handles the upload and displays reports of your audio file (in other words, the website), and one that runs the algorithms themselves and emails the user when it's complete. The algorithm runs slowly, taking about a minute to process a minute of audio, so it was important to make this clear to the user too.

There's a lot of server-side processing going on here: from checking that they're valid audio files in the first place, to checking the type, monitoring for errors, providing an edited file, and emailing the user when the process is complete. The reports use the BBC's amazing Peaks.js library. If you upload your own file you're able to download it on the right.

![Noise Eater report display](./images/Screenshot-from-2016-06-30-15-57-38.png)

This was an enormously fun project to work on, and I think the final result works a treat. Give it a go!

## Project Details

- **Technology:** Sinatra, Ruby, ffmpeg, Peaks.js
- **Team:** Kim Foale (development), Mark Dormand (design)
- **Timeline:** Spring 2015
- **Website:** noiseeater.net
- **Source Code:** Available on GitHub
