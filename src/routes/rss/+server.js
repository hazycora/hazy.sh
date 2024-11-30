import { execSync } from 'child_process'
import { getPosts } from '$lib/blog.server.js'

export const prerender = true

const lastUpdateTime = new Date(
	parseInt(execSync('git log -1 --format="%at"')) * 1000
)

export async function GET() {
	const headers = {
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Type': 'application/xml'
	}

	const posts = await getPosts()

	return new Response(xml(posts), { headers })
}

function xml(posts) {
	// TODO: clean HTML of all classnames and other unused attributes

	return `<?xml version="1.0" encoding="utf-8"?>
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
		<generator>https://git.gay/h/hazysh</generator>

		${posts
			.map(
				post => `<entry>
				<title>${post.title}</title>
				<link href="https://hazy.sh${post.path}"/>
				<id>https://hazy.sh${post.path}</id>
				<updated>${new Date(post.date).toISOString()}</updated>
				<published>${new Date(post.date).toISOString()}</published>
				<content type="html"><![CDATA[${post.html}]]></content>
			</entry>`
			)
			.join('\n')}
	</feed>`
}
