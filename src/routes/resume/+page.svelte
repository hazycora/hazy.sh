<script lang="ts">
	import Meter from './Meter.svelte'

	const skills = [
		{ name: 'VCS/Git', value: 98 },
		{ name: 'Svelte', value: 98 },
		{ name: 'TypeScript', value: 96 },
		{ name: 'HTML+CSS', value: 96 },
		{ name: 'Docker', value: 94 },
		{ name: 'Go', value: 92 },
		{ name: 'SQL & Redis', value: 90 },
		{ name: 'Linux', value: 90 },
		{ name: 'Figma', value: 85 },
		{ name: 'Vue', value: 78 },
		{ name: 'WebGL', value: 74 },
		{ name: 'React', value: 70 },
		{ name: 'Ruby on Rails', value: 60 }
	]
</script>

<svelte:head>
	<title>Hazel Cora - Resume</title>
</svelte:head>

<article>
	<header>
		<h1>Hazel Cora</h1>
		<p>Software Developer, Frontend & Backend ⸱ Chicago, IL <i>(she/her)</i></p>
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
		<section>
			<p>
				I'm a lifelong software developer primarily interested in web
				technologies. I maintain cloud services used by thousands of developers
				globally, and have worked collaboratively for years as part of a
				collective with other developers.
			</p>
		</section>
	</header>
	<section>
		<h2>Experience</h2>
		<p></p>
		<h3>System administrator, fullstack development - Besties</h3>
		<small>
			2021 - Present ⸱ <a href="https://besties.house">https://besties.house</a>
		</small>
		<p>
			A developer collective I founded, creating and maintaining cloud services
			for developers. Led development on nearly all projects by the collective
			and am the primary system administrator for our VPSs and dedicated
			servers.
		</p>
		<ul>
			<li>
				Maintaining Git repository hosting provider git.gay, used by thousands
				of developers, handling upgrades and server migrations
			</li>
			<li>
				Built and maintain pages.gay, git.gay's companion website hosting
				service
			</li>
			<li>
				Created internal developer tooling (CI workflows, custom Vite plugins,
				TypeScript libraries)
			</li>
			<li>Operate internal Matrix & XMPP servers for teams</li>
			<li>
				Created tooling to debug iOS Safari browser compatibility issues from
				non-macOS systems
			</li>
		</ul>
		<h3>Website design & development - Honeybank Studios</h3>
		<small>
			2022 - 2023 ⸱ <a href="https://honeybankstudios.com"
				>https://honeybankstudios.com</a
			>
		</small>
		<ul>
			<li>
				Designed and developed reworked company site, using WebGL with a GLSL
				shader for visual effects
			</li>
			<li>
				Collaborated with a UI designer using Figma to implement a redesigned
				dashboard for TweetShift users
			</li>
			<li>
				Led design and prototyping for Pendant, a music streaming MVP, with
				feedback from musicians
			</li>
			<li>
				Used GitHub CI and Cloudflare to test changes and deploy staging
				versions of sites
			</li>
		</ul>
	</section>
	<section>
		<h2>Skills</h2>
		<ul class="skill-list">
			{#each skills as skill}
				<li>
					<label>
						{skill.name}
						<Meter value={skill.value} min={0} max={100} />
					</label>
				</li>
			{/each}
		</ul>
	</section>
	<section>
		<h2>Active Projects</h2>
		<h3>git.gay</h3>
		<small>2022 - Present</small>
		<p>Queer-friendly Git hosting platform based on a custom Forgejo fork</p>
		<ul>
			<li>Maintaining upstream sync of forked codebase</li>
			<li>Communication with upstream developers, contributing patches</li>
		</ul>
		<h3>pages.gay</h3>
		<small>2023 - Present</small>
		<p>Web hosting platform counterpart to git.gay</p>
		<ul>
			<li>Backend initially written in TypeScript before being ported to Go</li>
			<li>
				Automates TLS certificate issuance for custom domains with Let's Encrypt
				APIs
			</li>
			<li>
				Programmatically modifying DNS with Cloudflare API to issue wildcard TLS
				certificates
			</li>
		</ul>
	</section>
</article>

<style lang="postcss">
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(:root) {
		--page-bg-clr: #0a0a1a;
		--bg-clr: #fff;
		--heading-clr: #111118;
		--text-clr: #2e2e3b;
		--elevated-clr: #c4c4ee;
		--border-clr: #9292be;
		--accent-clr: #4848c1;
		--accent-alt-clr: #4848c1;

		--meter-bar-clr: var(--elevated-clr);
		--meter-progress-clr: var(--accent-clr);
		font-family: 'DM Sans', 'Inter', system-ui, sans-serif;
		line-height: 1.4;
		color: var(--text-clr);
	}

	a,
	a:link {
		color: var(--accent-clr);
	}

	article {
		width: 100%;
		max-width: 85rch;
		margin-inline: auto;
		margin-block: 2rem;

		display: grid;
		grid-auto-flow: row;
		gap: 0.5rem;

		@media (min-width: 700px) {
			grid-template-columns: 1fr 2fr;
		}

		> :where(header, section) {
			border: 1px solid var(--border-clr);
			padding: 0.75rem;
			border-radius: 0.5rem;

			> :first-child {
				margin-block-start: 0;
			}

			> :last-child {
				margin-block-end: 0;
			}
		}
	}

	article > header {
		grid-column: 1 / -1;

		p {
			margin-block-end: 0rem;
		}

		.links {
			padding: 0;
			margin-block: 0rem;
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

	article > section:first-of-type {
		grid-column: 1 / -1;
	}

	ul {
		break-inside: avoid;
		margin-block: 0.5rem;
		padding-inline-start: 1.5rem;
		> li {
			margin-block: 0.25rem;
		}
	}

	h1,
	h2,
	h3 {
		color: var(--heading-clr);
		break-after: avoid;
		margin-block: 0.25rem 0.25rem;
		& :global(~ small) {
			font-style: italic;
		}
	}

	h3 {
		margin-block-start: 0.5rem;
	}

	p {
		margin-block: 0.25rem;
	}

	ul.skill-list {
		list-style: none;
		padding: 0;
		@media (min-width: 700px) {
			width: max-content;
		}

		li {
			margin-block: 0.5rem;
		}

		label {
			display: grid;
			grid-template-columns: 1fr 1fr;
			@media (min-width: 700px) {
				grid-template-columns: 1fr 10rem;
			}
			gap: 1.5rem;
			align-items: center;
			font-size: 1rem;
			font-weight: 500;
		}
	}
</style>
