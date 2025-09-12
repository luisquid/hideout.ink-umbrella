import { micropub } from '../mp-config.js'
export const config = { path: '/micropub-media' }
export default async (request) => micropub.mediaHandler(request)