import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export const DATE_FORMAT = 'MMM D, YYYY'

export default dayjs
