import fs from 'node:fs'
import micromatch from 'micromatch'
import path from 'node:path'

const contentRoot = path.resolve('./content')

export const contentKeyPathMap = new Map(
	fs
		.readdirSync(contentRoot, {
			withFileTypes: true,
			recursive: true
		})
		.map(dirent => {
			if (dirent.isDirectory()) return
			const fileUrl = new URL(
				`./${dirent.name}`,
				`file://${dirent.parentPath}/`
			)
			const path = fileUrl.pathname
			const key = fileUrl.pathname.replace(contentRoot, '').replace(/^\//, '')
			return [key, path]
		})
		.filter(dirent => dirent !== undefined) as [string, string][]
)
const contentKeys = [...contentKeyPathMap.keys()]

export async function getItem(key: string) {
	const path = contentKeyPathMap.get(key)
	if (!path) {
		throw new Error(`No such item by key: ${key}`)
	}
	const file = await fs.promises.readFile(path)
	return new File([file], key)
}

export function getItems(glob: string) {
	const itemKeys = micromatch(contentKeys, glob)
	return Promise.all(itemKeys.map(key => getItem(key)))
}

export function getItemSync(key: string) {
	const path = contentKeyPathMap.get(key)
	if (!path) {
		throw new Error(`No such item by key: ${key}`)
	}

	const buffer = fs.readFileSync(path)

	const file = <File & { buffer: Uint8Array }>new File([buffer], key)
	file.buffer = buffer

	return file
}

export function getItemsSync(glob: string) {
	const itemKeys = micromatch(contentKeys, glob)
	return itemKeys.map(key => getItemSync(key))
}
