import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const JSON_FOLDER = './.json'
const BLOG_FOLDER = 'src/content/blog'

// Get data from markdown files
const getData = (folder) => {
	const entries = fs.readdirSync(folder, { withFileTypes: true })

	const results = entries.flatMap((entry) => {
		const filepath = path.join(folder, entry.name)

		if (entry.isDirectory()) {
			return getData(filepath)
		} else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
			const file = fs.readFileSync(filepath, 'utf-8')
			const { data, content } = matter(file)

			// Skip drafts
			if (data.draft) return []

			// Build slug from path structure: src/content/blog/YEAR/slug/index.md -> blog/YEAR/slug
			const pathParts = filepath.split(path.sep)
			const blogIndex = pathParts.indexOf('blog')
			const slugParts = pathParts.slice(blogIndex)

			// Remove file extension and handle index files
			let slug = slugParts.join('/')
			slug = slug.replace(/\/index\.(md|mdx)$/, '').replace(/\.(md|mdx)$/, '')

			return {
				slug: slug,
				frontmatter: {
					title: data.title || '',
					description: data.description || '',
					tags: data.tags || [],
					pubDate: data.pubDate || '',
					externalUrl: data.externalUrl || null,
				},
				content: content.slice(0, 2000), // Limit content for search
			}
		}
		return []
	})

	return results.filter(Boolean)
}

try {
	// Create folder if it doesn't exist
	if (!fs.existsSync(JSON_FOLDER)) {
		fs.mkdirSync(JSON_FOLDER)
	}

	// Generate search data
	const posts = getData(BLOG_FOLDER)
	fs.writeFileSync(`${JSON_FOLDER}/search.json`, JSON.stringify(posts, null, 2))

	console.log(`Generated search data for ${posts.length} posts`)
} catch (err) {
	console.error('Error generating search data:', err)
	process.exit(1)
}
