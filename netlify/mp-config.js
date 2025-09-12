import Micropub from '@benjifs/micropub'
import GitHubStore from '@benjifs/github-store'
const {
	URL,
	REPOSITORY_URL,
	BRANCH,
	GITHUB_USER,
	GITHUB_REPO,
	GITHUB_TOKEN,
} = process.env
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
export const micropub = new Micropub({
	store: new GitHubStore({
		token: GITHUB_TOKEN,
		user: username || GITHUB_USER,
		repo: repo || GITHUB_REPO,
		branch: BRANCH,
	}),
	me: URL,
	tokenEndpoint: `${URL}/token`,
	config: {
		'media-endpoint': `${URL}/micropub-media`,
	},
})
