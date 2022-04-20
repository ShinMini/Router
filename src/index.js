import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Detail from './component/Detail';

const rootElement = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path=":detailAbout" element={<Detail />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
