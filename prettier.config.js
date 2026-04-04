/** @type {import('prettier').Options} */
export default {
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'all',
	useTabs: true,
	plugins: ['prettier-plugin-astro'],
	overrides: [
		{
			files: ['.*', '*.md', '*.toml', '*.yml'],
			options: {
				useTabs: false,
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
