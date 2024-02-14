import React, { FC, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

interface ContactProps {}

const Contact: FC<ContactProps> = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1xcvnhh",
        "template_ub8mrj7",
        form.current as HTMLFormElement,
        "cNxEhT6jNt73G6mSI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="Contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDescription">
        Please fill out the form below to discuss about any work opportunities
        and I will get back to you as soon as possible.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="from_name"
          className="name"
          placeholder="Your name"
        />
        <input
          type="email"
          name="from_email"
          className="email"
          placeholder="Your email"
        />
        <textarea
          className="msg"
          name="message"
          placeholder="Your message"
          rows={5}
        ></textarea>
        <button type="submit" className="submitBtn" value="send">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
