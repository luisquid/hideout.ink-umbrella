import Micropub from '@benjifs/micropub'
import GitHubStore from '@benjifs/github-store'
const {
	URL,
	// REPOSITORY_URL,
	// BRANCH,
	GITHUB_USER,
	GITHUB_REPO,
	GITHUB_BRANCH,
	GITHUB_TOKEN,
} = process.env
/*
 * I can't figure out a good way to use the Netlify "build" Environment Variables
 * so just leave this out for now.
 * https://docs.netlify.com/build/functions/environment-variables/#overrides-and-limitations
let username, repo
// https://docs.netlify.com/build/configure-builds/environment-variables/#git-metadata
// Assume github for this example
if (!GITHUB_USER && !GITHUB_REPO && REPOSITORY_URL?.indexOf('github.com')) {
	const parts = REPOSITORY_URL.split('/').filter(Boolean)
	if (parts.length > 3) {
		username = parts.at(-1)
		repo = parts.at(-2)
	}
}
*/
// @benjifs/indieauth normalizes URL so this should too here
const normalizeMe = (URL || '').replace(/\/+$/, '') + '/'
export const micropub = new Micropub({
	store: new GitHubStore({
		token: GITHUB_TOKEN,
		user: GITHUB_USER,
		repo: GITHUB_REPO,
		branch: GITHUB_BRANCH,
	}),
	me: normalizeMe,
	tokenEndpoint: `${URL}/token`,
	config: {
		'media-endpoint': `${URL}/micropub-media`,
	},
})
