import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './myprojects.css'
import IMG1 from '../../assets/Institute-web.jpeg'
import IMG2 from '../../assets/Bodimate.png'
import IMG3 from '../../assets/Movie-api.png'
import IMG4 from '../../assets/My_Portfolio.png'

const Myprojects = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section id='myprojects' ref={ref}>

      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Recent Works
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Projects
      </motion.h2>

      <motion.div
        className="container portfolio__container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >

        <motion.article className='portfolio__item glass-card tilt-3d' variants={cardVariants}>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Institute-web</h3>
          <small className='text-light tech-tags'>MongoDB  | Express | React | Node. js.</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/navaneethan077/Institute-web" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://www.youtube.com/watch?v=qBvAAoWg6wE" target="_blank" rel='noreferrer' className='btn btn-primary pulse-neon'>Project Demo Link</a>
          </div>

        </motion.article>

        <motion.article className='portfolio__item glass-card tilt-3d' variants={cardVariants}>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Bodimate </h3>
          <small className='text-light tech-tags'>MongoDB  | Express | React | Node. js.</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/navaneethan077/Bodimate" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://bodimate.vercel.app/" target="_blank" rel='noreferrer' className='btn btn-primary pulse-neon'>Project Demo Link</a>


          </div>

        </motion.article>

        <motion.article className='portfolio__item glass-card tilt-3d' variants={cardVariants}>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>My Portfolio(This website)</h3>
          <small className='text-light tech-tags'>ReactJs</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/navaneethan077/my-portfolio" target="_blank" rel='noreferrer' className='btn'>Github</a>
            <a href="https://navaneethan05.netlify.app/" target="_blank" rel='noreferrer' className='btn btn-primary pulse-neon'>Project Demo Link</a>
          </div>

        </motion.article>

        <motion.article className='portfolio__item glass-card tilt-3d' variants={cardVariants}>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Movie-api</h3>
          <small className='text-light tech-tags'>MongoDB  | Express | React | Node. js.</small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/navaneethan077/movie-api" target="_blank" rel='noreferrer' className='btn'>Github</a>
            {/* <a href="" target="_blank" rel='noreferrer' className='btn btn-primary'>Visit Website</a>   */}
          </div>

        </motion.article>
      </motion.div>
    </section>
  )
}

export default Myprojects