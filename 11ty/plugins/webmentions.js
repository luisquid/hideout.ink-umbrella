import Fetch from '@11ty/eleventy-fetch'
const {
	URL,
	WM_TOKEN,
	SECRET,
} = process.env
const token = WM_TOKEN || (SECRET ? SECRET.slice(0, 8) : null)

// Using `eleventy-fetch` instead of fetch to handle caching while testing locally.
// For Netlify, it will still function as regular `fetch` as cache is cleared
// between build.
const fetchWMs = async (url) => {
	return await Fetch(url, {
		duration: '1d',
		type: 'json',
	})
}

export const webmentions = async () => {
	const webmentions = {}
	try {
		const json = await fetchWMs(`${URL}/webmentions?token=${token}`)
		for (const [target, value] of Object.entries(json)) {
			webmentions[target] = webmentions[target] || []
			webmentions[target] = [ ...webmentions[target], ...value ]
		}
	} catch (err) {
		console.error('Could not fetch webmentions:', err.message)
	}
	return webmentions
}

export const webmentionsPlugin = config => {
	config.addFilter('isBridged', url =>
		Array.from(['/@', 'did:plc']).some(i => (url || '').includes(i)))

	config.addGlobalData('webmentions', webmentions)
}