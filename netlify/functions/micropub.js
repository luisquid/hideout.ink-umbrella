import { micropub } from '../mp-config.js'
export default async (request) => micropub.micropubHandler(request)