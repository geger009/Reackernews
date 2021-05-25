import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Link from './Link'
import { getHostName, convertToTimeAgo } from '../utils/helper'

const Story = ({ story: { id, by, title, kids, time, url, score, text } }) => {
  const hostName = url ? getHostName(url) : ''
  const link = url ? url : `/item/${id}`

  return (
    <>
      <Card className="mb-2">
        <Card.Body>
          <Card.Title>
            {
              url ? (
                <>
                  <Link url={ url } title={ title } />
                  { ' ' }
                  <span className="text-muted" style={{ fontSize: '11px' }}>{ `[${hostName}]` }</span>
                </>
              ) : (
                <a href={link}>{title}</a>
              )
            }
          </Card.Title>
          <Card.Subtitle>
            { score }
            { ` ${ score > 1 ? 'points' : 'point' } | ` }
            by{ ' ' }
            <NavLink to={ `/user/${ by }` }>{ by }</NavLink>
            { ' | ' }
            {
              convertToTimeAgo(time)
            }
            { ' | ' }
            <NavLink to={ `/item/${ id }` }>{ `${ kids && kids.length > 0 ? kids.length : 0 } comments` }</NavLink>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </>
  )
}

export default Story