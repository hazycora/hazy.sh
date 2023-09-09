import preprocess from 'svelte-preprocess'
import adapter from '@sveltejs/adapter-static'
import { mdsvex } from 'mdsvex'
import slug from 'rehype-slug'
import autolink from 'rehype-autolink-headings'
import embed from '@hongvanpc10/rehype-embed'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		})
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		mdsvex({
			extension: '.md',
			layout: 'src/routes/blog/layout.svelte',
			rehypePlugins: [
				slug,
				[
					autolink,
					{
						properties: {
							className: 'header-link'
						}
					}
				],
				embed
			]
		}),
		preprocess({
			postcss: true
		})
	]
}

export default config
