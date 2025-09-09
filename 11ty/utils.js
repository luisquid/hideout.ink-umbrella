import { DateTime } from 'luxon'
// Needed because date in frontmatter can be any of the following:
// - '2025-09-06T06:10:27.430Z'
// - 2025-09-06T06:10:27.430Z
// - 2025-09-06
export const fromDate = date => DateTime.fromJSDate(date instanceof Date ? date : new Date(date))
export const dateToFormat = (date = new Date(), format = 'x') => fromDate(date).toFormat(format)