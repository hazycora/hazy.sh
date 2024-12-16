import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import svelteSVG from '@hazycora/vite-plugin-svelte-svg'
import contentVite from './src/lib/server/content/vite-plugin.js'

export default defineConfig({
	plugins: [
		contentVite(),
		svelteSVG({
			svgoConfig: {
				plugins: [
					{
						name: 'preset-default',
						params: {
							overrides: {
								removeViewBox: false,
								cleanupIds: false
							}
						}
					}
				]
			},
			requireSuffix: false
		}),
		sveltekit()
	]
})
