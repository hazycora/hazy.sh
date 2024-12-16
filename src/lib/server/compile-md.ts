import { compile as mdsvexCompile } from 'mdsvex'
import highlight from './shiki.js'

const mdsvexOptions = {
	highlight: {
		highlighter: highlight
	}
}

export async function compile(markdown: string) {
	const mdsvexResult = await mdsvexCompile(markdown, mdsvexOptions)
	if (!mdsvexResult) throw new Error('mdsvex compile failed')

	return mdsvexResult.code
		.replace(/>{@html `<code class="language-/g, '><code class="language-')
		.replace(/<\/code>`}<\/pre>/g, '</code></pre>')
}
