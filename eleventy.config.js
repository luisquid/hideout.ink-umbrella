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

	return {
		dir: {
			input: 'src'
		}
	}
}
