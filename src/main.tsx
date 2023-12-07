import React from 'react'
import ReactDOM from 'react-dom/client'
import {UIMain} from './UIMain.tsx'
import './index.css'

import { CustomRoutes } from './routes/routes.tsx'
import { CustomNavbar } from './routes/navbar.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIMain navbar={CustomNavbar} routes={CustomRoutes}/>
  </React.StrictMode>,
)
