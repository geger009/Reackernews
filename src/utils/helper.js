import url from 'url'

export const STORY_LENGTH = 30;

export const convertToTimeAgo = (unixtime) => {
  const time = +new Date(unixtime * 1000)
  const now = +new Date()
  const timeAgo = now - time

  const ONE_MINUTE = 60 * 1000
  const ONE_HOUR = 60 * ONE_MINUTE
  const ONE_DAY = 24 * ONE_HOUR
  const ONE_MONTH = 30.5 * ONE_DAY
  const ONE_YEAR = 12 * ONE_MONTH

  if (timeAgo >= ONE_YEAR * 2) {
    return `${ Math.floor(timeAgo / ONE_YEAR) } years ago`
  } else if (timeAgo >= ONE_YEAR) {
    return 'a year ago'
  } else if (timeAgo >= ONE_MONTH * 2) {
    return `${ Math.floor(timeAgo / ONE_MONTH) } months ago`
  } else if (timeAgo >= ONE_MONTH) {
    return '1 month ago'
  } else if (timeAgo >= ONE_DAY * 2) {
    return `${ Math.floor(timeAgo / ONE_DAY) } days ago`
  } else if (timeAgo >= ONE_DAY) {
    return '1 day ago'
  } else if (timeAgo >= ONE_HOUR * 2) {
    return `${ Math.floor(timeAgo / ONE_HOUR) } hours ago`
  } else if (timeAgo >= ONE_HOUR) {
    return '1 hour ago'
  } else if (timeAgo >= ONE_MINUTE * 2) {
    return `${ Math.floor(timeAgo / ONE_MINUTE) } minutes ago`
  } else if (timeAgo >= 0) {
    return '1 minute ago'
  } else  {
    return ''
  }
}

export const getHostName = (siteUrl) => {
  let hostname = ''

  if (siteUrl) {
    if (!siteUrl.includes('//')) {
      siteUrl = `http://${siteUrl}`
    }

    hostname = url.parse(siteUrl).hostname
  }

  if (hostname.includes('www.')) {
    hostname = hostname.split('www.')[1]
  }

  return hostname
}