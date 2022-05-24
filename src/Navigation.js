
import * as React from "react";
import { NavLink } from 'react-router-dom';
import './Style/Navigation.css';


export default function Navigation() {
   return (
      <nav className="mainNav">
         <div className="menu">
            <NavLink className={'home'} to={'/home'}>Home</NavLink> {''}
            <NavLink className={'members'} to={'/members'}>members</NavLink> {''}
            <NavLink className={'projects'} to={'/projects'}>projects</NavLink> {''}
         </div>
         <div className="user">
            <NavLink className={'login'} to={'/login'}>로그인/회원가입</NavLink> {''}
         </div>
      </nav>
   );
}
