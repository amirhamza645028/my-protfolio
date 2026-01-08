// main.jsx - সম্পূর্ণ Router setup
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import MainLayout from '../../my-protfolio/src/Layout/MainLayout';
import Experience from '../../my-protfolio/src/component/Experience';
import Projects from '../../my-protfolio/src/component/Projects';
import Profile from '../../my-protfolio/src/component/Profile';
import Education from '../../my-protfolio/src/component/Education';
import Skills2 from '../../my-protfolio/src/component/Skills2';
import Navbar from '../../my-protfolio/src/component/Navbar';
import Footer from '../../my-protfolio/src/component/Footer';
import Home from './component/Home';
import Contact from './component/Contact';
import Achievement from './component/Achievement';





const router = createBrowserRouter([
  {
    path: '/',
    element:<MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/navbar',
        element:<Navbar></Navbar>
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      },
      {
        path:'/skills2',
        element:<Skills2></Skills2>
      },
      {
        path: '/experience',
        element: <Experience></Experience>
      },
      {
        path:'/projects',
        element:<Projects></Projects>,
      },
      {
        path:'/education',
        element:<Education></Education>
      },
      {
        path:'/contact',
        element:<Contact></Contact>
      },
      {
        path:'/achivment',
        element:<Achievement></Achievement>
      },
      {
        path:'/footer',
        element:<Footer></Footer>
      }
      
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className='max-w-7xl mx-auto'>
      <RouterProvider router={router} />
    </div>
    
  
    
  </React.StrictMode>
);

