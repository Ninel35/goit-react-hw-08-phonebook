import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { profileAuthSelector } from 'store/auth/selectors';
import { logout } from 'store/auth/slice';
import { logOutThunk } from 'store/auth/thunks';
import css from './Navigation.module.css';

const Navigation = () => {
  
  const profile = useSelector(profileAuthSelector)
  const navigate = useNavigate()
  const dispatch= useDispatch()

  const handleLogOut = () => {
    dispatch(logOutThunk())
    dispatch(logout())
    navigate('/login')
  }

  return (
    <nav>
      <ul className={css.header}>
        <li> <NavLink to="/" className={css.link}>
         Home
        </NavLink></li>
       {profile && <li><NavLink to="/contacts" className={css.link}>
          Contacts
        </NavLink></li> }
{profile && <p>{profile.email}
        </p>}
        {profile ? <button onClick={handleLogOut}>Logout</button> : <button><NavLink to="/login" className={css.link}>
          Login
        </NavLink></button>}

        <button><NavLink to="/register" className={css.link}>
          Register
        </NavLink></button>
        
      </ul>
     
       
        
    
    </nav>
  )
};



export default Navigation