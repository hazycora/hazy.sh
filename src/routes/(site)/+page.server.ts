import { getPosts } from '$lib/server/blog'

export async function load() {
	const posts = await getPosts()
	return {
		posts: posts.filter(e => !e.frontmatter.archive)
	}
}
