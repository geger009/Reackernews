import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loader = () => {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <div className="p-2">
        <Spinner animation="border" variant="primary" />
      </div>
      <div style={{ height: '100%' }}>
        <p className="m-0 p-2">Loading...</p>
      </div>
    </div>
  )
}

export default Loader