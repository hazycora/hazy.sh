import { execSync } from 'child_process'
import { getPosts, type Post } from '$lib/server/blog'
import { compile } from '$lib/server/compile-md'
export const prerender = true

const lastUpdateTime = new Date(
	parseInt(execSync('git log -1 --format="%at"').toString('utf-8')) * 1000
)

export async function GET() {
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml'
	}

	const posts = await getPosts(true)

	const xml = await generateXML(posts)

	return new Response(xml, { headers })
}

async function generateXML(posts: Post[]) {
	let body = `<?xml version="1.0" encoding="utf-8"?>
	<feed xmlns="http://www.w3.org/2005/Atom">
		<title>hazy's blog</title>
		<link href="https://hazy.sh/rss" rel="self"/>
		<link href="https://hazy.sh/blog"/>
		<id>https://hazy.sh/rss</id>
		<updated>${lastUpdateTime.toISOString()}</updated>
		<author>
			<name>Hazel Cora</name>
		</author>
		<subtitle>hazel's blog for whatever</subtitle>
		<generator>https://git.gay/h/hazysh</generator>`

	for (const post of posts) {
		const html = await compile(post.body)

		body += `<entry>
			<title>${post.frontmatter.title}</title>
			<link href="https://hazy.sh${post.path}"/>
			<id>https://hazy.sh${post.path}</id>
			<updated>${new Date(post.frontmatter.date ?? 0).toISOString()}</updated>
			<published>${new Date(post.frontmatter.date ?? 0).toISOString()}</published>
			<content type="html"><![CDATA[${html}]]></content>
		</entry>`
	}
	body += `</feed>`

	return body
}
