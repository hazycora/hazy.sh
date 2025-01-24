<script lang="ts">
	import MetaTags from '$lib/components/MetaTags.svelte'
	import Postscript from '$lib/components/Postscript.svelte'
	import Avatar from '$lib/components/Avatar.svelte'
	import dayjs from 'dayjs'
	import { DATE_FORMAT } from '$lib/dayjs.js'
	import SidebarPosts from '$lib/components/SidebarPosts.svelte'

	const { data } = $props()
</script>

<MetaTags
	value={{
		title: data.post.frontmatter.title ?? 'untitled',
		description: data.post.frontmatter.description,
		image: data.post.frontmatter?.image,
		largeImage: data.post.frontmatter?.image ? true : undefined
	}}
/>

<article>
	<div class="frontmatter">
		<nav>
			<a href="/">hazel cora</a> · <a href="/blog">blog</a>
		</nav>
		<h1 class="title">{data.post.frontmatter.title}</h1>
		<p class="description">{data.post.frontmatter.description}</p>
		<span class="date">{dayjs(data.post.date).format(DATE_FORMAT)}</span>
	</div>

	<div class="things">
		<div class="body">
			<div class="md">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html data.html}
			</div>

			<hr />

			<Postscript />
		</div>

		<aside>
			<div class="this-article">
				<nav>
					<a href="/">hazel cora</a> · <a href="/blog">blog</a>
				</nav>
				<p class="title">{data.post.frontmatter.title}</p>
				{#if data.post.frontmatter.description}
					<p class="description">{data.post.frontmatter.description}</p>
				{/if}
			</div>

			<div class="other-things">
				<div class="me">
					<Avatar />

					<p class="bio">
						Hey, I'm Hazel&lt;3 I'm a dev and sysadmin making things with Go,
						TypeScript, and Svelte. Most people know me for hosting <a
							href="https://git.gay">git.gay</a
						>.
					</p>
				</div>

				<SidebarPosts heading="Other posts" posts={data.aside} />
			</div>
		</aside>
	</div>
</article>

<style lang="postcss">
	article {
		margin-inline: auto;
		max-width: var(--page-max-width);
		timeline-scope: --frontmatter;
		padding-inline: var(--page-padding-inline);
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

	.frontmatter {
		margin-block: 4rem 8rem;
		font-size: 1.25rem;
		view-timeline: --frontmatter;

		h1 {
			color: var(--heading-clr);
			font-size: 3rem;
			font-weight: 700;
			margin-block: 0;
		}

		.description {
			color: var(--text-muted-clr);
			font-size: 1.5rem;
			font-weight: 500;
			margin-block: 0.25rem 1rem;
		}

		.date {
			color: var(--text-muted-clr);
		}
	}

	@keyframes fadein {
		10% {
			transform: translateY(-1rem);
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slidein {
		from {
			opacity: 0;
			transform: translateX(-100%) skewX(-45deg);
		}
		to {
			opacity: 1;
		}
	}

	aside {
		color: var(--text-muted-clr);
		padding-block: 0 4rem;

		@media (min-width: 58rem) {
			position: sticky;
			top: 0;
			height: 100vh;
			height: 100svh;
			overflow-y: auto;
			padding-block: 0.5rem;
			border-block-start: none;
		}

		.this-article {
			opacity: 0;
			animation: slidein linear both;
			animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
			animation-timeline: --frontmatter;
			animation-range: exit 0% exit 160%;

			border-block-end: 1px solid var(--border-clr);
			margin-block-end: 1rem;

			.title {
				font-size: 1.5rem;
				font-weight: 800;
				margin-block: 0.5rem;
				color: var(--fg-clr);
			}

			.description {
				margin-block: 0.5rem;
			}
		}

		@media not (min-width: 58rem) {
			.this-article {
				display: none;
			}
		}

		.me {
			:global(.avatar) {
				float: right;
				width: 2.75rem;
				height: 2.75rem;
				border-radius: 25%;
				margin-inline-start: 0.25rem;
				margin-block-end: 0.25rem;
			}
		}

		> :not(.this-article) {
			transform-origin: top center;
			opacity: 0;
			animation: fadein ease-out both;
			animation-timeline: --frontmatter;
			animation-range: exit 150% exit 300%;
		}
	}

	.things {
		display: grid;
		@media (min-width: 58rem) {
			grid-template-columns: 1fr 18rem;
			gap: 4rem;
		}
	}

	.body {
		@media (min-width: 58rem) {
			margin-block-end: 24rem;
		}
		font-size: 1.125rem;
		line-height: 1.6;
		overflow: hidden;

		.md {
			:global(pre) {
				white-space: pre-wrap;
				word-break: break-all;
			}
			:global(a:not(:hover)) {
				text-decoration-color: var(--link-clr);
			}
			:global(> p) {
				margin-block: 2rem;
			}
			:global(> :first-child) {
				margin-block-start: 0;
			}
			:global(> p:has(> img:only-child)) {
			}
			:global(> p > img:only-child) {
				display: block;
				margin-inline: auto;
				border-radius: 0.25rem;
			}
			:global(> p > img:only-child) {
				max-height: 80vh;
			}
		}
	}
</style>
