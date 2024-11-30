import { getPosts } from '$lib/blog.server.js'

export async function load() {
	return {
		posts: await getPosts()
	}
}
