// mdsvex has types but they're exported wrong. Ugh!
declare module 'mdsvex' {
	interface MdsvexOptions {
		highlight: {
			highlighter: (_code: string, _lang: string) => string
			alias?: { [alias]: lang }
		}
	}
	function compile(
		_md: string,
		_options?: MdsvexOptions
	): Promise<{ code: string } | undefined>
}
