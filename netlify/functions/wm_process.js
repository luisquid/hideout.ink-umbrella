import { wm } from '../wm-config.js'
export const config = { path: '/wm-process' }
export default async (request) => wm.processHandler(request)