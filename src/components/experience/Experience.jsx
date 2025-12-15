import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './experience.css'
import { MdWork, MdCheckCircle } from 'react-icons/md'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: "Associate Software Engineer",
      company: "Lanka DealPartner (PVT) LTD",
      location: "Havelock Road, Colombo",
      period: "Oct 2025 – Present",
      current: true,
      responsibilities: [
        "Architected scalable web solutions using React.js & Node.js ecosystem",
        "Engineered RESTful APIs with Express.js for seamless data integration",
        "Implemented secure JWT authentication & Role-Based Access Control",
        "Optimized frontend performance, reducing load times by 40%",
        "Managed complex data relationships with MongoDB & MySQL",
        "Orchestrated CI/CD pipelines on AWS, Vercel, and Netlify"
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Lanka DealPartner (PVT) LTD",
      location: "Havelock Road, Colombo",
      period: "Apr 2025 – Oct 2025",
      current: false,
      responsibilities: [
        "Developed responsive UI components delivering <100ms interaction times",
        "Collaborated on modern design systems ensuring cross-browser capability",
        "Streamlined version control workflows using Git & GitHub",
        "Built dynamic features with Next.js and Vue.js frameworks"
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id='experience' ref={ref}>
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h5>My Career Path</h5>
        <h2>Professional Experience</h2>
      </motion.div>

      <motion.div
        className="experience__container"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="experience__timeline-wrapper">
          <div className="timeline-line"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`experience__card-wrapper ${exp.current ? 'current' : ''}`}
              variants={itemVariants}
            >
              {/* Timeline Dot */}
              <div className="timeline-dot">
                <div className="dot-inner"></div>
              </div>

              {/* Content Card */}
              <div className="experience__card glass-card">
                <div className="card-header">
                  <div className="header-icon">
                    <MdWork className="work-icon" />
                  </div>
                  <div className="header-content">
                    <div className="title-row">
                      <h3>{exp.title}</h3>
                      {exp.current && <span className="status-badge pulse-neon">Current</span>}
                    </div>
                    <h4>{exp.company}</h4>
                    <div className="meta-row">
                      <span className="location">{exp.location}</span>
                      <span className="separator">•</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <MdCheckCircle className="check-icon" />
                        <p>{resp}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience