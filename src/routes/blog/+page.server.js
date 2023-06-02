export async function load() {
	const modules = import.meta.glob('./**/*.md')
	const files = await Promise.all(
		Object.entries(modules).map(async e => {
			const page = await e[1]()
			const path = e[0].replace(/^\.\//, '/blog/').replace(/\/\+page\.md$/, '')
			return {
				...page.metadata,
				path: path
			}
		})
	)
	return {
		posts: files.sort((a, b) => {
			return new Date(b.date) - new Date(a.date)
		})
	}
}
