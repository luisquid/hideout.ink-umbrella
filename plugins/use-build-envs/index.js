export const onBuild = ({ netlifyConfig }) => {
	netlifyConfig.functions.environment.REPOSITORY_URL = process.env.REPOSITORY_URL
}