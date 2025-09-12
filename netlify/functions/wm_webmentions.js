import { wm } from '../wm-config.js'
export const config = { path: '/webmentions' }
export default async (request) => wm.webmentionsHandler(request)