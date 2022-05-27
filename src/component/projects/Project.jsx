import * as React from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';

export default function Project() {
   let { id } = useParams();
   return (
      <div>
         <h1>{id}</h1>
         <p> project goal : xxx</p>
         <p> project id num is : {id}</p>
      </div>
   );
}
