<script lang="ts">
	import icons from '$lib/icons.js'

	const {
		social
	}: {
		social: {
			relMe?: boolean
			name: string
			url: string
			handle: string
		}
	} = $props()
</script>

<a
	href={social.url}
	title={social.handle}
	rel={social.relMe ? 'me' : undefined}
>
	<span class="sr-only">{social.name}</span>
	{#if icons.has(social.name)}
		{@const Icon = icons.get(social.name)}
		<Icon aria-hidden="true" />
	{/if}
</a>

<style lang="postcss">
	a {
		width: min-content;
		display: grid;
		place-items: center;
		color: inherit;
		padding: 0.25rem;
		text-decoration: none;
		font-weight: 500;
	}
	a > :global(svg) {
		width: 1.5rem;
		fill: var(--icon-clr);
		transition: fill 200ms;
	}

	a:hover > :global(svg) {
		fill: var(--icon-hover-clr);
	}
</style>
