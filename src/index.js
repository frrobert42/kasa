import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/home";
import House from "./pages/house/house";
import About from "./pages/about/about";
import NotFound from "./pages/notFound/notFound";

// Create the router
const router = createBrowserRouter([
    {
        path: "*",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { path: "", index: true, element: <Home /> },
            { path: "house/:id", element: <House /> },
            { path: "about", element: <About /> },
            { path: "*", element: <NotFound /> },
        ],
    }
]);

// Render the router
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
