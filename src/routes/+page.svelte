<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte'
	import MetaTags from '$lib/components/MetaTags.svelte'
	import SidebarPosts from '$lib/components/SidebarPosts.svelte'
	import Social from '$lib/components/Social.svelte'

	const { data } = $props()

	const socials: {
		name: string
		url: string
		handle: string
		relMe?: boolean
	}[] = [
		{
			name: 'mastodon',
			url: 'https://social.besties.house/@h',
			handle: '@h@besties.house',
			relMe: true
		},
		{
			name: 'git',
			url: 'https://git.gay/h',
			handle: 'git.gay/h'
		},
		{
			name: 'github',
			url: 'https://github.com/hazycora',
			handle: '@hazycora'
		},
		{
			name: 'discord',
			url: 'https://discord.com/users/728131016392441916',
			handle: '@hazycora'
		},
		{
			name: 'liberapay',
			url: 'https://liberapay.com/hazy',
			handle: '@hazy'
		},
		{
			name: 'kofi',
			url: 'https://ko-fi.com/hazy',
			handle: '@hazy'
		}
	]
</script>

<MetaTags
	value={{
		title: 'hazel cora',
		description: 'Hi<3',
		image: '/avatar.webp'
	}}
/>

<svelte:head>
	<link rel="preconnect" href="https://ws.audioscrobbler.com/" />
	<link rel="pgpkey" href="/public.key" />
</svelte:head>

<main>
	<div>
		<article>
			<h1>hazel cora <span class="pronouns">(she/her)</span></h1>
			<p>Hi, I'm Hazel&lt;3</p>
			<p>
				I'm a developer with experience in Go, TypeScript, and Svelte. I'm part
				of the coder collective <a href="https://besties.house">besties</a>
				and manage its servers and maintain its projects. As part of besties, I run
				our git forge
				<a href="https://git.gay">git.gay</a>
				and our website hosting service
				<a href="https://pages.gay">pages.gay</a>.
			</p>
			<p>I also do freelance web development, you should reach out!</p>
		</article>

		<h2>Projects</h2>
		<ul class="projects">
			<li>
				<a href="https://pages.gay">
					<img src="/assets/gitgay.svg" aria-hidden="true" alt="" />
					<span class="title">pages.gay</span>
					<p>a free website hosting service</p>
					<span class="time-span">2023 -</span>
				</a>
			</li>
			<li>
				<a href="https://git.gay">
					<img src="/assets/gitgay.svg" aria-hidden="true" alt="" />
					<span class="title">git.gay</span>
					<p>a git forge for queer developers</p>
					<span class="time-span">2022 -</span>
				</a>
			</li>
			<li>
				<a href="https://besties.house">
					<img src="/assets/besties.svg" aria-hidden="true" alt="" />
					<span class="title">besties</span>
					<p>silly group chat and coder collective</p>
					<span class="time-span">2020 -</span>
				</a>
			</li>
		</ul>
	</div>
	<aside>
		<div class="me">
			<div class="graphic">
				<Avatar />
				<p class="status">Hey&lt;3</p>
			</div>
			<ul class="socials">
				{#each socials as social}
					<li>
						<Social {social} />
					</li>
				{/each}
			</ul>
		</div>

		<hr />

		<SidebarPosts link heading="Blog" posts={data.posts} />
	</aside>
</main>

<style lang="postcss">
	main {
		margin-block: 2rem;
		margin-inline: auto;
		max-width: var(--page-max-width);
		padding: var(--page-padding);

		display: grid;

		@media (min-width: 58rem) {
			grid-template-columns: 1fr 18rem;
		}

		gap: 4rem;
	}
	article {
		font-size: 1.125rem;
		line-height: 1.6;

		h1 {
			color: var(--accent-clr);
			font-size: 3rem;
			margin-block: 0 0.5rem;
			.pronouns {
				font-size: 1.25rem;
				font-weight: 400;
				color: var(--text-muted-clr);
				vertical-align: middle;
			}
		}

		a:not(:hover) {
			text-decoration-color: var(--link-clr);
		}
	}

	.projects {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 0.75rem;

		li > a {
			display: block;
			position: relative;
			background-color: var(--elevated-clr);
			border: 1px solid var(--border-clr);
			border-radius: 0.25rem;
			padding: 0.25rem;
			overflow: hidden;
			text-decoration: none;

			.title {
				font-weight: 800;
				color: var(--text-clr);
				text-decoration: none;
			}

			p {
				margin-block: 0;
				color: var(--text-muted-clr);
			}

			.time-span {
				font-size: 0.75rem;
				color: var(--text-muted-clr);
			}

			img {
				user-select: none;
				position: absolute;
				z-index: -1;
				opacity: 0.5;
				filter: blur(1px);
				top: -1rem;
				right: -0.25rem;
				width: 6rem;
			}
		}
	}

	.me {
		.graphic {
			width: min-content;
			margin-inline: auto;
		}
		:global(.avatar) {
			width: 5rem;
			height: 5rem;
			border-radius: 25%;
			user-select: none;
			border-end-end-radius: 0;
		}
		.status {
			background-color: var(--bubble-clr);
			margin-block: 0rem 1rem;
			margin-inline-start: 5rem;
			padding: 0.5rem 0.75rem;
			border-radius: 1rem;
			font-size: 1.25rem;
			font-weight: 600;
			user-select: none;
			width: fit-content;
			position: relative;
			isolation: isolate;

			border-start-start-radius: 0;
		}
		:global(.avatar),
		.status {
			filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))
				drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
		}
		.socials {
			list-style: none;
			padding: 0;
			margin: 0;
			display: flex;
			flex-wrap: wrap;
			gap: 0.5rem;
			justify-content: center;
		}
	}
</style>
