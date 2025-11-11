---
title: Downloading YouTube subscriptions in CSV format with web scraping
description: Because Google Takeout takes too long
date: 2022-05-23
archive: true
---

Hey! This was posted [on my dev.to profile back in 2022](https://dev.to/hazy/downloading-your-youtube-subscriptions-in-csv-format-because-google-takeout-takes-too-long-5ca1). Apparently it was shared on Reddit, and for archival's sake I'm reposting it here, two years later! The rest of the article is pretty much just as I wrote it in 2022. Excuse poor writing and atrocious code formatting, it's been a bit!

---

I wanted to import my YouTube subscriptions into the [open-source Android YouTube client NewPipe](https://newpipe.net/). The normal way to do that is to export the subscriptions from Google Takeout, a service Google provides to allow you to retrieve data about your account. NewPipe kindly explains the process:

![Screenshot of the NewPipe app's explanation on how to use Google Takeout.](/blog/download-youtube-subscriptions/instructions.webp)

_Excuse the comic sans, it's my favorite font._

NewPipe's instructions are as follows:

> Import YouTube subscriptions from Google takeout:
>
> 1. Go to this URL: https://takeout.google.com/takeout/custom/youtube
> 2. Log in when asked
> 3. Click on "All data included", then on "Deselect all", then select only "subscriptions" and click "OK"
> 4. Click on "Next step" and then on "Create export"
> 5. Click on the "Download" button after it appears
> 6. Click on IMPORT FILE below and select the downloaded .zip file
> 7. [If the .zip import fails] Extract the .csv file (usually under "YouTube and YouTube Music/subscriptions/subscriptions.csv"), click on IMPORT FILE below and select the extracted csv file

What they neglect to mention is that Google Takeout can take many hours to complete.

I tried using Google Takeout, but after an hour of waiting, I decided I'd try something else. I would scrape the list of channels I'm subscribed to, and I'd save that list as a CSV file I can import into NewPipe.

## Finding out how the Google Takeout CSV is formatted

In order to make my own file that NewPipe would accept as though it were a Google Takeout CSV, I had to find out the format Google Takeout uses.

I found [the PR](https://github.com/TeamNewPipe/NewPipeExtractor/pull/709/commits/94a29fd63ff6bb0c1805c44ef5ebf4d915427454) that added the Google Takeout importing support. Inside that commit was a description of the file.

```java
// Expected format of CSV file:
//      Channel Id,Channel Url,Channel Title
//      UC1JTQBa5QxZCpXrFSkMxmPw,http://www.youtube.com/channel/UC1JTQBa5QxZCpXrFSkMxmPw,Raycevick
//      UCFl7yKfcRcFmIUbKeCA-SJQ,http://www.youtube.com/channel/UCFl7yKfcRcFmIUbKeCA-SJQ,Joji
//
// Notes:
//      It's always 3 columns
//      The first line is always a header
//      Header names are different based on the locale
//      Fortunately the data is always the same order no matter what locale
```

This was simple enough. Now I needed to find out how to get a list of the Channel ID and Channel Title of each of the channels I'm subscribed to.

## YouTube scraping

I found a page on YouTube [that lists all the channels you're subscribed to](https://www.youtube.com/feed/channels). I got to looking at how this page worked, and realized that the page stores data inside a variable called ytInitialData. This variable stores the list of the channels you're subscribed to, as well as some other data. YouTube paginates the list, though, so the variable won't always have everything right off the bat. YouTube loads more of the list whenever you scroll to the bottom of the page, though, which means I can just automate the scrolling.

Another bit of data included in the ytInitialData variable is the API token required to load the rest of the list. And when the list is fully loaded, the token is removed from ytInitialData.

This means I can check if that token exists in order to know whether to keep scrolling down.

I wrote a script to scroll to the bottom of the page by checking the height of the container `<div>` and then scrolling with the function `window.scrollTo`.

I then wrote a script to get the Channel IDs and Channel Titles from this list. I would also need the Channel URL, but this was as easy as adding the channel ID after the string `"http://www.youtube.com/channel/"`. It then joined the data of all the channels one by one. Finally, it would log the data to the console.

I combined these scripts and ran them together. It worked.

To make it just a bit more convenient, I made another script which made a `<div>` to put the CSV data in. This `<div>` would use `position: fixed` to cover the screen.

To make it even easier to use, I decided to make a download button to save the text as a file so you wouldn't need to copy-paste it yourself.

## The script

Here's my code:

```js
function getLast() {
	return ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents.slice(
		-1
	)[0]
}
function canContinue() {
	return getLast().continuationItemRenderer != null
}
;(async () => {
	while (canContinue()) {
		let current =
			getLast().continuationItemRenderer.continuationEndpoint
				.continuationCommand.token
		scrollTo(0, document.getElementById('primary').scrollHeight)
		while (
			canContinue() &&
			current ==
				getLast().continuationItemRenderer.continuationEndpoint
					.continuationCommand.token
		) {
			await new Promise(r => setTimeout(r, 100))
		}
	}
	scrollTo(0, 0)
	let floatDiv = document.createElement('div')
	let preText = document.createElement('pre')
	floatDiv.setAttribute(
		'style',
		`position: fixed;
		background: #0f0f0f;
		z-index: 100000;
		inset: 2rem;
		overflow: auto;
		font-size: 2rem;
		white-space: pre;
		color: white;
		padding: 1rem;`
	)
	let csvText =
		'Channel Id,Channel Url,Channel Title\n' +
		ytInitialData.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.sectionListRenderer.contents
			.map(e => {
				if (!e.itemSectionRenderer) return
				return e.itemSectionRenderer.contents[0].shelfRenderer.content
					.expandedShelfContentsRenderer.items
			})
			.flat()
			.map(e => {
				if (e && e.channelRenderer)
					return `${e.channelRenderer.channelId},http://www.youtube.com/channel/${e.channelRenderer.channelId},${e.channelRenderer.title.simpleText}`
				return ''
			})
			.join('\n')
	preText.innerText = csvText
	let downloadLink = document.createElement('a')
	downloadLink.innerText = 'Download CSV'
	downloadLink.setAttribute('target', '_blank')
	downloadLink.setAttribute(
		'style',
		`color: #bf3838;
		font-weight: bold;
		margin-bottom: 1rem;
		display: block;
		padding: 1rem;
		border-radius: 0.5rem;
		border: 2px solid #bf3838;
		width: fit-content;
		text-decoration: none;`
	)
	var t = new Blob([csvText], { type: 'text/plain' })
	downloadLink.href = window.URL.createObjectURL(t)
	floatDiv.appendChild(downloadLink)
	floatDiv.appendChild(preText)
	document.body.appendChild(floatDiv)
})()
```

You can run this in DevTools at [youtube.com/feed/channels](https://www.youtube.com/feed/channels). You can then save the file by clicking "Download CSV".

![A red button reading 'Download CSV', above a list of YouTube Channel IDs and Channel URLs.](/blog/download-youtube-subscriptions/screenshot.jpeg)

## Conclusion

By the time I had finished writing the script, Google Takeout still hadn't sent me a download of my subscriptions list. I eventually received this download hours later, but by that point I had already imported my own list into NewPipe and no longer needed theirs.

My guess is that Google Takeout runs on a queue, sending one person their data and then the next, rather than working on each request immediately.

I hope you find my script useful. If you make any improvements, you can let me know in the comments of my [GitHub gist](https://gist.github.com/hazycora/bc41e673aff4c9c7846d80e145574285) about this script.
