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

export const collections = { writing };
