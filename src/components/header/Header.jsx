import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  const [typedText, setTypedText] = useState('')
  const fullName = 'Sivakumarn Navaneethan'
  const [showGlitch, setShowGlitch] = useState(false)

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedText(fullName.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        // Trigger glitch effect occasionally
        setInterval(() => {
          setShowGlitch(true)
          setTimeout(() => setShowGlitch(false), 200)
        }, 5000)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <header id='home' className="gradient-animated">
      <div className="container header__container">

        <motion.h5
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.h5>

        <motion.h1
          className={`neon-text ${showGlitch ? 'glitch' : ''}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {typedText}
          <span className="cursor-blink">|</span>
        </motion.h1>

        <motion.h5
          className="text-light"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Software Engineering Undergraduate
        </motion.h5>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <CTA />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <HeaderSocials />
        </motion.div>

        <motion.div
          className="me"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <img src={me} alt='me' />
        </motion.div>

        <motion.a
          href="#contacts"
          className='scroll__down'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          Scroll Down
        </motion.a>
      </div>
    </header>
  )
}

export default Header