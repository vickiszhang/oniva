import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import Hero from './pages/Home.jsx';
import Vision from './components/Vision/Vision.jsx';
import Rating from './components/Vision/Rating.jsx';
import Quiz1 from './components/Home/Quiz/Quiz1.jsx';
import Results from './components/Home/Results/results.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/quiz",
    element: <Quiz1 />,
  },
  {
    path: "/vision",
    element: <Vision />,
  },
  {
    path: "/results",
    element: <Results />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
