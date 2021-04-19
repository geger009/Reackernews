import React from 'react'
import { Media } from 'react-bootstrap'
import Loader from '../components/Loader'
import useUserFetcher from '../hooks/userFetcher'
import { convertToTimeAgo } from '../utils/helper'

const UserDetail = (props) => {
  const { userid } = props.match.params
  const { isLoading, userData } = useUserFetcher(userid)

  return (
    <>
      { isLoading ? (
        <Loader />
      ) : (
        <Media>
          <Media.Body>
            <h3 className="mb-1">{ userData.id }</h3>
            <p className="font-italic text-muted" style={{ fontSize: '11px' }}>
              { `created ${convertToTimeAgo(userData.created)}` }
            </p>
            <p dangerouslySetInnerHTML={{__html: userData.about}}></p>
          </Media.Body>
          <div className="text-center p-2 m-2 text-muted" style={{height: '100%'}}>
            <p className="font-italic mb-1" style={{ fontSize: '11px'}}>Karma</p>
            <h5>{ userData.karma }</h5>
          </div>
        </Media>
      )}
    </>
  )
}

export default UserDetail