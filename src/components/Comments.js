import React from 'react'
import Comment from './Comment'

const Comments = ({ kids }) => {
  return (
    <>
      { kids && kids.length >= 1 ? (
        kids.map((id) => (
          <Comment key={id} id={id} />
        ))
      ) : (
        <div className="text-center text-muted font-italic">No Comment</div>
      )}
    </>
  )
}

export default Comments