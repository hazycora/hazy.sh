import { getPost, getPosts } from '$lib/server/blog'
import { compile } from '$lib/server/compile-md.js'

export async function load({ params }) {
	const { slug } = params

	const post = await getPost(slug)

	const otherPosts = await getPosts()
	const aside = otherPosts.filter(post => post.slug !== slug).slice(0, 4)

	const html = await compile(post.body)

	return { post, html, aside }
}
