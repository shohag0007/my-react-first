import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About.jsx'
import View from './components/View/View.jsx'
import DetailsPdk from './components/DetailsPdk/DetailsPdk.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,

    

  },

  {
    path: "/",
    element: <Home></Home>,
  },

  {
    path: "/home",
    element: <Home></Home>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/detailsPdk",
    element: <DetailsPdk></DetailsPdk>
  },
  {
    path: "/snowfall",
    element: <View></View>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
