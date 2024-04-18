import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes'
import AuthProviders from './Providers/AuthProviders'
import DataProviders from './Providers/DataProviders'



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <DataProviders>
        <RouterProvider router={router} />
      </DataProviders>
    </AuthProviders>
  </React.StrictMode>
);
