import { indieauth } from '../auth-config.js'
export default async (request) => indieauth.authorizationEndpoint(request)