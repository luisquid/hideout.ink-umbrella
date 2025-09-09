import date from './date.js'

const filters = {
	limit: (arr, n) => arr.slice(0, n),
	getVariables: function(key) {
		// Need this to access global variables with dashes. (`like-of`)
		// https://github.com/11ty/eleventy/issues/567#issuecomment-575828788
		// https://www.11ty.dev/docs/languages/javascript/#warning-about-arrow-functions
		return key ? this.getVariables()[key] : this.getVariables()
	},
	toStars: (n = 0, max = 5) => '★'.repeat(Math.min(parseInt(n), max)) + (n - parseInt(n) > 0 ? '½' : ''),
	...date,
}

export default (config) => {
	for (const [name, filter] of Object.entries(filters)) {
		config.addFilter(name, filter)
	}
}