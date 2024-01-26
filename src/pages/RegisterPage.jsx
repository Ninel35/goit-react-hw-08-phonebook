import { RegisterForm } from 'components/FormRegister/FormRegister'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { isAuthSelector } from 'store/auth/selectors'

const RegisterPage = () => {
  const isAuth = useSelector(isAuthSelector)
  console.log('isAuth', isAuth)

  const navigate = useNavigate()

  useEffect(() => {
    isAuth && navigate('/')
  },[isAuth, navigate])

 
  return (
      <div>
        <RegisterForm />  
    </div>
  )
}

export default RegisterPage