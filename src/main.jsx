import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/1-header/Header'
import Landing from './components/2-landing/landing'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Landing />
  </StrictMode>,
)
