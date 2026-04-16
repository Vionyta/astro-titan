interface Category {
	name: string;
	slug: string;
	description: string;
}

export const categories: Category[] = [
	{
		name: 'Tech',
		slug: 'tech',
		description: 'Latest in technology and software development',
	},
	{
		name: 'Web Development',
		slug: 'web-development',
		description: 'Tips and insights for better web development',
	},
	{
		name: 'Design',
		slug: 'design',
		description: 'Exploring design and user experience',
	},
	{
		name: 'Accessibility',
		slug: 'accessibility',
		description: 'Exploring accessibility and user experience',
	},
	{
		name: 'Theme Usage',
		slug: 'theme-usage',
		description: 'Learn how to use the theme',
	},
	{
		name: 'Astro JS',
		slug: 'astro-js',
		description: 'Everything about Astro JS framework and development',
	},
	{
		name: 'SEO',
		slug: 'seo',
		description: 'Search engine optimization strategies and best practices',
	},
	{
		name: 'Core Network',
		slug: 'core',
		description: 'Core Network Design, deployment and Operation',
	},
	{
		name: 'Cyber Security',
		slug: 'cybersec',
		description: 'Cyber Security Domain.',
	},
	{
		name: 'Finance Services Institute',
		slug: 'fsi',
		description: 'Finance Service Institute inclusive Banking, Gaming and Insurances.',
	},
];

export const zhcategories: Category[] = [
	{
		name: '技术',
		slug: 'tech',
		description: '技术和软件开发的最新动态',
	},
	{
		name: 'Web 开发',
		slug: 'web-development',
		description: '更好进行 Web 开发的建议和见解',
	},
	{
		name: '设计',
		slug: 'design',
		description: '探索设计和用户体验',
	},
	{
		name: '访问性',
		slug: 'accessibility',
		description: '探索访问性和用户体验',
	},
	{
		name: '主题使用',
		slug: 'theme-usage',
		description: '了解如何使用此主题',
	},
	{
		name: 'Astro JS',
		slug: 'astro-js',
		description: '关于 Astro JS 框架和开发的一切',
	},
	{
		name: 'SEO',
		slug: 'seo',
		description: '搜索引擎优化策略和最佳实践',
	},
	{
		name: '核心网络',
		slug: 'core',
		description: '核心网络设计、部署和运营',
	},
	{
		name: '网络安全',
		slug: 'cybersec',
		description: '网络安全领域',
	},
	{
		name: '金融服务行业',
		slug: 'fsi',
		description: '涵盖银行、博彩和保险在内的金融服务行业。',
	},
];

/**
 * Helper function to get category by slug and locale
 * @param slug - The category slug
 * @param locale - The current locale (default: 'en')
 */
export function getCategoryBySlug(slug: string, locale: string = 'en'): Category | undefined {
	const source = locale === 'zh' ? zhcategories : categories;
	return source.find((category: Category) => category.slug === slug);
}
