// main.jsx - সম্পূর্ণ Router setup
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import MainLayout from '../../my-protfolio/src/Layout/MainLayout';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Profile from './component/Profile';
import Education from './component/Education';
import Skills2 from './component/Skills2';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Home';
import Contact from './component/Contact';
import Achievement from './component/Achievement';
import MainLayout from './Layout/MainLayout'





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

