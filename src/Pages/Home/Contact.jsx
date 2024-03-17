import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [messageFrom, setMesageFrom] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_y2y7o5a", "template_8soiw17", form.current, {
        publicKey: "",
      })
      .then(
        () => {
          alert("Message Sent Successfully!");
          setMesageFrom({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Extend your hand in digital discourse; reach out to me by filling out
          the form..
        </p>
      </div>
      <form
        className="contact--form--container"
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name *</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_name"
              id="first-name"
              required
              value={messageFrom.firstName}
              onChange={(e) =>
                setMesageFrom({ ...messageFrom, firstName: e.target.value })
              }
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="from_Lname"
              id="last-name"
              value={messageFrom.lastName}
              onChange={(e) =>
                setMesageFrom({ ...messageFrom, lastName: e.target.value })
              }
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email *</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_email"
              id="email"
              required
              value={messageFrom.email}
              onChange={(e) =>
                setMesageFrom({ ...messageFrom, email: e.target.value })
              }
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone-Number</span>
            <input
              type="number"
              className="contact--input text-md"
              name="from_number"
              id="phone-number"
              value={messageFrom.phone}
              onChange={(e) =>
                setMesageFrom({ ...messageFrom, phone: e.target.value })
              }
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message *</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name="message"
            required
            value={messageFrom.message}
            onChange={(e) =>
              setMesageFrom({ ...messageFrom, message: e.target.value })
            }
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
