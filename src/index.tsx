import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  redirect
} from "react-router-dom";
import Root from './routes/root';
import ShowTicket from './components/ShowTicket';
import Dashboard from './components/Dashboard';
import CreateTicket from './components/CreateTicket';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"tickets",
        element:  <Dashboard />
      },
      {
        path:"tickets/create",
        element:  <CreateTicket />
      },
      {
      path:"tickets/:ticketid",
      element:<ShowTicket />
    }]
  },
]);


root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
