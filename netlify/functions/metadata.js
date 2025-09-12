import { indieauth } from '../auth-config.js'
const { URL } = process.env
export const config = { path: '/.well-known/oauth-authorization-server' }
export default async (req) => indieauth.getMetadata(req, {
	issuer: URL,
	authorization_endpoint: `${URL}/auth`,
	token_endpoint: `${URL}/token`,
	introspection_endpoint: `${URL}/introspect`,
	userinfo_endpoint: `${URL}/userinfo`,
})