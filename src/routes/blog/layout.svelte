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
	<meta
		property="twitter:card"
		content={image ? 'summary_large_image' : 'summary'}
	/>
	<meta property="twitter:title" content="{title} - hazy.sh" />
	<meta name="twitter:site" content="@hazycora" />
	<meta property="twitter:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="og:image:alt" content={imageAlt} />
		<meta property="twitter:image" content={image} />
		<meta property="twitter:image:alt" content={imageAlt} />
	{/if}
</svelte:head>

<div class="page">
	<nav>
		<a href="/">hazy.sh</a>
		<a href="/blog">other blog posts</a>
	</nav>
	<article>
		<div class="article-top">
			{#if image}
				<img src={image} alt={imageAlt} />
			{/if}
			<div class="article-top-content">
				<h1>{title}</h1>
				{#if contentwarning}
					<p class="content-warning">CW: {contentwarning}</p>
				{/if}
				{#if date}
					<time itemprop="datePublished" datetime={date}>{dateString}</time>
				{/if}
			</div>
		</div>
		<slot />
	</article>
</div>

<style>
	article {
		margin-bottom: min(25vh, 20rem);
	}
	.article-top {
		background-color: rgba(162, 152, 198, 0.4);
		border-radius: 0.5rem;
		border-radius: 8px;
		margin-bottom: 1em;
		overflow: hidden;
		position: relative;
	}
	.article-top img {
		display: block;
		width: 100%;
	}
	.article-top-content {
		padding: 0.5rem;
		display: grid;
		gap: 0.5rem;
	}
	.article-top:has(img) .article-top-content {
		position: absolute;
		bottom: 0;
		isolation: isolate;
	}
	.article-top:has(img) .article-top-content::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		height: calc(100% + 2rem);
		background-image: linear-gradient(
			to top,
			rgb(0 0 0 / 0.8) 50%,
			transparent
		);
		z-index: -1;
	}
	.article-top * {
		margin: 0;
	}
	.article-top time {
		opacity: 0.5;
	}
	.content-warning {
		width: fit-content;
		/* border: 1px solid currentColor;
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem; */
	}
</style>
