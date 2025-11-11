<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte'
	import SidebarSocials from './SidebarSocials.svelte'
</script>

<div class="me">
	<div class="graphic">
		<Avatar />
		<p class="status">Hey&lt;3</p>
	</div>
	<SidebarSocials />
</div>

<style lang="postcss">
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
	}
</style>
