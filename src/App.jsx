import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contacts/Contact'

const App = () => {

  return (
    <div className='wrapper'>
      <Header />
      <div id='home'></div>
      <div className='content'>
        <Home />
        <div id='about'></div>
        <About />
        <div id='projects'></div>
        <Projects />
        <div id='contacts'></div>
        <Contact />
      </div>
    </div>
  )
}

export default App
