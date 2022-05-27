import * as React from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';

export default function Member() {
   let { id } = useParams();
   return (
      <div>
         <h1>{id}</h1>
         <p> hello</p>
         <p> my name is {id}</p>
      </div>
   );
}
