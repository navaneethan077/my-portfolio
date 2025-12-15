import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './about.css'
import myImage from '../../assets/my-image2.jpg'
import { GiGraduateCap } from 'react-icons/gi'
// import {BsBookmarkStar} from 'react-icons/bs'
import { TfiWorld } from 'react-icons/tfi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id='about' ref={ref}>

      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get To Know
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <div className="container about__container">

        <motion.div
          className="about__me"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="about__me-image tilt-3d">
            <img src={myImage} alt="Me" />
          </div>
        </motion.div>

        <motion.div
          className="about__content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="about__cards">

            <motion.article className='about__card glass-card' variants={itemVariants}>
              <GiGraduateCap className='about__icon' />
              <h5>Degree</h5>
              <small>Bsc.(Hons) Computer Science and Technology (UWU) <br /><i>Uva Wellassa University.</i></small>
            </motion.article>

            {/* <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current GPA</h5>
                  <small>3.13</small>
              </article> */}

            <motion.article className='about__card glass-card' variants={itemVariants}>
              <TfiWorld className='about__icon' />
              <h5>Domains</h5>
              <small>
                <ul>
                  <li>Full-stack developers</li>
                  <li>Quality Assurance (QA) Engineer</li>
                </ul>
              </small>
            </motion.article>



          </div>
          <motion.p variants={itemVariants}>
            I'm a <b> Computer Science and Technology Undergradute</b> at the Uva Wellassa University.
            I'm an enthusiastic and driven Software Engineering student seeking a challenging internship opportunity to apply
            and expand my technical skills.
            With a strong academic foundation in software engineering and hands-on experience in various programming languages,
            I am eager to contribute to innovative projects and learn from experienced professionals in the industry. I am a quick learner who is always ready to face challenges.

          </motion.p>

        </motion.div>
      </div>
    </section>
  )
}

export default About
