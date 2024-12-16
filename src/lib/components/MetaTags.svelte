<script lang="ts">
	export let value: {
		title: string
		description?: string
		image?: string
		type?: string
		largeImage?: boolean
	}
</script>

<svelte:head>
	<title>{value.title}</title>
	{#if value.type}
		<meta property="og:type" content={value.type} />
	{/if}
	<meta property="og:site_name" content="hazy.sh" />
	<meta property="og:title" content={value.title} />
	<meta name="twitter:title" content={value.title} />
	{#if value.description}
		<meta name="description" content={value.description} />
		<meta property="og:description" content={value.description} />
		<meta name="twitter:description" content={value.description} />
	{/if}
	{#if value.image}
		<meta property="og:image" content={value.image} />
		<meta name="twitter:image" content={value.image} />
	{/if}
	{#if value.largeImage}
		<meta name="twitter:card" content="summary_large_image" />
	{:else}
		<meta name="twitter:card" content="summary" />
	{/if}
</svelte:head>
