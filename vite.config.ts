import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import svelteSVG from '@hazycora/vite-plugin-svelte-svg'
import contentVite from './src/lib/server/content/vite-plugin.js'
import { enhancedImages } from '@sveltejs/enhanced-img'

export default defineConfig({
	plugins: [
		contentVite(),
		enhancedImages(),
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
