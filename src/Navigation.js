
import * as React from "react";
import { NavLink } from 'react-router-dom';
import './Style/Navigation.css';


export default function Navigation() {
   return (
      <nav className="mainNav">
         <div className="menu">
            <NavLink className={'home'} to={'/home'}>Home</NavLink> {''}
            <NavLink className={'members'} to={'/members'}>
               Members
               <NavLink className={'member'} to={'/members/Jonson'}>Jonson</NavLink>
               <NavLink className={'member'} to={'/members/James'}>James</NavLink>
               <NavLink className={'member'} to={'/members/Hyeonmins'}>Hyeonmins</NavLink>
            </NavLink> {''}
            <NavLink className={'projects'} to={'/projects'}>
               Projects
               <NavLink className={'project'} to={'/projects/project1'}>project 1</NavLink>
               <NavLink className={'project'} to={'/projects/project2'}>project 2</NavLink>
            </NavLink> {''}
         </div>
         <div className="user">
            <NavLink className={'login'} to={'/login'}>로그인/회원가입</NavLink> {''}
         </div>
      </nav>
   );
}
