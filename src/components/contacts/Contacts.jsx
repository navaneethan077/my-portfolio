import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.css';
import { MdOutlineEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y6y1i7p', 'template_yu1i8g5', form.current, 'Y7I7i5neEugW5OxV4')
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
          });

          setTimeout(() => {
            window.location.reload();
          }, 3500);
        },
        (error) => {
          toast.error(`Message failed: ${error.text}`, {
            position: 'top-right',
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <section id="contacts">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>navaneethansivakumaran@gmail.com</h5>
            <a href="mailto:navaneethansivakumaran@gmail.com">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contacts;
