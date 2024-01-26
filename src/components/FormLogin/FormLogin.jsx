import React, { useState } from 'react'
import css from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'store/auth/thunks';


export const FormLogin = () => {
    
    const  [email, setEmail]  = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()

   
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email')
      setEmail(value)
    else
      setPassword(value)

  }
    
  const handlerSubmit = (evt) => {
    evt.preventDefault();
 dispatch(loginThunk( {
      email: email,
      password: password
    }))

    evt.target.elements.email.value = "";
    evt.target.elements.password.value = "";
  }

 
  return (
    <form className={css.form} onSubmit={handlerSubmit} autoComplete="off">
      <label className={css.label}>
        Email
        <input type="email" name="email" onChange={handleChange}/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" onChange={handleChange}/>
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
