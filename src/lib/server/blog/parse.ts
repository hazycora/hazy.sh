import type { Post, PostSummary } from '.'

export interface Frontmatter {
	[key: string]: string | undefined

	title?: string
	description?: string
	date?: string
	contentWarning?: string
	image?: string
	imageAlt?: string
}

const FRONTMATTER_RE = /^---((?:\n.*)*?)\n---\n/

function parseFrontmatter(markdown: string) {
	const frontmatter: Frontmatter = {}

	const frontmatterText = FRONTMATTER_RE.exec(markdown)?.[1]

	if (!frontmatterText) {
		return frontmatter
	}

	const frontmatterLines = frontmatterText.trim().split('\n')

	for (const line of frontmatterLines) {
		const execResults = /^([a-z]+):(.*?)$/i.exec(line)
		if (!execResults || execResults.length != 3) {
			throw new Error(`Invalid frontmatter`)
		}

		const key = execResults[1].trim()
		const value = execResults[2].trim()

		frontmatter[key] = value
	}

	return frontmatter
}

export function parsePost(
	_markdown: string,
	_slug: string,
	_includeBody?: false
): PostSummary
export function parsePost(
	_markdown: string,
	_slug: string,
	_includeBody: true
): Post
export function parsePost(
	_markdown: string,
	_slug: string,
	_includeBody: boolean
): Post | PostSummary
export function parsePost(
	markdown: string,
	slug: string,
	includeBody: boolean = false
): Post | PostSummary {
	const frontmatter = parseFrontmatter(markdown)

	const summary: PostSummary = {
		frontmatter,
		slug,
		path: `/blog/${slug}`
	}

	if (summary.frontmatter.date) {
		summary.date = new Date(summary.frontmatter.date)
	}

	if (includeBody) {
		const body = markdown.replace(FRONTMATTER_RE, '')
		const post: Post = {
			...summary,
			body
		}
		return post
	}

	return summary as PostSummary
}
