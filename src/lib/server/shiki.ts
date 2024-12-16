import { type ThemeInput, codeToHtml } from 'shiki'
import { transformerColorizedBrackets } from '@shikijs/colorized-brackets'

const hazycore: ThemeInput = {
	name: 'hazycore',
	colors: {
		'editor.background': '#090514',
		'editorBracketHighlight.unexpectedBracket.foreground': '#ff0000'
	},
	settings: [
		{
			scope: ['comment', 'punctuation.definition.comment'],
			settings: {
				foreground: '#c7c7ff72',
				fontStyle: 'italic'
			}
		},
		{
			scope: ['string', 'punctuation.definition.string'],
			settings: {
				foreground: '#f7a9d5'
			}
		},
		{
			scope: ['variable', 'meta.object-literal.key'],
			settings: {
				foreground: '#8bc7ff'
			}
		},
		{
			scope: ['entity.name.function'],
			settings: {
				foreground: '#b3ffcd'
			}
		},
		{
			scope: ['support.class'],
			settings: {
				foreground: '#78f9eb'
			}
		},
		{
			scope: ['keyword', 'storage', 'keyword.operator.new'],
			settings: {
				foreground: '#caaeff'
			}
		},
		{
			scope: ['punctuation', 'meta.arrow', 'meta.brace', 'keyword.operator'],
			settings: {
				foreground: '#e8e8ff'
			}
		},
		{
			scope: ['punctuation.definition.template-expression'],
			settings: {
				foreground: '#7c7c97'
			}
		}
	]
}

const shikiOptions = {
	themes: {
		dark: hazycore
	},
	defaultColor: 'dark',
	transformers: [
		transformerColorizedBrackets({
			themes: {
				hazycore: [
					'#e4b3f0',
					'#b3a3ee',
					'#9fe6f3',
					'#9ff0ac',
					'#eef0a5',
					'#f0aab9'
				]
			}
		})
	]
}

const highlight = async (code: string, lang: string) => {
	const html = await codeToHtml(code, { ...shikiOptions, lang })
	return html.replace('<code>', `<code lang=${JSON.stringify(lang)}>`)
}

export default highlight
