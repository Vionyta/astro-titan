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

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
	return categories.find((category) => category.slug === slug);
}
