import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root'

import 'uno.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
