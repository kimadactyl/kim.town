import { execSync } from 'child_process'
import { statSync } from 'fs'

export function remarkModifiedTime() {
	return function (_tree, file) {
		const filepath = file.history[0]
		let lastModified

		try {
			const result = execSync(`git log -1 --pretty="format:%cI" "${filepath}"`, {
				encoding: 'utf-8',
				stdio: ['pipe', 'pipe', 'pipe']
			})
			lastModified = result.toString()
		} catch {
			// Fall back to file system mtime if not in a git repo
			const stats = statSync(filepath)
			lastModified = stats.mtime.toISOString()
		}

		file.data.astro.frontmatter.lastModified = lastModified
	}
}
