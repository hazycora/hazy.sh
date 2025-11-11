<script lang="ts">
	import type { PostSummary } from '$lib/server/blog'
	import dayjs, { DATE_FORMAT } from '$lib/dayjs.js'

	const {
		post,
		highlight = false
	}: { post: PostSummary; highlight?: boolean } = $props()

	let date: dayjs.Dayjs | undefined = $state()
	if (post.date) {
		date = dayjs(post.date)
	}
</script>

<a href={post.path} class:highlight>
	{#if post.frontmatter.image}
		<img src={post.frontmatter.image} alt={post.frontmatter.imageAlt} />
	{/if}
	{#if post.frontmatter.archive == true}
		<ul class="tags">
			<span class="archive">archive</span>
		</ul>
	{/if}
	<span class="title">{post.frontmatter.title}</span>
	{#if post.frontmatter.description}
		<p class="description">{post.frontmatter.description}</p>
	{/if}
	{#if date}
		<span class="date">
			{date.format(DATE_FORMAT)} · {date.fromNow()}
		</span>
	{/if}
</a>

<style lang="postcss">
	a {
		display: block;
		padding: 0.5rem 0.5rem;
		border-radius: 0.25rem;
		border: 1px solid var(--border-clr);

		text-decoration: none;
		overflow: hidden;
		position: relative;
		color: var(--text-muted-clr);

		&::before {
			z-index: -1;
			content: '';
			display: block;
			position: absolute;
			inset: 0;

			color: var(--elevated-hover-clr);

			background-image: linear-gradient(to right, currentColor, transparent);
			background-size: 125% 100%;
			opacity: 0;

			transition: opacity 200ms;
		}

		&.highlight {
			&::before {
				color: var(--highlight-hover-clr);
				opacity: 0.6;
			}
		}

		&:hover::before {
			opacity: 1;
		}
	}

	.tags {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.25rem;
		padding: 0;
		margin: 0;
		> * {
			display: inline-block;
			padding: 0.125rem;
			background-color: var(--tag-bg-clr);
			color: var(--tag-clr);
			border-radius: 0.25rem;
			&.archive {
				background-color: var(--archive-bg-clr);
				color: var(--archive-clr);
			}
		}
	}
	.title {
		display: block;
		font-weight: 600;
		color: var(--heading-clr);
		font-size: 1.5rem;
	}
	.date {
		font-size: 0.75rem;
	}
	img {
		user-select: none;
		position: absolute;
		inset-inline-end: 0;
		inset-block: 0;
		object-fit: cover;
		z-index: -1;
		width: 70%;
		height: 100%;
		opacity: 0.5;
		mask-image: linear-gradient(to left, rgba(0 0 0 / 1), rgba(0 0 0 / 0));
	}
	.description {
		margin-block: 0.25rem;
	}
</style>
