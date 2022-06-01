import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Login.css';

export default function Login() {
   return (
      <main>
         <h1> Login Page </h1>
         <div className={"login-form"}>
            <div className={"login id"}>
               <label for="id"><b>아이디</b></label>
               <input type="text" className={"id"} placeholder={" id"} required></input>
            </div>

            <div className={"login pwd"}>
               <label for="pwd"><b>비밀번호</b></label>
               <input type="password" className={"pwd"} placeholder={" password"} required></input>
            </div>

         <div className={"login bottom"}>
            <NavLink className={'find-user'} to={'/find-user'}>아이디/비밀번호 찾기</NavLink>
            <button type="submit" value={"login"}>로그인</button>
         </div>
         </div>
      </main>
   );
}