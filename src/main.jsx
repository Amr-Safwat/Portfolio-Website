import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from './components/1-header/Header'
import Landing from './components/2-landing/landing'
import About from './components/3-about/About'
import Services from './components/4-services/services'
import Skills from './components/5-my-skills/skills'
import Contact from './components/7-contact/contact'
import Footer from './components/8-footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Landing />
    <About />
    <Services />
    <Skills />
    <Contact />
    <Footer />
  </StrictMode>,
)
