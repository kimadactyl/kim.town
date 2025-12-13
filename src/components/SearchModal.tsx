import { useEffect, useState } from 'react'

interface SearchItem {
	slug: string
	frontmatter: {
		title: string
		description?: string
		tags?: string[]
		pubDate?: string
		externalUrl?: string | null
	}
	content: string
}

interface SearchModalProps {
	searchData: SearchItem[]
	basePath: string
}

const SearchModal = ({ searchData, basePath }: SearchModalProps) => {
	const [searchString, setSearchString] = useState('')
	const [isOpen, setIsOpen] = useState(false)

	// Listen for open-search events from the window (triggered by Astro script)
	useEffect(() => {
		const handleOpen = () => setIsOpen(true)
		window.addEventListener('open-search', handleOpen)
		return () => window.removeEventListener('open-search', handleOpen)
	}, [])

	const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchString(e.currentTarget.value.replace('\\', '').toLowerCase())
	}

	const doSearch = (data: SearchItem[]) => {
		if (searchString === '') return []

		const regex = new RegExp(`${searchString}`, 'gi')
		return data.filter((item) => {
			const title = item.frontmatter.title?.toLowerCase().match(regex)
			const description = item.frontmatter.description?.toLowerCase().match(regex)
			const tags = item.frontmatter.tags?.join(' ').toLowerCase().match(regex)
			const content = item.content.toLowerCase().match(regex)
			return title || description || tags || content
		})
	}

	const searchResult = doSearch(searchData)

	const highlightMatch = (text: string, query: string) => {
		if (!query || !text) return text
		const parts = text.split(new RegExp(`(${query})`, 'gi'))
		return parts.map((part, i) =>
			part.toLowerCase() === query.toLowerCase() ? (
				<mark key={i} className="bg-primary/30 dark:bg-primary-dark/30 rounded px-0.5">
					{part}
				</mark>
			) : (
				part
			)
		)
	}

	const getContentSnippet = (content: string, query: string) => {
		const lowerContent = content.toLowerCase()
		const position = lowerContent.indexOf(query.toLowerCase())
		if (position === -1) return content.slice(0, 100) + '...'

		const start = Math.max(0, position - 30)
		const end = Math.min(content.length, position + query.length + 70)
		const snippet = content.slice(start, end)
		return (start > 0 ? '...' : '') + snippet + (end < content.length ? '...' : '')
	}

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault()
				setIsOpen(true)
			}
			if (e.key === 'Escape') {
				setIsOpen(false)
			}
		}

		document.addEventListener('keydown', handleKeyDown)
		return () => document.removeEventListener('keydown', handleKeyDown)
	}, [])

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
			setTimeout(() => document.getElementById('searchInput')?.focus(), 100)
		} else {
			document.body.style.overflow = ''
			setSearchString('')
		}
	}, [isOpen])

	return (
		<div className={`fixed inset-0 z-50 flex items-start justify-center pt-24 transition-opacity ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
			<div
				className="absolute inset-0 bg-black/50 backdrop-blur-sm"
				onClick={() => setIsOpen(false)}
			/>
			<div className="relative w-full max-w-xl mx-4 bg-background dark:bg-background-dark rounded-lg shadow-2xl border border-text/10 dark:border-text-dark/10 overflow-hidden">
				{/* Search input */}
				<div className="p-4 border-b border-text/10 dark:border-text-dark/10">
					<div className="relative">
						<svg
							className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text/50 dark:text-text-dark/50"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						<input
							id="searchInput"
							type="text"
							placeholder="Search posts..."
							className="w-full pl-10 pr-4 py-3 bg-text/5 dark:bg-text-dark/5 rounded-lg border-0 focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark outline-none text-text dark:text-text-dark placeholder:text-text/50 dark:placeholder:text-text-dark/50"
							value={searchString}
							onChange={handleSearch}
							autoComplete="off"
						/>
						{searchString && (
							<button
								onClick={() => setSearchString('')}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-text/50 dark:text-text-dark/50 hover:text-text dark:hover:text-text-dark"
							>
								<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
						)}
					</div>
				</div>

				{/* Results */}
				<div className="max-h-96 overflow-y-auto p-2">
					{searchString ? (
						searchResult.length > 0 ? (
							<div className="space-y-1">
								{searchResult.map((item) => {
									const href = item.frontmatter.externalUrl || `${basePath}/${item.slug}`
									const isExternal = !!item.frontmatter.externalUrl
									return (
										<a
											key={item.slug}
											href={href}
											target={isExternal ? '_blank' : undefined}
											rel={isExternal ? 'noopener noreferrer' : undefined}
											className="block p-3 rounded-lg hover:bg-text/5 dark:hover:bg-text-dark/5 transition-colors"
										>
											<div className="flex items-start gap-2">
												<div className="flex-1 min-w-0">
													<h3 className="font-medium text-text dark:text-text-dark truncate">
														{highlightMatch(item.frontmatter.title, searchString)}
														{isExternal && (
															<svg
																className="inline-block w-3.5 h-3.5 ml-1 opacity-50"
																fill="none"
																stroke="currentColor"
																viewBox="0 0 24 24"
															>
																<path
																	strokeLinecap="round"
																	strokeLinejoin="round"
																	strokeWidth={2}
																	d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
																/>
															</svg>
														)}
													</h3>
													{item.frontmatter.description && (
														<p className="text-sm text-text/70 dark:text-text-dark/70 truncate mt-0.5">
															{highlightMatch(item.frontmatter.description, searchString)}
														</p>
													)}
													{item.content && searchString && item.content.toLowerCase().includes(searchString) && (
														<p className="text-xs text-text/50 dark:text-text-dark/50 mt-1 line-clamp-1">
															{highlightMatch(getContentSnippet(item.content, searchString), searchString)}
														</p>
													)}
												</div>
											</div>
											{item.frontmatter.tags && item.frontmatter.tags.length > 0 && (
												<div className="flex gap-1 mt-2 flex-wrap">
													{item.frontmatter.tags.slice(0, 3).map((tag) => (
														<span
															key={tag}
															className="text-xs px-1.5 py-0.5 rounded bg-text/10 dark:bg-text-dark/10 text-text/70 dark:text-text-dark/70"
														>
															{highlightMatch(tag, searchString)}
														</span>
													))}
												</div>
											)}
										</a>
									)
								})}
							</div>
						) : (
							<div className="py-12 text-center text-text/50 dark:text-text-dark/50">
								<svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<p>No results for "<strong>{searchString}</strong>"</p>
							</div>
						)
					) : (
						<div className="py-8 text-center text-text/50 dark:text-text-dark/50">
							Type to search posts...
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="px-4 py-2 border-t border-text/10 dark:border-text-dark/10 text-xs text-text/50 dark:text-text-dark/50 flex items-center justify-between">
					<span>
						<kbd className="px-1.5 py-0.5 rounded bg-text/10 dark:bg-text-dark/10 font-mono">ESC</kbd> to close
					</span>
					{searchString && (
						<span>{searchResult.length} result{searchResult.length !== 1 ? 's' : ''}</span>
					)}
				</div>
			</div>
		</div>
	)
}

export default SearchModal
