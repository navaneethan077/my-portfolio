import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AIChatbot.css';
import { BsChatDots } from 'react-icons/bs';
import { IoClose, IoSend } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa';

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            type: 'bot',
            text: "👋 Hi! I'm Nava's AI assistant. I can tell you about his experience, skills, projects, and more. What would you like to know?",
            timestamp: new Date()
        }
    ]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Portfolio knowledge base
    const portfolioData = {
        profile: {
            name: "Sivakumaran Navaneethan",
            email: "navaneethansivakumaran@gmail.com",
            phone: "+94 764822492",
            location: "Thanogdai, Karainagar, Jaffna, Sri Lanka",
            linkedin: "Navaneethan Sivakumaran",
            github: "navaneethan077",
            website: "navaneethan05.netlify.app",
            title: "Associate Software Engineer",
            summary: "Results-driven Associate Software Engineer with hands-on experience in building scalable, high-performance web applications using React.js, Next.js, and Vue.js. Strong in both frontend engineering and foundational backend development with Node.js."
        },
        education: [
            {
                institution: "Uva Wellassa University of Sri Lanka",
                degree: "Bachelor of Computer Science and Technology",
                period: "Sep 2021 – Present",
                cgpa: "3.1/4.0"
            },
            {
                institution: "J/Yarton College",
                degree: "Advanced Level (G.C.E A/L)",
                period: "Jan 2016 – Aug 2019",
                results: "B, 2 C (Physical Science stream)"
            }
        ],
        experience: [
            {
                title: "Associate Software Engineer",
                company: "Lanka DealPartner (PVT) LTD",
                location: "Havelock Road, Colombo",
                period: "Oct 2025 – Present",
                responsibilities: [
                    "Designed and maintained scalable web applications using React.js and Node.js",
                    "Built and integrated RESTful APIs using Express.js",
                    "Implemented authentication, authorization, and role-based access control",
                    "Optimized application performance and improved load times",
                    "Worked with MongoDB and MySQL for efficient data management",
                    "Deployed applications using AWS, Vercel, and Netlify",
                    "Participated in sprint planning, daily stand-ups, and code reviews"
                ]
            },
            {
                title: "Software Engineering Intern",
                company: "Lanka DealPartner (PVT) LTD",
                location: "Havelock Road, Colombo",
                period: "Apr 2025 – Oct 2025",
                responsibilities: [
                    "Developed responsive user interfaces using React.js to improve user engagement and usability",
                    "Collaborated with UI/UX designers to implement modern and intuitive designs with cross-browser compatibility",
                    "Used Git for version control and actively participated in Agile development cycles",
                    "Worked with Next.js and Vue.js focusing on component-based architecture and performance"
                ]
            }
        ],
        skills: {
            frontend: ["React.js", "Next.js", "Vue.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Responsive Web Design"],
            backend: ["Node.js", "Python", "Django", "PHP"],
            databases: ["MySQL", "MongoDB", "Supabase"],
            tools: ["Git", "GitHub", "AWS", "Vercel/Netlify", "WebStorm", "VS Code", "Cursor", "Postman", "Figma (UI/UX)"],
            emerging: ["AI Prompt Engineering", "Low-Code Platforms (Lovable)"]
        },
        softSkills: ["Problem Solving", "Critical Thinking", "Team Collaboration", "Agile Methodologies", "Effective Communication", "Quick Learning", "Time Management", "Self Motivation", "Attention to Detail", "Adaptability"],
        projects: [
            {
                name: "Final Year Research",
                period: "Oct 2024 - Present",
                description: "A Deep Learning Approach to Detecting and Classifying Mudras in Bharatanatyam Dance"
            },
            {
                name: "Eduzent (Group Project)",
                description: "Developed a comprehensive Institute Monitoring System as part of a university group project",
                technologies: ["React.js", "Node.js", "CSS", "Bootstrap", "MongoDB"],
                github: "Available on GitHub"
            },
            {
                name: "Bodimate (Group Project)",
                description: "Collaborating on an Online Boarding Booking System for university students",
                technologies: ["React.js", "Node.js", "CSS", "Bootstrap", "MongoDB"],
                github: "Available on GitHub"
            },
            {
                name: "Movie-API (Individual Project)",
                description: "Developed a CRUD application for managing movie data",
                technologies: ["React.js", "Node.js", "CSS", "Bootstrap", "MongoDB"],
                github: "Available on GitHub"
            }
        ],
        achievements: [
            "CODESTORM - YGC Innovation Festival 2023 - Participant"
        ],
        certifications: [
            "Front-End Development (CODL) - Moratuwa University",
            "Java (Basic) - HackerRank",
            "JavaScript (Basic) - HackerRank",
            "MERN Stack Fundamentals - Great Learning",
            "Introduction to MERN Stack - Simplilearn",
            "Introduction to Software Development - Simplilearn",
            "Develop a free website with WordPress - Coursera",
            "UI/UX for Beginners - Great Learning"
        ]
    };

    // AI response generator
    const generateResponse = (userMessage) => {
        const message = userMessage.toLowerCase();

        // Greeting responses
        if (message.match(/\b(hi|hello|hey|greetings)\b/)) {
            return `Hello! 👋 I'm here to help you learn about Sivakumaran Navaneethan. You can ask me about:\n\n• His experience and current role\n• Technical skills and expertise\n• Projects he's worked on\n• Education background\n• Certifications and achievements\n• Contact information\n\nWhat would you like to know?`;
        }

        // Contact information
        if (message.match(/\b(contact|email|phone|reach|linkedin|github)\b/)) {
            return `📧 **Contact Information:**\n\n• Email: ${portfolioData.profile.email}\n• Phone: ${portfolioData.profile.phone}\n• LinkedIn: ${portfolioData.profile.linkedin}\n• GitHub: @${portfolioData.profile.github}\n• Website: ${portfolioData.profile.website}\n• Location: ${portfolioData.profile.location}`;
        }

        // Experience
        if (message.match(/\b(experience|work|job|position|role|current)\b/)) {
            const currentRole = portfolioData.experience[0];
            return `💼 **Current Position:**\n\n${currentRole.title} at ${currentRole.company}\n${currentRole.period}\n\n**Key Responsibilities:**\n${currentRole.responsibilities.map(r => `• ${r}`).join('\n')}\n\nHe previously worked as a Software Engineering Intern at the same company from Apr 2025 – Oct 2025.`;
        }

        // Skills
        if (message.match(/\b(skill|technology|tech|stack|know|proficient)\b/)) {
            return `🛠️ **Technical Skills:**\n\n**Frontend:** ${portfolioData.skills.frontend.join(', ')}\n\n**Backend:** ${portfolioData.skills.backend.join(', ')}\n\n**Databases:** ${portfolioData.skills.databases.join(', ')}\n\n**Tools & DevOps:** ${portfolioData.skills.tools.join(', ')}\n\n**Emerging Tech:** ${portfolioData.skills.emerging.join(', ')}`;
        }

        // Projects
        if (message.match(/\b(project|built|developed|created|portfolio)\b/)) {
            return `🚀 **Projects:**\n\n${portfolioData.projects.map(p => {
                let projectText = `**${p.name}**\n${p.description}`;
                if (p.technologies) {
                    projectText += `\nTech: ${p.technologies.join(', ')}`;
                }
                return projectText;
            }).join('\n\n')}`;
        }

        // Education
        if (message.match(/\b(education|degree|university|study|student|cgpa|gpa)\b/)) {
            return `🎓 **Education:**\n\n**${portfolioData.education[0].institution}**\n${portfolioData.education[0].degree}\n${portfolioData.education[0].period}\nCGPA: ${portfolioData.education[0].cgpa}\n\n**${portfolioData.education[1].institution}**\n${portfolioData.education[1].degree}\n${portfolioData.education[1].period}\nResults: ${portfolioData.education[1].results}`;
        }

        // Certifications
        if (message.match(/\b(certification|certificate|certified|course)\b/)) {
            return `📜 **Certifications:**\n\n${portfolioData.certifications.map(c => `• ${c}`).join('\n')}`;
        }

        // Achievements
        if (message.match(/\b(achievement|award|accomplishment|recognition)\b/)) {
            return `🏆 **Achievements:**\n\n${portfolioData.achievements.map(a => `• ${a}`).join('\n')}`;
        }

        // Soft skills
        if (message.match(/\b(soft skill|personal|quality|qualities)\b/)) {
            return `💪 **Soft Skills:**\n\n${portfolioData.softSkills.join(' • ')}`;
        }

        // About/Summary
        if (message.match(/\b(about|who|summary|profile|tell me)\b/)) {
            return `👨‍💻 **About Sivakumaran Navaneethan:**\n\n${portfolioData.profile.summary}\n\n**Current Role:** ${portfolioData.profile.title} at Lanka DealPartner (PVT) LTD\n\n**Specializes in:** Full-stack development with React.js, Next.js, Vue.js, and Node.js\n\nWould you like to know more about his experience, skills, or projects?`;
        }

        // React/Frontend specific
        if (message.match(/\b(react|frontend|ui|ux|next|vue)\b/)) {
            return `⚛️ **Frontend Expertise:**\n\nNavaneethan is highly skilled in modern frontend development:\n\n• **React.js** - Building scalable, high-performance web applications\n• **Next.js** - Server-side rendering and static site generation\n• **Vue.js** - Component-based architecture\n• **Responsive Design** - Cross-browser compatibility and mobile-first approach\n• **UI/UX** - Collaborating with designers to implement intuitive interfaces\n\nHe's currently working as an Associate Software Engineer, focusing on building responsive user interfaces and optimizing application performance.`;
        }

        // Backend specific
        if (message.match(/\b(backend|api|node|database|mongodb|mysql)\b/)) {
            return `🔧 **Backend Expertise:**\n\n• **Node.js & Express.js** - Building and integrating RESTful APIs\n• **Authentication** - Implementing auth, authorization, and role-based access control\n• **Databases** - MongoDB and MySQL for efficient data management\n• **Python & Django** - Backend development experience\n• **Deployment** - AWS, Vercel, and Netlify\n\nHe has hands-on experience in building scalable backend systems and optimizing application performance.`;
        }

        // Default response with suggestions
        return `I'm not sure about that specific question, but I can help you with:\n\n• 💼 His work experience and current role\n• 🛠️ Technical skills (React, Node.js, etc.)\n• 🚀 Projects he's built\n• 🎓 Education and certifications\n• 📧 Contact information\n• 💪 Soft skills and achievements\n\nTry asking something like "Tell me about his experience" or "What are his skills?"`;
    };

    const handleSend = () => {
        if (!input.trim()) return;

        // Add user message
        const userMessage = {
            type: 'user',
            text: input,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsTyping(true);

        // Simulate typing delay
        setTimeout(() => {
            const botResponse = {
                type: 'bot',
                text: generateResponse(input),
                timestamp: new Date()
            };
            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Floating Chat Button */}
            <motion.button
                className="chatbot-toggle pulse-neon"
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {isOpen ? <IoClose size={24} /> : <BsChatDots size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window glass-card"
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Header */}
                        <div className="chatbot-header gradient-cyber">
                            <div className="chatbot-header-content">
                                <FaRobot className="chatbot-icon" />
                                <div>
                                    <h3>AI Portfolio Assistant</h3>
                                    <p>Ask me anything about Navaneethan!</p>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="chatbot-messages">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    className={`message ${msg.type}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="message-content">
                                        {msg.text.split('\n').map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>
                                    <span className="message-time">
                                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </span>
                                </motion.div>
                            ))}

                            {isTyping && (
                                <motion.div
                                    className="message bot typing"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                >
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="chatbot-input-container">
                            <input
                                type="text"
                                className="chatbot-input"
                                placeholder="Ask about experience, skills, projects..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <button
                                className="chatbot-send-btn"
                                onClick={handleSend}
                                disabled={!input.trim()}
                            >
                                <IoSend />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AIChatbot;
