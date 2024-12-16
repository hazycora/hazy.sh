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
		padding: 0.25rem;
		border-radius: 0.25rem;

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

	.title {
		display: block;
		font-weight: 800;
		color: var(--text-clr);
		font-size: 1.625rem;
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
