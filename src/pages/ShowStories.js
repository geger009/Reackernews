import React from 'react'
import { ButtonGroup, Button } from 'react-bootstrap'
import Story from '../components/Story'
import Loader from '../components/Loader'
import useStoriesFetcher from '../hooks/storiesFetcher'

const ShowStories = ({ type, page }) => {
  const { isLoading, stories, totalPage } = useStoriesFetcher(type ? type : 'top', page ? page : 1)

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="d-flex justify-content-center mb-3">
            <ButtonGroup>
              <Button variant="primary" href={ `/story/${ type }/${ (+page - 1) }` } disabled={ (+page - 1) < 1 }>Prev</Button>
              <Button variant="secondary">{ `${ page } / ${ totalPage }` }</Button>
              <Button variant="primary" href={ `/story/${ type }/${ (+page + 1) }` } disabled={ (+page + 1) > +totalPage }>Next</Button>
            </ButtonGroup>
          </div>

          { stories.map(({ data: story }) => (
            <Story key={story.id} story={story} />
          ))}

          <div className="d-flex justify-content-center mb-3">
            <ButtonGroup>
              <Button variant="primary" href={ `/story/${ type }/${ (+page - 1) }` } disabled={ (+page - 1) < 1 }>Prev</Button>
              <Button variant="secondary">{ `${ page } / ${ totalPage }` }</Button>
              <Button variant="primary" href={ `/story/${ type }/${ (+page + 1) }` } disabled={ (+page + 1) > +totalPage }>Next</Button>
            </ButtonGroup>
          </div>
        </>
      )}
    </>
  )
}

export default ShowStories