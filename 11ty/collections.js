import { dateToFormat } from './utils.js'

const excludeVisibility = (p, visibility = ['unlisted', 'private']) => !visibility.includes(p.data.visibility)

const collections = {
	feed: collection => collection.getFilteredByGlob(['src/article/*.md', 'src/note/*.md']).filter(p => excludeVisibility(p)),
	feedAll: collection => collection.getFilteredByGlob(['src/*/*.md']).filter(p => excludeVisibility(p)),
	photos: collection => collection.getFilteredByGlob('src/content/photo/*.md').filter(item => 'photo' in item.data).filter(p => excludeVisibility(p)),
	latest: collection => collection.getFilteredByGlob(['src/*/*.md']).sort((a, b) =>
		dateToFormat(a.data.updated || a.date) - dateToFormat(b.data.updated || b.date)).slice(0, 10),
	tagList: collection => {
		let tags = {}
		collection.getAllSorted().forEach(item => {
			(item.data.tags || []).forEach(tag => {
				(tags[tag.toLowerCase()] ||= []).push(item)
			})
		})
		return tags
	},
}

Array.from(['article', 'bookmark', 'note', 'read', 'watch', 'play']).forEach(type => {
	collections[type] = collection => collection.getFilteredByGlob(`src/${type}/*.md`).filter(p => excludeVisibility(p))
})

export default (config) => {
	for (const [name, collection] of Object.entries(collections)) {
		config.addCollection(name, collection)
	}
}