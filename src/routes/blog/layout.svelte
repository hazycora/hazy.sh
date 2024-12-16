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
	<meta property="og:site_name" content="hazy.sh" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta name="fediverse:creator" content="@h@besties.house" />
	<meta
		name="twitter:card"
		content={image ? 'summary_large_image' : 'summary'}
	/>
	<meta name="twitter:title" content={title} />
	<meta name="twitter:site" content="@hazycora" />
	<meta name="twitter:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
		<meta property="og:image:alt" content={imageAlt} />
		<meta name="twitter:image" content={image} />
		<meta name="twitter:image:alt" content={imageAlt} />
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
		overflow-wrap: break-word;
	}
	.article-top {
		background-color: rgba(162, 152, 198, 0.4);
		border-radius: 0.5rem;
		border-radius: 8px;
		margin-bottom: 1em;
		overflow: hidden;
		position: relative;
		display: grid;
	}
	.article-top img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		grid-area: 1 / -1;
	}
	.article-top-content {
		padding: 0.5rem;
		display: grid;
		gap: 0.5rem;
		grid-area: 1 / -1;
	}
	.article-top:has(img) .article-top-content {
		position: relative;
		isolation: isolate;
		height: fit-content;
		align-self: end;
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
