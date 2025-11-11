<script lang="ts">
	import ArticleItem from '$lib/components/Article/ArticleItem.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import Postscript from '$lib/components/Postscript.svelte'

	export let data
</script>

<MetaTags
	value={{
		title: "hazel's blog",
		description: "hazel's blog for whatever",
		image: '/avatar.webp'
	}}
/>

<main>
	<nav>
		<a href="/">Hazel Cora</a> · <a href="/blog">blog</a>
	</nav>

	<p>Sometimes I write things.</p>
	<p>Once in a blue moon. No schedule. I'm busy!</p>

	<ul>
		{#each data.posts as post, i}
			<li>
				<ArticleItem {post} highlight={i === 0} />
			</li>
		{/each}
	</ul>

	<hr />

	<Postscript />
</main>

<style lang="postcss">
	main {
		max-width: var(--page-max-width);
		margin-block: 2rem;
		margin-inline: auto;
		padding: var(--page-padding);
	}
	nav {
		color: var(--emphasis-clr);
		font-weight: 600;

		a {
			color: var(--accent-clr);
			text-decoration: none;

			padding-inline: 0.25rem;
			margin-inline: -0.25rem;
			border-radius: 0.5rem;
			&:hover {
				background-color: var(--elevated-hover-clr);
			}
		}
	}
	p {
		margin-block: 1rem;
		color: var(--text-muted-clr);
		&:first-of-type {
			font-size: 1.25rem;
			font-weight: 500;
			color: inherit;
		}
	}
	ul {
		list-style: none;
		padding: 0;
		margin: 2rem 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 0.75rem;
	}
	li {
		height: 100%;
		:global(> *) {
			height: 100%;
		}
	}
</style>
