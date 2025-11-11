<script lang="ts">
	import type { PostSummary } from '$lib/server/blog'
	import ArticleItemSmall from '$lib/components/Article/ArticleItemSmall.svelte'

	const {
		posts,
		heading,
		link = false
	}: { posts: PostSummary[]; heading: string; link?: boolean } = $props()
</script>

<div class="sidebar-posts">
	{#if link}
		<a href="/blog" class="heading">
			{heading}
		</a>
	{:else}
		<span class="heading">{heading}</span>
	{/if}
	<ul>
		{#each posts as post}
			<li>
				<ArticleItemSmall {post} />
			</li>
		{/each}
	</ul>
</div>

<style lang="postcss">
	.sidebar-posts {
		margin-block: 0.25rem;
	}

	.heading {
		display: block;
		font-size: 0.875rem;
		font-weight: 800;
		color: var(--fg-clr);
		margin-block-end: 0.5rem;
		text-decoration: none;
		width: fit-content;

		&:is(a) {
			color: var(--emphasis-clr);
		}
	}

	ul {
		list-style-type: none;
		padding-inline-start: 0;
		display: grid;
		margin-block: 0.25rem;
		gap: 0.5rem;
	}
</style>
