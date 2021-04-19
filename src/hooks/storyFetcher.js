import { useState, useEffect } from 'react'
import { getStory } from '../utils/apis'

const useStoryFetcher = (id) => {
  const [story, setStory] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getStory(id)
      .then((story) => {
        setStory(story.data)
        setIsLoading(false)
      })
      .catch(() => {
        setStory(null)
        setIsLoading(false)
      })
  }, [id])

  return { isLoading, story }
}

export default useStoryFetcher