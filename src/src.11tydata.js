export default {
	"partial": "partials/entry/default.njk",
	"layout": "layouts/entry.njk",
	"eleventyComputed": {
		"eleventyExcludeFromCollections": data => data.deleted || data.draft,
		// "layout": data => data.deleted ? "layouts/deleted.njk" : data.layout,
		"postType": data => {
			if (data.draft) return false
			if (data.permalink) return data.permalink
			// Examples
			// - /index
			// - /404
			// - /article/article-one
			// - /note/note-one
			const type = data.page.filePathStem.split('/')
			return type.length > 2 ? type[1] : ''
		}
	}
}