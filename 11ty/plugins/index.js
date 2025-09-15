import pluginRss from '@11ty/eleventy-plugin-rss'
import { webmentionsPlugin } from './webmentions.js'
export default (config) => {
	config.addPlugin(pluginRss)
	config.addPlugin(webmentionsPlugin)
}