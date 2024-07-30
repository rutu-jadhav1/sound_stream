import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import './global.css';
import Home from './views/Home/Home'
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup'
import Trending from './views/Trending/Trending'
import Player from './views/Player/Player'
import Library from './views/Library/Library'
import Feed from './views/Feed/Feed'
import Favourites from './views/Favourites/Favourites'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }, 
  {
    path: '/trending',
    element: <Trending/>
  },
  {
    path: '/player',
    element: <Player/>
  },
  {
    path: '/library',
    element: <Library/>
  },
  {
    path: '/feed',
    element: <Feed/>
  },
  {
    path: '/favourites',
    element: <Favourites/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path: '*',
    element: <h1>Not Found</h1>
  }
])

root.render(<RouterProvider router={router}/>)