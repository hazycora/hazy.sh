---
title: Webfishing's bizarre profanity filter
description: Canadians are being CENSORED by the adorable furry fishing game
date: 2024-11-11
---

**Update:** The developer, lamedev, [knows of this](https://lethallava.land/notes/a0hatpsc0g)! I expect it'll be fixed in the next update. Also, my guess for the source of the list [was correct](https://lethallava.land/notes/a0hayv2l1n).
This post will remain as a curiosity :)

---

My friend [Astra](https://astroorbis.com) was looking around a decompiled version of Webfishing--giving her access to some of
the source code and assets of the game--when she found the profanity list used by the recently-added chat filter. I've uploaded
this file as [a GitHub Gist](https://gist.github.com/hazycora/f7fde1be74022d196945577a1817d153).

The list is _almost_ entirely what you'd expect. Just a bunch of swears and slurs, exactly what I would want to be blocked if I
had a chat filter option turned on. But there are some strange outliers!

<div style="font-size: 1.25rem">

**Before I continue:** The profanity list is very clearly sourced from some online list. I don't think the developer of Webfishing
made this list themselves or thoroughly checked it. These quirks are certainly a mistake. Do not interpret any of this as malice or bias.

</div>

Here are just a handful of words which are censored, and probably shouldn't be. This is almost certainly not everything, this is a pretty big
list to sift through!

- arab
- canadian
- ethiopian
- german
- mexican
- palestinian
- israeli
- jewish
- latin
- queer
- gay
- lesbian
- bi (along with "bi-sexual", but curiously not "bisexual"?)
- my personal favorite, "women's"

![Trying to say 'I am an advocate for women's rights' results in the word 'women's' being censored.](/assets/webfishings-silly-filter/womens-rights.png)

Another interesting quirk is that some words in the list end with a space. This causes them to be completely ignored when filtering words.

![The word bastard shown in the chat.](/assets/webfishings-silly-filter/bastard.png)

## How'd that happen?

So, as I said in the disclaimer, I believe this list was certainly just copy-pasted from somewhere online. But where? I don't
actually know where _exactly_ they found it, but I've got a pretty big lead. Searching Google for profanity lists, I stumbled upon
[`bad-words.txt`](https://www.cs.cmu.edu/~biglou/resources/bad-words.txt), which includes many of these same words. It also includes many more words, though, so Webfishing's developer either tried to
manually sort through the list and didn't catch enough things, or they found a different version of this list.

The feature was added in the very last update, [Patch 1.09](https://store.steampowered.com/news/app/3146520/view/4467101633890746444), and I don't doubt it'll get fixed soon enough :)
