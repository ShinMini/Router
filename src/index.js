import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Members from './component/Members/Members';
import Member from './component/Members/Member';
import Projects from './component/Projects/Projects';
import Project from './component/Projects/Project';
import Home from './component/Home';
import Login from './component/Login';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route path={'home'} element={<Home />} />
        <Route path={'members'} element={<Members />}>
          <Route path=":id" element={<Member />} />
        </Route>
        <Route path={'projects'} element={<Projects />}>
          <Route path=":id" element={<Project />} />
        </Route>
        <Route path={'login'} element={<Login/>} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
