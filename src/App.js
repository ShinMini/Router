import * as React from "react";
import { Link, Link } from 'react-router-dom';

export default function App {
    return (
        <div>
            <h1>React router Example</h1>
            <nav style={{ borderBottom: 'solid 1px gray', paddingBottom: '1rem' }}>
                <Link to="/html">HTML</Link>
                <Link to="/css">CSS</Link>
                <Link to="/js">JS</Link>
            </nav>
            <Outlet />
        </div>
    );
}
