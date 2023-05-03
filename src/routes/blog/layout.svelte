<script>
	import '../../app.postcss'
	export let title
	export let description
	export let image = null
	export let imageAlt = null
	export let date = null
	export let contentwarning = null

	let dateString = null

	if (date) {
		dateString = new Date(date).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	}
</script>

<svelte:head>
	<title>{title} - hazy.sh</title>
	<link rel="preconnect" href="https://ws.audioscrobbler.com/" />
	<meta name="description" content={description} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{title} - hazy.sh" />
	<meta property="og:description" content={description} />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content="{title} - hazy.sh" />
	<meta name="twitter:site" content="@hazycora" />
	<meta property="twitter:description" content={description} />
	{#if image}
		<meta property="og:image" content="/avatar.webp" />
		<meta property="og:image:alt" content={imageAlt} />
		<meta property="twitter:image" content="/avatar.webp" />
		<meta property="twitter:image:alt" content={imageAlt} />
	{/if}
</svelte:head>

<div class="page">
	<nav>
		<a href="/" class="monospace">hazy.sh</a>
		<a href="/blog" class="monospace">other blog posts</a>
	</nav>
	<article>
		<h1>{title}</h1>
		{#if date}
			<time itemprop="datePublished" datetime={date}>{dateString}</time>
		{/if}
		{#if contentwarning}
			<p class="content-warning">CW: {contentwarning}</p>
		{/if}
		<hr />
		<slot />
	</article>
</div>

<style>
	.content-warning {
		color: var(--red);
	}
</style>
