---
image: /blog/twitter-summary-card-phishing/card-example.png
imageAlt: A Tweet displaying a summary card linking to discord.com
title: Twitter's cards have a bug that makes phishing easy
description: Sites linked to on Twitter can pretend to be any other URL
date: 2023-06-03
---

(I'm not the first to find this problem. It's been known since 2019, I link to other articles and blog posts that came before me at the end.)

When you link to something at the end of a Tweet, the link isn't displayed. Instead, you'll only see a "summary card" Twitter generates when a post is made. The domain name of the URL is displayed in these cards, so at face value they don't make phishing easier.

![A Tweet displaying a summary card linking to discord.com](/blog/twitter-summary-card-phishing/card-example-domain-highlighted.png)

## their implementation is Not Perfect

If a link redirects to another page, Twitter follows that redirect and displays the domain name of the destination instead of the original URL. This is fine, it means the cards will reflect the same page users will see.
But the user isn't sent directly to the destination- When someone clicks one of these cards, they go to the original URL. For typical redirect links, that's okay, because the redirect Twitter experiences will we the same as the user's redirect. But what if a malicious site serves a different redirect to users than to Twitter?

When Twitter fetches the page content in order to generate these cards, they set the HTTP "User-Agent" header to begin with "Twitterbot/", so it can be detected on our website that the request was for Twitter. Setting custom User-Agents for things like this is normal, it means sites can customise the text of embeds for specific sites if necessary or block Twitter from making these requests if desired, but for malicious sites it also allows us to exploit this issue reliably.

Here's an example of an ExpressJS route that detects Twitter and redirects to discord.com, while redirecting to example.com for everyone else:

```js
app.get('/', (req, res, next) => {
	const detectedTwitter = req.headers['user-agent']
		.toLowerCase()
		.startsWith('Twitterbot/')

	if (detectedTwitter) {
		// redirect to the page to be displayed on Twitter
		res.redirect('https://discord.com')
		return
	}

	// handle request for other users
	// malicious sites could serve a phishing site right here
	res.redirect('https://example.com')
})
```

![An animated GIF showing a Tweet that looks to contain a link to Discord, but sends users to example.com instead](/blog/twitter-summary-card-phishing/demo.gif)

## this issue is old

Twitter has had this issue for years, and I'm by no means the first to notice it. It's [been known since 2019](https://shkspr.mobi/blog/2019/03/scammers-abusing-twitter-cards-via-redirects/) at the latest. My friend [Lexi](https://twitter.com/1lexxi) found the same issue a couple years ago, and she told me it reported this to Twitter through HackerOne, but the exploit still hasn't been fixed.

<div class="dm">
<blockquote>

twitters bbp is a joke, fixing things is not their strong suit

</blockquote>
<div>

Lmao

</div>
</div>

BleepingComputer [wrote on this in 2019](https://www.bleepingcomputer.com/news/security/twitter-can-be-tricked-into-showing-misleading-embedded-links/) and contacted Twitter about it, to no response.

> BleepingComputer reached out to Twitter for a statement about this problem and if it would be fixed in the near future but received no reply at the time of publishing.

Hopefully Twitter realises the severity of this problem. Be careful when clicking links- the suggestion to check URLs before clicking is a good one, but it's not infallible!
