import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Members from './component/Members';
import Projects from './component/Projects';
import Home from './component/Home';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route path={'home'} element={<Home />} />
        <Route path={'members'} element={<Members />} />
        <Route path={'projects'} element={<Projects />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
