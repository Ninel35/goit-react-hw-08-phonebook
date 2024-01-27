import './../store/store.js'
import React, { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { profileAuthSelector } from 'store/auth/selectors.js';
import { refreshThunk } from 'store/auth/thunks.js';

const Home = lazy(()=> import('pages/Home.jsx'))
const RegisterPage = lazy(()=> import('pages/RegisterPage.jsx'))
const LoginPage = lazy(()=>import('pages/LoginPage.jsx')) 
const ContactsPage = lazy(()=>import('pages/ContactsPage.jsx'))
const Layout = lazy(()=>import('pages/layout/Layout.jsx'))

export const App = () => {
  const profile = useSelector(profileAuthSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('profile', profile)
    !profile && dispatch(refreshThunk())
  }, [dispatch, profile])
  
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/contacts' element={<ContactsPage />} />
          </Route>

         
          <Route path='*' element={< Navigate to="/" />} />

        </Routes>
      </Suspense>
    </>
  )
}
 
