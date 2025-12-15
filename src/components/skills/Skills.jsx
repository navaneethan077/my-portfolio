import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './skills.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    })

    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "React.js", level: "Experienced" },
                { name: "Next.js", level: "Experienced" },
                { name: "Vue.js", level: "Experienced" },
                { name: "JavaScript (ES6+)", level: "Experienced" },
                { name: "HTML5", level: "Experienced" },
                { name: "CSS3", level: "Experienced" },
                { name: "Bootstrap", level: "Experienced" },
                { name: "Responsive Web Design", level: "Experienced" }
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", level: "Experienced" },
                { name: "Express.js", level: "Experienced" },
                { name: "Python", level: "Intermediate" },
                { name: "Django", level: "Intermediate" },
                { name: "PHP", level: "Intermediate" }
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", level: "Experienced" },
                { name: "MongoDB", level: "Experienced" },
                { name: "Supabase", level: "Intermediate" }
            ]
        },
        {
            title: "Development Tools & DevOps",
            skills: [
                { name: "Git", level: "Experienced" },
                { name: "GitHub", level: "Experienced" },
                { name: "AWS", level: "Intermediate" },
                { name: "Vercel/Netlify", level: "Experienced" },
                { name: "WebStorm", level: "Experienced" },
                { name: "VS Code", level: "Experienced" },
                { name: "Cursor", level: "Experienced" },
                { name: "Postman", level: "Experienced" },
                { name: "Figma (UI/UX)", level: "Intermediate" }
            ]
        },
        {
            title: "AI & Emerging Tech",
            skills: [
                { name: "AI Prompt Engineering", level: "Intermediate" },
                { name: "Low-Code Platforms (Lovable)", level: "Intermediate" }
            ]
        }
    ]

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <section id='skills' ref={ref}>

            <motion.h5
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                What I Bring to the Table
            </motion.h5>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Technical Skills
            </motion.h2>

            <motion.div
                className="container skills__container"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={index}
                        className="skills__category glass-card"
                        variants={cardVariants}
                    >
                        <h3>{category.title}</h3>
                        <div className="skills__content">
                            {category.skills.map((skill, idx) => (
                                <article key={idx} className='skill__item'>
                                    <BsFillPatchCheckFill className='skill__icon' />
                                    <div>
                                        <h4>{skill.name}</h4>
                                        <small className={`skill-level ${skill.level.toLowerCase()}`}>
                                            {skill.level}
                                        </small>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills
