import { DOMParser, XMLSerializer } from '@xmldom/xmldom'

function innerHTML(element) {
	const serializer = new XMLSerializer()
	let html = ''
	for (const node of element.childNodes) {
		html += serializer.serializeToString(node)
	}
	return html
}

export async function getPosts() {
	const modules = import.meta.glob('../routes/blog/**/*.md')
	const files = await Promise.all(
		Object.entries(modules).map(async e => {
			const page = await e[1]()
			const path = e[0]
				.replace(/^\.\.\/routes\//, '/')
				.replace(/\/\+page\.md$/, '')

			const html = page.default.render().html

			const doc = new DOMParser().parseFromString(html, 'text/html')
			const articleElement = doc.getElementsByTagName('article')[0]
			const articleTopElement =
				articleElement.getElementsByClassName('article-top')[0]
			articleElement.removeChild(articleTopElement)
			const articleHtml = innerHTML(articleElement)

			return {
				...page.metadata,
				path: path,
				html: articleHtml
			}
		})
	)
	return files.sort((a, b) => {
		return new Date(b.date) - new Date(a.date)
	})
}
