<script>
	import { onMount } from 'svelte'
	import '../app.postcss'

	onMount(() => {
		// The :target selector breaks during hydration
		// so I'm setting it back up again here!
		const hash = window.location.hash
		window.location.hash = ''
		window.location.hash = hash
	})
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="hazy's blog's RSS feed"
		href="/rss/"
	/>
	<link rel="preload" as="image" href="/wallpaper.jpg" />
</svelte:head>

<slot />
