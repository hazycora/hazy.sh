import { getItem, getItems } from '$lib/server/content/index.js'
import { parsePost, type Frontmatter } from './parse.js'

export type PostSummary = {
	frontmatter: Frontmatter
	date?: Date
	slug: string
	path: string
}

export type Post = {
	frontmatter: Frontmatter
	date?: Date
	slug: string
	path: string
	body: string
}

export async function getPost(slug: string): Promise<Post> {
	const postText = await getItem(`${slug}/index.md`)

	return parsePost(await postText.text(), slug, true)
}

export async function getPosts(_includeContent?: false): Promise<PostSummary[]>
export async function getPosts(_includeContent: true): Promise<Post[]>
export async function getPosts(
	includeContent = false
): Promise<(Post | PostSummary)[]> {
	const postTexts = await Promise.all(
		(await getItems('**.md')).map(async file => [file.name, await file.text()])
	)
	const parsedPosts = postTexts.map(([key, content]) =>
		parsePost(
			content,
			key.replace(/^\//, '').replace(/\/index\.md$/, ''),
			includeContent
		)
	)

	parsedPosts.sort((a, b) => {
		const dateA = new Date(a.frontmatter.date ?? 0)
		const dateB = new Date(b.frontmatter.date ?? 0)
		return dateB.getTime() - dateA.getTime()
	})

	return parsedPosts
}
