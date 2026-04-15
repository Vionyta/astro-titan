/** @type {import('prettier').Options} */
export default {
	printWidth: 200,
	semi: true,
	singleQuote: true,
	tabWidth: 1,
	trailingComma: 'all',
	useTabs: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: ['.*', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: true,
			},
		},
		{
			files: '**/*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
	singleQuote: true,
	astroAllowShorthand: true,
};
