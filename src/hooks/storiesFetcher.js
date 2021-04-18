import { useState, useEffect } from 'react'
import { getStories } from '../utils/apis'

const useStoriesFetcher = (type, page) => {
  const [stories, setStories] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getStories(type, page)
      .then((stories) => {
        setStories(stories)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [type, page])

  return { isLoading, stories }
}

export default useStoriesFetcher