interface Category {
	name: string;
	slug: string;
	description: string;
	lang: 'en' | 'zh';
}

export const categories: Category[] = [
	{
		name: 'Tech',
		slug: 'tech',
		description: 'Latest in technology and software development',
		lang: 'en',
	},
	{
		name: 'Web Development',
		slug: 'web-development',
		description: 'Tips and insights for better web development',
		lang: 'en',
	},
	{
		name: 'Design',
		slug: 'design',
		description: 'Exploring design and user experience',
		lang: 'en',
	},
	{
		name: 'Accessibility',
		slug: 'accessibility',
		description: 'Exploring accessibility and user experience',
		lang: 'en',
	},
	{
		name: 'Theme Usage',
		slug: 'theme-usage',
		description: 'Learn how to use the theme',
		lang: 'en',
	},
	{
		name: 'Astro JS',
		slug: 'astro-js',
		description: 'Everything about Astro JS framework and development',
		lang: 'en',
	},
	{
		name: 'SEO',
		slug: 'seo',
		description: 'Search engine optimization strategies and best practices',
		lang: 'en',
	},
	{
		name: 'Core Network',
		slug: 'core',
		description: 'Core Network Design, deployment and Operation',
		lang: 'en',
	},
	{
		name: 'Cyber Security',
		slug: 'cybersec',
		description: 'Cyber Security Domain.',
		lang: 'en',
	},
	{
		name: 'Finance Services Institute',
		slug: 'fsi',
		description: 'Finance Service Institute inclusive Banking, Gaming and Insurances.',
		lang: 'en',
	},
	{
		name: '技术',
		slug: 'tech',
		description: '技术和软件开发的最新动态',
		lang: 'zh',
	},
	{
		name: 'Web 开发',
		slug: 'web-development',
		description: '更好进行 Web 开发的建议和见解',
		lang: 'zh',
	},
	{
		name: '设计',
		slug: 'design',
		description: '探索设计和用户体验',
		lang: 'zh',
	},
	{
		name: '访问性',
		slug: 'accessibility',
		description: '探索访问性和用户体验',
		lang: 'zh',
	},
	{
		name: '主题使用',
		slug: 'theme-usage',
		description: '了解如何使用此主题',
		lang: 'zh',
	},
	{
		name: 'Astro JS',
		slug: 'astro-js',
		description: '关于 Astro JS 框架和开发的一切',
		lang: 'zh',
	},
	{
		name: 'SEO',
		slug: 'seo',
		description: '搜索引擎优化策略和最佳实践',
		lang: 'zh',
	},
	{
		name: '核心网络',
		slug: 'core',
		description: '核心网络设计、部署和运营',
		lang: 'zh',
	},
	{
		name: '网络安全',
		slug: 'cybersec',
		description: '网络安全领域',
		lang: 'zh',
	},
	{
		name: '金融服务行业',
		slug: 'fsi',
		description: '涵盖银行、博彩和保险在内的金融服务行业。',
		lang: 'zh',
	},
];


// Helper function to get category by slug and language
export function getCategoryBySlug(slug: string, lang: string = 'en'): Category | undefined {
	return categories.find((category) => category.slug === slug && category.lang === lang);
}
