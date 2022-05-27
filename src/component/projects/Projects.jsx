import * as React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Projects() {
   return (
      <projects>
         <Outlet />
      </projects>
   );
}