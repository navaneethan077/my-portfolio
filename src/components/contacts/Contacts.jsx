import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const form = useRef();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const [shake, setShake] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y6y1i7p', 'template_yu1i8g5', form.current, 'Y7I7i5neEugW5OxV4')
      .then(
        () => {
          toast.success('🎉 Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            style: {
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-primary)',
              color: 'var(--color-white)',
            }
          });

          setTimeout(() => {
            window.location.reload();
          }, 3500);
        },
        (error) => {
          setShake(true);
          setTimeout(() => setShake(false), 500);

          toast.error(`❌ Message failed: ${error.text}`, {
            position: 'top-right',
            autoClose: 3000,
            style: {
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-accent)',
              color: 'var(--color-white)',
            }
          });
        }
      );
  };

  return (
    <section id="contacts" ref={ref}>
      <motion.h5
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Get in touch
      </motion.h5>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Contact Me
      </motion.h2>

      <div className="container contact__container">
        <motion.div
          className="contact__options"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <article className="contact__option glass-card neon-glow-hover">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>navaneethansivakumaran@gmail.com</h5>
            <a href="mailto:navaneethansivakumaran@gmail.com">Send a message</a>
          </article>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className={shake ? 'shake' : ''}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary pulse-neon">
            Send Message
          </button>
        </motion.form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contacts;
