// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders'; //"file" is removed

// 3. Import Zod
import { z } from 'astro/zod';

import { categories } from '@data/categories';

// Extract category names for the enum
const categoryNames = categories.map((category) => category.name);

const company = defineCollection({
	loader: glob({ base: './src/content/company', pattern: '**/*.md' }),
	schema: z.object({
		companyName: z.string(),
		type: z.enum(['Permanent', 'Contract']),
		startDate: z.string(),
		endDate: z.string(),
		industry: z.string().optional(),
		jobTitle: z.string(),
		coverage: z.string().optional(),
		order: z.number().default(999),
	}),
});

const proj = defineCollection({
	loader: glob({ base: './src/content/proj', pattern: '**/*.md' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			projectSizing: z.string(),
			excerpt: z.string(),
			featuredImage: image().optional(),
			projectDate: z.string().optional(),
			publish: z.boolean().optional(),
			categories: z.array(z.enum(categoryNames as [string, ...string[]])),
			descriptions: z.string(),
		}),
});

//const cert = defineCollection({
//	loader: glob({ base: './src/content/cert', pattern: '**/*.md' }),
//	schema: z.object({
//		category: z.string(),
//		accreditor: z.string(),
//		certTitle: z.string(),
//		certYear: z.string(),
//		equivalent: z.boolean().optional(),
//	}),
//});

export const collections = { company, proj, };
