import React from 'react'
import Story from '../components/Story'
import Loader from '../components/Loader'
import useStoriesFetcher from '../hooks/storiesFetcher'

const ShowStories = ({ type }) => {
  const { isLoading, stories } = useStoriesFetcher(type ? type : 'top', 1)

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : (
        <>
          { stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}
        </>
      )}
    </>
  )
}

export default ShowStories