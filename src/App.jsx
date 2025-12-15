import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Skills from './components/skills/Skills'
import Myprojects from './components/myprojects/Myprojects'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import ParticleField from './components/effects/ParticleField'
import MouseTrail from './components/effects/MouseTrail'
import CustomCursor from './components/effects/CustomCursor'
import AIChatbot from './components/chatbot/AIChatbot'

const App = () => {
  return (

    <>
      <ParticleField />
      <MouseTrail />
      <CustomCursor />
      <AIChatbot />
      <Header />
      <Nav />
      <About />
      <Experience />
      <Skills />
      <Myprojects />
      <Contacts />
      <Footer />

    </>
  )
}

export default App