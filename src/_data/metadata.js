export default {
	title: process.env.TITLE,
	lang: process.env.LANGUAGE || "en",
	locale: process.env.LOCALE || "en_US",


	repository: process.env.REPOSITORY_URL,
	branch: process.env.BRANCH,
	head: process.env.BRANCH,
	envs: JSON.stringify(process.env),
}