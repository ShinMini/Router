import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Detail from './component/Detail';
import Details from './component/Details';
import Home from './component/Home';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<App />}>
        <Route path={'home'} element={<Home />} />
        <Route path={'memebers'} element={<Detail />} />
        <Route path={'projects'} element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
