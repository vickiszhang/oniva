import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Home from './pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cycling",
    element: <Home />,
  },
  {
    path: "/climbing",
    element: <Home />,
  },
  {
    path: "/parks",
    element: <Home />,
  },
  {
    path: "/trail",
    element: <Home />,
  },
  {
    path: "/hiking",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
