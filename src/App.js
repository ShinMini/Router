import * as React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import './Style/App.css';

export default function App() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    );
}
