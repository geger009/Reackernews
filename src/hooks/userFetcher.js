import { useState, useEffect } from 'react'
import { getUserDetail } from '../utils/apis'

const useUserFetcher = (id) => {
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getUserDetail(id)
      .then((userData) => {
        setUserData(userData)
        setIsLoading(false)
      })
      .catch(() => {
        setIsLoading(false)
      })
  }, [id])

  return { isLoading, userData }
}

export default useUserFetcher