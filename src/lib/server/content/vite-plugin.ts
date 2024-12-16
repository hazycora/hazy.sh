import fs from 'node:fs'
import type { Plugin } from 'vite'
import { contentKeyPathMap } from '.'
import { lookup } from 'mrmime'

export default function (): Plugin {
	let building = false
	return {
		name: 'content-vite',
		configResolved({ command }) {
			if (command == 'build') {
				building = true
			}
		},
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				if (!req.url) return next()
				if (!req.url.startsWith('/blog/')) return next()

				const key = req.url.replace('/blog/', '')
				const path = contentKeyPathMap.get(key)
				if (!path) {
					return next()
				}
				const extension = path.split('.').pop()
				if (extension) {
					const contentType = lookup(extension)
					if (contentType) {
						res.setHeader('Content-Type', contentType)
					}
				}
				const fileContent = fs.readFileSync(path)
				res.write(fileContent)
				return
			})
		},
		buildStart() {
			for (const [key, path] of contentKeyPathMap) {
				if (key.endsWith('.md')) {
					// this will be rendered, so we don't need to emit it
					continue
				}
				const fileContent = fs.readFileSync(path)
				if (building) {
					this.emitFile({
						type: 'asset',
						name: key,
						fileName: 'blog/' + key,
						source: fileContent
					})
				}
			}
		}
	}
}
