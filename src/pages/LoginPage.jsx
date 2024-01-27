import { FormLogin } from 'components/FormLogin/FormLogin'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isAuthSelector } from 'store/auth/selectors'

const LoginPage = () => {

   const isAuth = useSelector(isAuthSelector)
  console.log('isAuth', isAuth)

  const navigate = useNavigate()

  useEffect(() => {
    isAuth && navigate('/')
  },[isAuth, navigate])
  return (
    <div>
      <FormLogin />
    </div>
  )
}

export default LoginPage