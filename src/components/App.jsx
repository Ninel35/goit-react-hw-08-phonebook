import Home from 'pages/Home.jsx';
import './../store/store.js'
import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from 'react-router-dom'

const RegisterPage = lazy(()=> import('pages/RegisterPage.jsx'))
const LoginPage = lazy(()=>import('pages/LoginPage.jsx')) 
const ContactsPage = lazy(()=>import('pages/ContactsPage.jsx'))
const Layout = lazy(()=>import('pages/layout/Layout.jsx'))

export const App = () => {
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
 
