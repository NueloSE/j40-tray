import  React  from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import { BrowserRouter as Router, Routes } from "react-router-dom"
import AppRoutes from './AppRoutes'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
		<AppRoutes />
	</Router>
  </React.StrictMode>
)
