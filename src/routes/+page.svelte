<script>
	import { onMount } from 'svelte'

	let lastPlayed

	async function lastfm() {
		const lastfmUser = 'hazycora'
		const apiKey = 'a8bf7f8c494de7b6048f9702a737b8fd'
		const lastfmResponse = await fetch(
			`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${encodeURIComponent(
				lastfmUser
			)}&api_key=${encodeURIComponent(apiKey)}&format=json&limit=1`
		)
		const lastfmRecentTrack = (await lastfmResponse.json()).recenttracks
			?.track[0]
		if (!lastfmRecentTrack) {
			lastPlayed = null
		}
		if (!lastfmRecentTrack['@attr']?.nowplaying) return
		lastPlayed = {
			artist: lastfmRecentTrack.artist['#text'],
			song: lastfmRecentTrack.name
		}
	}

	onMount(() => {
		lastfm()
		let lastfmInterval = setInterval(() => {
			if (document.hidden) return
			lastfm()
		}, 20 * 1000)
		return () => {
			clearInterval(lastfmInterval)
		}
	})
</script>

<svelte:head>
	<title>hazy.sh</title>
	<link rel="preconnect" href="https://ws.audioscrobbler.com/" />
	<meta name="description" content="hazel cora - student web developer" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="hazy.sh" />
	<meta
		property="og:description"
		content="hazel cora - student web developer"
	/>
	<meta property="og:image" content="/avatar.webp" />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content="hazy.sh" />
	<meta
		property="twitter:description"
		content="hazel cora - student web developer"
	/>
	<meta property="twitter:image" content="/avatar.webp" />
</svelte:head>

<div class="page">
	<div class="terminal">
		<div class="neofetch">
			<img
				src="/avatar.webp"
				width="160"
				height="160"
				aria-hidden="true"
				alt=""
				class="pfp"
			/>
			<pre class="neofetch__text">
				<span>hazy</span>.<span>sh</span>
				-------
				<span>GitHub</span>: <a href="https://github.com/hazycora">@hazycora</a>
				<span>Fedi</span>: <a rel="me" href="https://social.besties.house/@h"
					>@h@besties.house</a
				>
				<span>Twitter</span>: <a href="https://twitter.com/hazycora">@hazycora</a>
				<span>Pronouns</span>: she/her
				{#if lastPlayed}
					<span>Listening to</span>: {lastPlayed.song} by {lastPlayed.artist}
				{/if}
	
				<div class="colors" aria-hidden="true">
					<div style="background-color: var(--black)" />
					<div style="background-color: var(--red)" />
					<div style="background-color: var(--green)" />
					<div style="background-color: var(--yellow)" />
					<div style="background-color: var(--blue)" />
					<div style="background-color: var(--magenta)" />
					<div style="background-color: var(--cyan)" />
					<div style="background-color: var(--white)" />
					<div style="background-color: var(--bright-black)" />
					<div style="background-color: var(--bright-red)" />
					<div style="background-color: var(--bright-green)" />
					<div style="background-color: var(--bright-yellow)" />
					<div style="background-color: var(--bright-blue)" />
					<div style="background-color: var(--bright-magenta)" />
					<div style="background-color: var(--bright-cyan)" />
					<div style="background-color: var(--bright-white)" />
				</div>
			</pre>
		</div>
		<div class="shell">
			<span style="color: var(--magenta)">hazy</span>@hazyarch
			<span style="color: var(--magenta)">~</span>&gt; ls
		</div>
		<div class="shell">
			<a href="/blog">blog/</a>
		</div>
		<div class="shell">
			<span style="color: var(--magenta)">hazy</span>@hazyarch
			<span style="color: var(--magenta)">~</span>&gt;
		</div>
	</div>
	<div class="window-container">
		<div class="window">
			<p>
				hi! im <strong>hazel</strong>. i'm a student web developer.
			</p>
			<br />
			<p>
				i've been coding my own websites since 2019. i work primarily in svelte.
				i'm also learning golang to work more with backend systems.
			</p>
			<br />
			<p>
				i'm always looking for projects to work on! if you'd like to work with
				me please <a href="#contact">send me a message</a> :&rpar;
			</p>
		</div>
	</div>
	<div class="window-container hidden-until-target" id="contact">
		<div class="window" style="max-width: 20rem;">
			<ul class="contact-list">
				<li><strong>email:</strong> hazy@besties.house</li>
				<li><strong>discord:</strong> hazy#4297</li>
				<li><strong>matrix:</strong> @h:besties.house</li>
				<li><strong>fedi:</strong> h@besties.house</li>
				<li><strong>xmpp:</strong> h@besties.house</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.terminal {
		font-family: 'Anonymous Pro', monospace;
		line-height: 1;
		margin-bottom: 2rem;
	}
	pre {
		margin: 0;
		white-space: pre-line;
		word-break: break-all;
	}
	.pfp {
		width: 10em;
		max-width: 100%;
		height: unset;
	}
	.neofetch {
		color: var(--white);
		display: grid;
		gap: 1rem;
		grid-template-columns: 10em 1fr;
	}
	.neofetch span {
		color: #ff79c6;
	}
	.neofetch a,
	.shell a {
		color: inherit;
	}
	.colors {
		display: grid;
		width: 100%;
		max-width: 24ch;
		height: 2em;
		grid-template-columns: repeat(8, 1fr);
	}

	.window-container {
		width: 100%;
		overflow: hidden;
		display: block;
	}
	.window {
		float: right;
		margin: 1rem 0;
		width: 100%;
		border: 1px solid var(--accent);
		width: 100%;
		max-width: 24rem;
		padding: 0.5rem;
	}
	@media screen and (max-width: 400px) {
		.neofetch {
			grid-template-columns: none;
			grid-template-rows: min-content 1fr;
		}
		.window {
			max-width: unset !important;
		}
	}
	.window a {
		color: var(--accent);
		text-decoration: none;
	}
	.window a:hover {
		text-decoration: underline;
	}

	.contact-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.contact-list li {
		display: grid;
		grid-template-columns: 4rem 1fr;
		min-width: 0;
		word-break: break-all;
	}

	.hidden-until-target {
		display: none;
	}
	.hidden-until-target:target {
		display: unset;
	}
</style>
