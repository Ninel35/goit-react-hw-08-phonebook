import React from 'react'
import { NavLink } from 'react-router-dom';



 const Navigation = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <nav>
      <ul>
        <li> <NavLink to="/">
        Home
      </NavLink></li>
        <li><NavLink  to="/contacts">
        Contacts
        </NavLink></li>
        <button><NavLink  to="/login">
     Login
        </NavLink></button>
           <button><NavLink  to="/register">
     Register
        </NavLink></button>
      </ul>
     
       
        
    
    </nav>
  );
};



export default Navigation