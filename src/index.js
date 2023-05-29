import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import './index.css';
import {App} from './App';
import { About } from './About'
import { Skills } from './Skills'
import { History } from './History'
import { Projects } from './Projects'
import reportWebVitals from './reportWebVitals';
import { Landing } from './Landing';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing path='/'/>
    },
    {
      path: '/home',
      element: <App path='home'/>
    },
    {
      path: '/about',
      element: <About path='about'/>
    },
    {
      path: '/history',
      element: <History path='history'/>
    },
    {
      path: '/skills',
      element: <Skills path='skills'/>
    },
    {
      path: '/projects',
      element: <Projects path='projects'/>
    },

]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
