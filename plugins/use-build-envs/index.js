export const onBuild = ({ netlifyConfig }) => {
	console.log('onBuild', process.env.REPOSITORY_URL)
	console.log('- ', JSON.stringify(netlifyConfig.functions))
	if (!netlifyConfig.functions.env) netlifyConfig.functions.env = {}
	netlifyConfig.functions.env.REPOSITORY_URL = process.env.REPOSITORY_URL
	if (!netlifyConfig.functions.environment) netlifyConfig.functions.environment = {}
	netlifyConfig.functions.environment.REPOSITORY_URL = process.env.REPOSITORY_URL
}