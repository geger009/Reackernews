import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Link = ({ url, title }) => (
  <a href={ url } target="_blank" rel="noreferrer">
    { title }
  </a>
)

const Story = ({ story: { id, by, title, kids, time, url, score } }) => {
  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>
            <Link url={ url } title={ title } />
          </Card.Title>
          <Card.Subtitle>
            { score }
            { ` ${ score > 1 ? 'points' : 'point' } | ` }
            by{ ' ' }
            <NavLink to={ `/user/${ by }` }>{ by }</NavLink>
            { ' | ' }
            {
              new Date(time * 1000).toLocaleDateString('en-US', {
              hour: 'numeric',
              minute: 'numeric'})
            }
            { ' | ' }
            <NavLink to={ `/item/${ id }` }>{ `${ kids && kids.length > 0 ? kids.length : 0 } comments` }</NavLink>
          </Card.Subtitle>
        </Card.Body>
      </Card>
      {/* <div className="story">
        <div className="story-title">
          <Link url={ url } title={ title } />
        </div>
        <div className="story-info">
          <span>
            by{ ' ' } 
            <NavLink to={ `/user/${ by }` }>{ by }</NavLink>
          </span>
          <span>
            {` | `}
          </span>
          <span>
            { new Date(time * 1000).toLocaleDateString('en-US', {
              hour: 'numeric',
              minute: 'numeric'
            }) }
          </span>
          <span>
            {` | `}
          </span>
          <span>
            <Link
              url={ `https://news.ycombinator.com/item?id=${ id }` }
              title={ `${ kids && kids.length > 0 ? kids.length : 0 } comments` }
            />
          </span>
        </div>
      </div> */}
    </>
  )
}

export default Story