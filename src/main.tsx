import React from 'react'
import ReactDOM from 'react-dom/client'
import {UIMain} from './UIMain.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UIMain />
  </React.StrictMode>,
)
