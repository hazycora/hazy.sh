---
title: Bypassing YouTube Content-ID with flashing frames
description: Uploading copyrighted content to YouTube at the cost of epileptic seizures
date: 2023-05-03
contentwarning: Flashing lights
---

Anyone who archives media to YouTube knows the struggle that is working around YouTube's Content ID system. It's the system which detects copyrighted material in order to allow media companies to earn advertising revenue from videos which use their content, but it also allows these companies to outright block videos from many parts of the world. Of course, YouTube couldn’t exist without Content ID, but that doesn’t make it any less frustrating.

## What if there was a better way?

YouTube's Content ID is pretty sophisticated. People have tried many, many things to get around it. Various visual effects, like hue-shifting, vignette filters, adding massive coloured borders surrounding the video, and many more have already been tried numerous times. These tricks work _sometimes_, but YouTube's Content ID has only gotten better and better at working around these tricks. Any solution needs to make the copyrighted content completely invisible to Content ID, but this very often also means obscuring it for actual human viewers.

But I've had an idea in the back of my mind since I saw a video that appeared in my recommendations a couple months ago. It's a [Bad Apple video](https://en.wikipedia.org/wiki/Bad_Apple!!#Use_as_a_graphical_and_audio_test) which can only be viewed in HD. How this works is that 60fps YouTube videos don't actually play at 60fps unless you view them at 720p or higher, so you can replace every other frame with an entirely black frame and the video will be invisible if you're not watching with an HD quality setting.

@embed:https://www.youtube.com/watch?v=lwi7ofgZ8ME

What if Content ID doesn't scan the HD 60fps versions of videos? Would it then be completely oblivious to half of the frames of the video?

**This isn't a good idea**. It would make it impossible to watch on low resolutions, harder to compress, makes the video uncomfortable to watch and could even cause watching the video to _**induce seizures**_ in people with photosensitive epilepsy. This is not a good solution to the problem.

_But would it work though?_

## `ffmpeg` is a challenge

I didn't want to extract all the frames and then swap every other one with a black image, I thought that would probably take too long. Instead I looked into `ffmpeg`'s `geq` video filter. It allows you to make an expression which is ran per-pixel based on a few variables. `ffmpeg` also has `if` and `mod` functions, so this seemed like it would be a fairly easy task.

```sh
ffmpeg -i input.mp4 -y -vf "fps=60,geq=if(mod(N\,2)\,p(X\,Y))" -preset ultrafast output.mp4
```

![an ffplay window showing a dark green frame](/assets/bypassing-content-id/green-frame.png)

Okay, so this doesn't work how I thought it would. I assumed the color value `0` would be black, but it's instead some dark muddy green colour? I think this is because `ffmpeg` is using the [YUV color model](https://en.wikipedia.org/wiki/YUV). I'm not exactly sure how I should get it to use the color black for these frames using a YUV color value, but luckily the `geq` filter allows me to set expressions for the r, g, and b values of each pixel instead:

```sh
ffmpeg -i input.mp4 -y -vf "fps=60,geq=r=if(mod(N\,2)\,p(X\,Y)):g=if(mod(N\,2)\,p(X\,Y)):b=if(mod(N\,2)\,p(X\,Y))" -preset ultrafast output.mp4
```

To be clear, this command sucks. It's evaluating the expression on every single pixel in every single frame. I'm positive there are wayyyy better ways to do this, but it was taking me a while to figure this out to begin with so I'm willing to just go with this command for now. If anyone's figured out a better way to do this in `ffmpeg`, please do message me!

I'm getting 0.5x speeds out of this at best on my PC. To be fair, this PC's specs are abysmal, so that wasn't doing it any favours.

## does this actually work

I sent the script off to my friend [Aria](https://tacohitbox.com), who spends An Excessive Amount Of Time archiving media to various places including YouTube.

![tacohitbox: NO FUCKING SHOT, DUDE THE CONSTANT FLICKERING ONE WORKED; hazy: HAHAHAA, send the fucking link; tacohitbox: THIS IS SO FUCKING FUNNY](/assets/bypassing-content-id/it-works.png)

Really?? This is so stupid. This is completely useless. No way this actually works. I'm running the command on a video real quick to try it out for myself.

![Screenshot of YouTube Studio, showing an audio claim for Family Guy - Life of Brian, blocking the video in all territories](/assets/bypassing-content-id/no-family-guy-funnies.png)

Nooooo. I forgot about this. Some shows also do Content ID for the audio of episodes. Even if the video itself is completely undetectable, the video may still get claimed if it contains audio from something. So I'm going to have to do some more alterations to this video to make it get through Content ID.

I think, for this demo, I'll just put some music over the video. Music gets Content ID too, but music labels tend to not block videos which contain music, instead just taking ad revenue. I'm completely willing to give some music label all the ad revenue for this video so long as it's visible.

![Screenshot of the Kdenlive video editor with an audio track filled with Bladee songs](/assets/bypassing-content-id/kdenlive-drained.png)

I'm so sorry, but The Family Guy Funny Moments will have to become drained.

## family guy funny moments (drained edition) (WARNING: FLASHING LIGHTS)

<p>
	<iframe src="https://www.youtube.com/embed/XrvbAuk42LE?start=450" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="width: 100%; aspect-ratio: 16 / 9; border-radius: 0.75rem"></iframe>
</p>

this has got to be the worst thing i've ever made

Drain gang music added to prevent audio claims. [Here's the playlist, lol](https://open.spotify.com/playlist/6vi42OTDujqUXTfyd0DYNZ). Hard-coded subtitles added to make this at least a little bit watchable. All the music I added has gotten detected by Content ID _with zero restrictions_, and the Family Guy episode itself hasn't gotten claimed at all. This video can be watched globally. If I was in the YouTube Partner Program I could even earn advertising revenue from this video.

And, in case anyone asks, yes, even with the drain gang music this video gets claimed if I don't use the strobe effect:

![Screenshot showing 'family guy drainer nostrobe' blocked in YouTube Studio](/assets/bypassing-content-id/blocked-drainer-nostrobe-upload.png)

With the strobe effect, the Family Guy Funny Moments are undetected by Content ID.

![Screenshot showing the strobe effect video hasn't gotten blocked in YouTube Studio](/assets/bypassing-content-id/no-block.png)

## what have we learned

You can get around YouTube Content ID! As long as you're willing to ignore these caveats:

- it's uncomfortable to watch
- causes massive video file size
- requires exporting at 720p or higher at 60fps
- audio can still get claimed so you'll have to distort that, cover it up with something else, or mute it entirely
- _**could cause seizures**_

Please, please don't start actually using this to evade Content ID. This isn't a practical solution. Even if this idea were to inspire a more practical Content-ID-evading solution, always remember YouTube will simply patch it if it ever becomes widespread.
