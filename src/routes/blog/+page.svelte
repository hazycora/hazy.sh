<script>
	export let data

	function toLocaleDateString(date) {
		return new Date(date).toLocaleDateString(undefined, {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		})
	}
</script>

<svelte:head>
	<title>blog - hazy.sh</title>
	<link rel="preconnect" href="https://ws.audioscrobbler.com/" />
	<meta name="description" content="hazel's blog for whatever" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="blog - hazy.sh" />
	<meta property="og:description" content="hazel's blog for whatever" />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content="blog - hazy.sh" />
	<meta property="twitter:description" content="hazel's blog for whatever" />
</svelte:head>

<div class="page">
	<nav>
		<a href="/">hazy.sh</a>
	</nav>
	<h1>blog</h1>
	<hr />
	<ul class="articles">
		{#each data.posts as post}
			<li class="article">
				<a class="article-title" href={post.path}>{post.title}</a>
				<p class="article-date">{toLocaleDateString(post.date)}</p>
			</li>
		{/each}
	</ul>
</div>

<style>
	.articles {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		gap: 1rem;
	}
	.article-title:link {
		color: var(--accent);
	}
	.article-title:visited {
		color: var(--accent-muted);
	}
</style>
