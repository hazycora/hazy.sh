<script>
	import { onMount } from 'svelte'
	import SpotifyIcon from '$lib/icons/spotify.svg'
	import CodeIcon from '$lib/icons/vscode.svg'

	let spotifyActivity
	let codeActivity

	onMount(() => {
		let socket = new WebSocket(
			'wss://3000.besties.house/users/728131016392441916'
		)
		let unmounted = false
		socket.addEventListener('message', async event => {
			const data = JSON.parse(event.data)
			spotifyActivity = data.activities?.find(activity => activity.type == 2)
			codeActivity = data.activities?.find(
				activity => activity.application_id == '782685898163617802'
			)
		})
		socket.addEventListener('close', () => {
			spotifyActivity = null
			codeActivity = null
			if (unmounted) return
			socket = new WebSocket(
				'wss://3000.besties.house/users/728131016392441916'
			)
		})
		return () => {
			unmounted = true
			socket.close()
		}
	})
</script>

<svelte:head>
	<title>hazy.sh</title>
	<link rel="preconnect" href="https://ws.audioscrobbler.com/" />
	<meta
		name="description"
		content="i'm hazel - a web developer who's been making sites since 2019."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:title" content="hazycora" />
	<meta
		property="og:description"
		content="i'm hazel - a web developer who's been making sites since 2019."
	/>
	<meta property="og:image" content="/avatar.webp" />
	<meta property="twitter:card" content="summary" />
	<meta property="twitter:title" content="hazy.sh" />
	<meta
		property="twitter:description"
		content="i'm hazel - a web developer who's been making sites since 2019."
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
				<span>git.gay</span>: <a href="https://git.gay/h">@h</a>
				<span>fedi</span>: <a rel="me" href="https://social.besties.house/@h"
					>@h@besties.house</a
				>
				<span>pronouns</span>: she/her{#if spotifyActivity}
					<span
						><SpotifyIcon
							alt="Spotify"
							style="vertical-align: bottom;"
							height="1lh"
						/></span
					> {spotifyActivity.details}{#if spotifyActivity.state}<!--
					--> by {spotifyActivity.state}{/if}{/if}{#if codeActivity}
					<span
						><CodeIcon
							alt="Visual Studio Code"
							style="vertical-align: bottom;"
							height="1lh"
						/></span
					> {codeActivity.details}
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
				</div><!--
			--></pre>
		</div>
		<br />
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
				hi! im <strong>hazel</strong>. i'm a web developer.
			</p>
			<br />
			<p>
				i've been making my own websites since i was 12. i work primarily in
				svelte. i'm also learning golang to work more with backend systems.
			</p>
			<br />
			<p>
				i'm always looking for projects to work on! if you'd like to work with
				me please <a href="#contact">send me a message</a> :&rpar;
			</p>
			<br />
			<p><a href="https://git.gay/h/hazysh">source code</a></p>
		</div>
	</div>
	<div class="window-container hidden-until-target" id="contact">
		<div class="window" style="max-width: 20rem;">
			<ul class="contact-list">
				<li>
					<dl>
						<dt>email</dt>
						<dd>hazy@besties.house</dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt>discord</dt>
						<dd>hazycora</dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt>matrix</dt>
						<dd>@h:besties.house</dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt>fedi</dt>
						<dd>h@besties.house</dd>
					</dl>
				</li>
				<li>
					<dl>
						<dt>xmpp</dt>
						<dd>h@besties.house</dd>
					</dl>
				</li>
			</ul>
		</div>
	</div>
</div>

<style>
	.terminal {
		font-family: 'Anonymous Pro', monospace;
		line-height: 1;
		margin-bottom: 2rem;
		word-break: break-word;
	}
	pre {
		margin: 0;
		white-space: pre-line;
		word-break: break-word;
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
		display: grid;
		grid-template-columns: min-content 1fr;
		row-gap: 0.25rem;
		column-gap: 1ch;
		min-width: 0;
		word-break: break-all;
		& li,
		& dl {
			display: contents;
		}
		& dt {
			font-weight: bold;
			white-space: nowrap;
			&::after {
				content: ':';
			}
		}
		& dd {
			margin: 0;
			white-space: pre-wrap;
		}
	}

	.hidden-until-target {
		display: none;
	}
	.hidden-until-target:target {
		display: unset;
	}
</style>
