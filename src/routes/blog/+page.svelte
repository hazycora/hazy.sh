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
	<div class="top">
		<h1>blog</h1>
	</div>
	<ul class="articles">
		{#each data.posts as post}
			<li>
				<a href={post.path} class="article">
					{#if post.image}
						<img src={post.image} alt={post.imageAlt} />
					{/if}
					<div class="article-content">
						<p class="title" href={post.path}>
							{post.title}
						</p>
						{#if post.contentwarning}
							<span class="content-warning">CW: {post.contentwarning}</span>
						{/if}
						<p class="date">{toLocaleDateString(post.date)}</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.top {
		background-color: rgba(162, 152, 198, 0.4);
		padding: 0.5rem;
		border-radius: 0.5rem;
		display: grid;
		gap: 0.5rem;
		border-radius: 8px;
		margin-bottom: 1em;
	}
	.top * {
		margin: 0;
	}
	.articles {
		margin: 0;
		padding: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
		gap: 1rem;
	}
	.article {
		overflow: hidden;
		display: grid;
		align-items: end;
		position: relative;
		height: 100%;
		color: inherit;
		text-decoration: none;
		padding: 0.5rem;
		border-radius: 0.5rem;
		background-color: rgba(64, 54, 97, 0.4);
		isolation: isolate;
	}
	.article img {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		z-index: -1;
		mask-image: linear-gradient(
			to bottom,
			rgb(0 0 0 / 0.8),
			rgb(0 0 0 / 0.2) 50%
		);
		transition: transform 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
	}
	.article:hover img {
		transform: scale(1.025);
	}
	.article-content {
		display: grid;
		grid-template-rows: 1fr min-content;
		gap: 0.5rem;
	}
	.article .title {
		font-size: 1.5rem;
		font-weight: bold;
	}
	.article .date {
		opacity: 0.5;
	}
</style>
