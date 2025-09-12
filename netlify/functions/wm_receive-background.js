import { wm } from '../wm-config.js'
export const config = { path: '/webmention' }
export default async (request) => wm.webmentionBackgroundHandler(request)