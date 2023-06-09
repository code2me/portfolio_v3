import React, { useRef } from "react";
import "./contact.css";
import { SiGmail, SiLinkedin } from "react-icons/si";
import emailjs from "@emailjs/browser";
import toast from "@utils/toast";
import { useCursor } from "@hooks/useCursor";

const Contact = () => {
  const form = useRef();
  const { setIsHovering } = useCursor();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_JS_SERVICEID,
        import.meta.env.VITE_EMAIL_JS_TEMPLATEID,
        form.current,
        import.meta.env.VITE_EMAIL_JS_USERID
      )
      .then(
        () => {
          toast({
            message: "Thanks for the message. I will try to respond ASAP",
            type: "success",
            time: 5000,
          });
        },
        () => {
          toast({
            message: "OOPs.. Message is not sent",
            type: "error",
            time: 3000,
          });
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article>
            <div
              className="contact__option ambient-light"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <SiGmail className="contact__option-icon" />
              <h4>Email</h4>
              <a href="mailto:navneetbahuguna007@gmail.com">Send a message</a>
            </div>
          </article>
          <article>
            <div
              className="contact__option ambient-light"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <SiLinkedin className="contact__option-icon" />
              <h4>Linked In</h4>
              <a href="https://www.linkedin.com/in/cypherzz/">
                Connect with me
              </a>
            </div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Full Name" required />
          <input
            type="text"
            name="email"
            placeholder="Email"
            pattern="[^ @]*@[^ @]*"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="7"
            required
          ></textarea>
          <button
            type="submit"
            className="colorful-button"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
