import type { Handle } from '@sveltejs/kit'

const csi = `\x1b[`
const osc = `\x1b]`
const st = `\x1b\\`

const reset = `${csi}0m`
const bold = `${csi}1m`
const dim = `${csi}2m`
const hidden = `${csi}8m`

// not sure that this is safe, but whatever, i'm only using it here and know its inputs
function link(url: string, text: string) {
	url = url.replace(/\p{Cc}/gu, '')
	text = text.replace(/\p{Cc}/gu, '')
	return `${osc}8;;${url}${st}${text}${osc}8;;${st}`
}

function hiddenAnsi(body: string, ansiText: string) {
	const doctype = body.match(/.*?<!doctype(?:\s.*?)?>/i)?.[0] ?? ''
	const noDoctype = doctype ? body.replace(doctype, '') : body
	return `${doctype}<!--${csi}1K${csi}G${csi}?1049h${csi}?25l${hidden}-->${noDoctype}<!--${csi}?25h${reset}${csi}?1049l${ansiText}`
}

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event)

	if (event.url.pathname == '/') {
		const body = hiddenAnsi(
			await response.text(),
			`${bold}Hazel Cora 💞${reset}\n${dim}dev @ ${link('https://besties.house', 'besties.house')} · ${link('https://social.besties.house/@h', '@h@besties.house')} · ${link('mailto:hey@hazy.gay', 'hey@hazy.gay')}\n\nsee ${link('https://hazy.gay', 'hazy.gay')} in a browser for more <3${reset}\n`
		)

		return new Response(body, response)
	}

	return response
}
