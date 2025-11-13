<!-- The <meter> tag does not get printed (at least in Chrome)... -->
<script lang="ts">
	let {
		value,
		min,
		max
	}: {
		value: number
		min: number
		max: number
	} = $props()
</script>

<meter {value} {min} {max}></meter>

<div class="meter">
	<div
		class="progress"
		style:width="{((value - min) / (max - min)) * 100}%"
	></div>
</div>

<style>
	/* sr-only */
	meter {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}

	.meter {
		width: 100%;
		height: 1rem;
		background-color: var(--meter-bar-clr);
		print-color-adjust: exact;
		border: none;
		border-radius: 99999rem;

		& .progress {
			height: 100%;
			border-radius: 99999rem;
			background: var(--meter-progress-clr);
		}
	}
</style>
