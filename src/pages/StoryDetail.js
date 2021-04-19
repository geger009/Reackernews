import React from 'react'
import { Media } from 'react-bootstrap'
import Comments from '../components/Comments'
import Link from '../components/Link'
import Loader from '../components/Loader'
import useStoryFetcher from '../hooks/storyFetcher'
import { getHostName, convertToTimeAgo } from '../utils/helper'

const StoryDetail = ({ id }) => {
  const { isLoading, story } = useStoryFetcher(id)

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : 
      (
        <>
          <Media className="mb-4">
            <Media.Body>
              <h3 className="mb-1">
                {
                  story.url ? (
                    <>
                      <Link url={ story.url } title={ story.title } />
                      { ' ' }
                      <span className="text-muted text-h6">{ `[${ getHostName(story.url) }]` }</span>
                    </>
                  ) : story.title
                }
              </h3>
              <span className="text-muted font-italic" style={{ fontSize: '14px'}}>{ `created ${ convertToTimeAgo(story.time) }` }</span>
              {
                story.text ? (
                  <p className="my-2" dangerouslySetInnerHTML={{ __html: story.text }}></p>
                ) : (
                  <></>
                )
              }
            </Media.Body>
            <div className="text-center p-2 m-2 text-muted" style={{height: '100%'}}>
              <p className="font-italic mb-1" style={{ fontSize: '11px'}}>{ `${ story.score > 1 ? 'Points' : 'Point' }` }</p>
              <h5>{ story.score }</h5>
            </div>
          </Media>
          <Comments kids={ story.kids } />
        </>
      )}
    </>
  )
}

export default StoryDetail