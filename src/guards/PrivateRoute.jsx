import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { isAuthSelector } from 'store/auth/selectors'

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector(isAuthSelector)
  return isAuth? children : <Navigate to='/login'/>
}

export default PrivateRoute