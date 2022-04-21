import * as React from "react";
import { NavLink, Outlet } from 'react-router-dom';
import './App.css';

const style = {
    home: {
        backgroundColor: 'skyblue',
    },
    members: {
        backgroundColor: 'pink',
    },
    projects: {
        backgroundColor: 'green',
    },
};

export default function App() {
    return (
        <div>
            <h1>React router Example</h1>
            <nav style={{ borderBottom: 'solid 1px gray', paddingBottom: '1rem' }}>
                <NavLink to={'/home'} activeClassName={style.home}>Home</NavLink> | {''}
                <NavLink to={'/members'} activeClassName={style.members}>members</NavLink> | {''}
                <NavLink to={'/projects'} activeClassName={style.projects}>projects</NavLink> | {''}
            </nav>
            <Outlet />
        </div>
    );
}
