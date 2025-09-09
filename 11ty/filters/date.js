import { fromDate, dateToFormat } from '../utils.js'
export default {
	toISO: (date = new Date()) => fromDate(date).toISO(),
	dateToFormat,
}