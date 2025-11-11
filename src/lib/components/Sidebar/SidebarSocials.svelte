<script lang="ts">
	import Social from '$lib/components/Social.svelte'

	type Social = {
		name: string
		url: string
		handle: string
		relMe?: boolean
	}

	const socials: Social[] = [
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

<ul class="socials">
	{#each socials as social}
		<li>
			<Social {social} />
		</li>
	{/each}
</ul>

<style lang="postcss">
	.socials {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}
</style>
