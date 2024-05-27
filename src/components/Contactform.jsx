import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_m5cmqly', 'template_mm758gb', form.current, {
      publicKey: 'HrZ-9kP7V5zM5Kd1B',
    })
    .then(
      (result) => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    e.target.reset()
  };
  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" id="user_name" name="user_name" required placeholder="Nom" />
      <input
        type="email"
        id="email"
        name="user_email"
        required
        placeholder="Email"
      />
      <input
        type="text"
        id="subject"
        name="subject"
        required
        placeholder="Sujet"
      />
      <textarea id="message" name="message" placeholder="Votre Message" required></textarea>
      <button type="submit">Envoyer</button>
    </form>
  );
}

export default ContactForm;
