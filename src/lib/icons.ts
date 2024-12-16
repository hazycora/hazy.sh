import type { Component } from 'svelte'

const icons = import.meta.glob('$lib/icons/*.svg', {
	eager: true
})

const iconMap = new Map<string, Component>()

for (const [path, module] of Object.entries(icons) as [
	string,
	{ default: Component }
][]) {
	const name = path.replace(/^.*\//, '').replace(/\.svg$/, '')
	iconMap.set(name, module.default)
}

export default iconMap
