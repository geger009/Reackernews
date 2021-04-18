export const STORY_LENGTH = 30;

export const convertToTimeAgo = (time) => {
  console.log(new Date(time))
  var seconds = Math.floor(time / 1000);
  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

/* export const convertNumberToTimeAgo = (time) => {
  const now = +new Date()
  const timeAgo = now - time

  const ONE_YEAR = 3.154e10
  const ONE_MONTH = 2.628e9
  const ONE_DAY = 8.64e7
  const ONE_HOUR = 3.6e6
  const ONE_MINUTE = 60000

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
} */