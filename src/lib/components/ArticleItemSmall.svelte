<script lang="ts">
	import type { PostSummary } from '$lib/server/blog'
	import dayjs, { DATE_FORMAT } from '$lib/dayjs.js'

	const { post }: { post: PostSummary } = $props()

	let date: dayjs.Dayjs | undefined = $state()
	if (post.date) {
		date = dayjs(post.date)
	}
</script>

<a href={post.path}>
	{#if post.frontmatter.image}
		<img src={post.frontmatter.image} alt={post.frontmatter.imageAlt} />
	{/if}
	<span class="title">{post.frontmatter.title}</span>
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
		background-color: var(--elevated-clr);
		border: 1px solid var(--border-clr);
		border-radius: 0.25rem;

		text-decoration: none;
		overflow: hidden;
		isolation: isolate;
		position: relative;
		color: var(--text-muted-clr);
		transition: background-color 100ms;

		&:hover {
			background-color: var(--elevated-hover-clr);
		}
	}

	.title {
		display: block;
		font-weight: 800;
		color: var(--text-clr);
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
		mask-image: linear-gradient(to left, rgba(0 0 0 / 1), rgba(0 0 0 / 0));
	}
</style>
