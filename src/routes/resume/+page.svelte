<script lang="ts">
	import MetaTags from '$lib/components/MetaTags.svelte'
</script>

<svelte:head>
	<title>Hazel Cora - Resume</title>
</svelte:head>

<article>
	<header>
		<h1>Hazel Cora</h1>
		<p>Software Developer - Frontend & Backend <i>(she/her)</i></p>
		<ul class="links">
			<li>
				<a href="mailto:hey@hazy.gay">hey@hazy.gay</a>
			</li>
			<li>
				<a href="https://hazy.sh">https://hazy.sh</a>
			</li>
			<li>
				<a href="https://hazy.sh/resume">Web link</a>
			</li>
		</ul>
	</header>
	<section>
		<p>
			I'm a lifelong software developer passionate in both frontend and backend,
			UI and UX. I maintain cloud services used by thousands of developers
			globally, and have worked collaboratively for years as part of a
			collective with other developers. My main interest is web technologies,
			and most of my work has been with Go, TypeScript, Svelte, and Vue.
		</p>
	</section>
	<hr />
	<section>
		<h2>Experience</h2>
		<p></p>
		<h3>System administrator, fullstack development - Besties</h3>
		<p>
			<i
				>2021 - Present ⸱ <a href="https://besties.house"
					>https://besties.house</a
				></i
			>
		</p>
		<p>
			A developer collective I founded, creating and maintaining cloud services
			for developers. Led development on nearly all projects by the collective
			and am the primary system administrator for our VPSs and dedicated
			servers.
		</p>
		<ul>
			<li>Sole developer of website hosting service <i>pages.gay</i></li>
			<li>
				Created developer tooling for the collective to aid in the creation and
				maintenance of projects, including CI workflows, custom Vite plugins, and TypeScript libraries
			</li>
			<li>
				Maintaining internal services including the organisation's Matrix & XMPP
				servers for internal communication
			</li>
			<li>
				Maintaining Git repository hosting provider <i>git.gay</i>, used by
				thousands of developers, handling upgrades and server migrations
			</li>
			<li>
				Made tooling to debug iOS Safari browser compatibility issues from
				Windows and Linux devices
			</li>
		</ul>
		<h3>Website design & development - Honeybank Studios</h3>
		<p>
			<i
				>2022 - 2023 ⸱ <a href="https://honeybankstudios.com"
					>https://honeybankstudios.com</a
				></i
			>
		</p>
		<p>
			Worked in a team as a frontend developer & designer. Made a new website
			for the company and aided in a proposed redesign of their product
			TweetShift, and created MVP for a new product for the company
		</p>
		<ul>
			<li>
				Learned WebGL, GLSL shader development to create stylish effects for the
				company site
			</li>
			<li>
				Worked alongside a UI designer using Figma to implement a redesigned
				dashboard for TweetShift users
			</li>
			<li>
				R&D, design for planned product Pendant, a music streaming service made
				for small & independent musicians. Designed and developed UI, reached
				out to musicians to understand their needs
			</li>
			<li>
				Used GitHub CI and Cloudflare to test changes and deploy staging
				versions of sites
			</li>
		</ul>
	</section>
	<hr />
	<section>
		<h2>Active Projects</h2>
		<h3><a href="https://git.gay">git.gay</a></h3>
		<p><i>2022 - Present</i></p>
		<ul>
			<li>
				Git repository hosting service, providing spaces for FOSS projects by
				queer developers
			</li>
			<li>
				Running a custom modified version of Forgejo, actively maintained and
				updated to the latest version of the upstream source code
			</li>
			<li>
				Communicating with upstream developers of Forgejo, contributing to the
				project with our own changes
			</li>
		</ul>
		<h3><a href="https://pages.gay">pages.gay</a></h3>
		<p><i>2023 - Present</i></p>
		<ul>
			<li>
				Custom backend, initially written in TypeScript before being ported to
				Go
			</li>
			<li>
				Website hosting companion-service to git.gay, providing developers and
				their projects with website hosting
			</li>
			<li>
				Issuing TLS certificates on-the-fly to provide HTTPS for domains using
				Let's Encrypt's API including for user's own custom domains
			</li>
			<li>
				Programmatically modifying DNS using Cloudflare's API to enable issuing
				of wildcard TLS certificates
			</li>
		</ul>
	</section>
</article>

<style lang="postcss">
	:global(:root) {
		--accent-clr: #4848c1;
		--accent-clr-alt: #4848c1;
		font-family: 'DM Sans', 'Inter', system-ui, sans-serif;
		line-height: 1.4;
	}

	a,
	a:link {
		color: var(--accent-clr);
	}

	article {
		width: 100%;
		max-width: 90rch;
		margin-inline: auto;
		margin-block: 2rem;
	}

	article > header {
		.links {
			padding: 0;
			margin-inline: 0;
			list-style: none;
			display: flex;
			flex-wrap: wrap;

			> * {
				display: inline-block;
			}

			> :not(:first-child)::before {
				content: '⸱';
				margin-inline: 0.25rem;
			}
		}
	}

	ul {
		margin-block: 0.25rem;
		padding-inline-start: 1.5rem;
		> li {
			margin-block: 0.25rem;
		}
	}

	h1,
	h2,
	h3 {
		margin-block: 0.25rem 0.25rem;
	}
	h3 {
		margin-block-start: 0.5rem;
	}

	p {
		margin-block: 0.25rem;
	}

	hr {
		margin-block: 0.5rem;
	}
</style>
