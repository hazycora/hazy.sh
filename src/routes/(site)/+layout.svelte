<script lang="ts">
	import '../../css/app.pcss'
	import '../../css/fonts.pcss'
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title="hazy's blog"
		href="/rss/"
	/>
	<meta name="fediverse:creator" content="@h@besties.house" />
</svelte:head>

<slot />

<img src="/wallpaper.jpg" alt="" aria-hidden="true" class="wallpaper" />

<style lang="postcss">
	.wallpaper {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		height: 100%;
		min-width: 50rem;
		max-width: 80rem;
		object-fit: cover;
		pointer-events: none;
		z-index: -1;
		opacity: 0.125;
		mix-blend-mode: lighten;
		filter: blur(2px);
		mask-image: linear-gradient(to left, black, transparent);
	}
</style>
