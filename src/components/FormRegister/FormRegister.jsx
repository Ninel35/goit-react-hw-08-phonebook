import { useDispatch } from 'react-redux';
import css from './RegisterForm.module.css';
import { useState } from 'react';
import { signUpThunk } from 'store/auth/thunks';

export const RegisterForm = () => {

   const  [email, setEmail]  = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
    
    const dispatch = useDispatch()

  
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email')
      setEmail(value)
    else if (name === 'name')
      setName(value)
    else
      setPassword(value)

  }
    
  const handlerSubmit = (evt) => {
    evt.preventDefault();
    dispatch(signUpThunk({
      name: name,
      email: email,
      password: password,
    }))
    
    evt.currentTarget.reset();
  }

  return (
    <form className={css.form} onSubmit={handlerSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input type="text" name="name" onChange={handleChange}/>
      </label>
      <label className={css.label}>
        Email
        <input type="email" name="email" onChange={handleChange}/>
      </label>
      <label className={css.label}>
        Password
        <input type="password" name="password" onChange={handleChange}/>
      </label>
      <button type="submit">Register</button>
    </form>
  );
};
