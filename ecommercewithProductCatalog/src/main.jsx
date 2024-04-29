import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserNameProvider } from './components/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <UserNameProvider>
    <App />
    </UserNameProvider>
  
)
