export const onBuild = ({ netlifyConfig }) => {
	console.log('onBuild', process.env.REPOSITORY_URL)
	console.log('- ', JSON.stringify(netlifyConfig.functions))
	if (!netlifyConfig.functions.env) netlifyConfig.functions.env = {}
	netlifyConfig.functions.env.REPO_URL = process.env.REPOSITORY_URL
}