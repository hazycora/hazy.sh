import { posts } from '$lib/server/blog'

export async function load() {
	return {
		posts
	}
}
