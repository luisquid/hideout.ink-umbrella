import { indieauth } from '../auth-config.js'
export default async (request) => indieauth.userInfoEndpoint(request)