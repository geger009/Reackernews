import { useState, useEffect } from 'react'
import { getStories } from '../utils/apis'

const useStoriesFetcher = (type, page) => {
  const [stories, setStories] = useState([])
  const [totalPage, setTotalPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getStories(type, page)
      .then(({ totalPage, stories }) => {
        setTotalPage(totalPage)
        setStories(stories)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [type, page])

  return { isLoading, stories, totalPage }
}

export default useStoriesFetcher