import 'dotenv/config'

import filters from './11ty/filters/index.js'
import collections from './11ty/collections.js'
import globalData from './11ty/globalData.js'
import plugins from './11ty/plugins/index.js'

export default (config) => {
	config.addPassthroughCopy({ 'static': '/' })
	config.addPassthroughCopy('uploads')
	config.addPassthroughCopy('src/css')

	config.addPlugin(filters)
	config.addPlugin(collections)
	config.addPlugin(globalData)
	config.addPlugin(plugins)

	config.addAsyncShortcode("youtube", async function(videoURL, title){
		const url = new URL(videoURL);
		const id = url.searchParams.get("v");
		return `
			<iframe class="yt-shortcode" src="https://www.youtube-nocookie.com/embed/${id}" title="YouTube video player${
			title ? ` for ${title}` : ""
			}" frameborder="0" allowfullscreen width="100%" height="500px"></iframe>
		`;	
	})

	return {
		dir: {
			input: 'src'
		}
	}
}