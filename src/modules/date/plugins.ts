import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import customParseFormat from 'dayjs/plugin/customParseFormat'


export const initPlugins = () => {
  dayjs.extend(customParseFormat)
  dayjs.extend(relativeTime)
  dayjs.extend(duration)
  dayjs.extend(utc)
}

initPlugins()

declare module 'dayjs' {

  interface Dayjs {
    // relativeTime plugin
    toNow(withoutSuffix?: boolean): string
    fromNow(withoutSuffix?: boolean): string
    to(compared: dayjs.ConfigType, withoutSuffix?: boolean): string
    from(compared: dayjs.ConfigType, withoutSuffix?: boolean): string
  }
}
