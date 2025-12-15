import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writing = defineCollection({
	// Load Markdown and MDX files in the `src/content/writing/` directory.
	loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			coverImageCredit: z.string().optional(),
			tags: z.array(z.string()).optional(),
			source: z.enum(['alliscalm', 'kimtown', 'cassowary', 'gfsc', 'gfsc-community', 'resistancelab']).optional(),
			sourceUrl: z.string().url().optional(),
			// External URL for posts hosted on other sites
			externalUrl: z.string().url().optional(),
		}),
});

const work = defineCollection({
	loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Year the work was created/completed
			year: z.number(),
			// Hero image for the work
			heroImage: image().optional(),
			coverImageCredit: z.string().optional(),
			// Tags/categories for filtering
			tags: z.array(z.string()).optional(),
			// Source/context of the work
			source: z.enum(['personal', 'gfsc', 'academic', 'freelance']).optional(),
			// Original URL where this was written about (e.g. gfsc.studio project page)
			sourceUrl: z.string().url().optional(),
			// Live URL for the project (the actual deployed site/app)
			liveUrl: z.string().url().optional(),
			// GitHub repository URL
			githubUrl: z.string().url().optional(),
			// Role in the project
			role: z.string().optional(),
			// Client or collaborator
			client: z.string().optional(),
			// Whether this project is no longer live/maintained
			retired: z.boolean().optional(),
		}),
});

export const collections = { writing, work };
