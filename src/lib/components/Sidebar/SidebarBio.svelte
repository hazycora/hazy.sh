<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte'
	import SidebarSocials from '$lib/components/Sidebar/SidebarSocials.svelte'
</script>

<div class="me">
	<Avatar />

	<p class="bio">
		Hey, I'm Hazel&lt;3 I'm a dev and sysadmin making things with Go,
		TypeScript, and Svelte. Most people know me for hosting <a
			href="https://git.gay">git.gay</a
		>.
	</p>

	<SidebarSocials />
</div>

<style lang="postcss">
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
</style>
