import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TestTemplate2 from './App.jsx'
import TestTemplate4 from './components/template-4.jsx'
import TestTemplate5 from './components/template-5.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TestTemplate4 />
  </React.StrictMode>,
)
