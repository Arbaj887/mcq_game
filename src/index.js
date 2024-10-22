import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,createRoutesFromElements, RouterProvider,Route, } from 'react-router-dom'
import Mcqquestion from './component/Mcqquestion';
import Mcqanswer from './component/Mcqanswer';

const root = ReactDOM.createRoot(document.getElementById('root'));

const route =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
     <Route path='/' element={<Mcqquestion/>}/>
     <Route path='/mcqanswer' element={<Mcqanswer/>}/>

    </Route>
  )
  )


root.render(
  <React.StrictMode>
    <RouterProvider router={route}>
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
