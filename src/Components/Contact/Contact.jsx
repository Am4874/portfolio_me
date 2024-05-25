import React from "react";
import contact from "../../data/contact.json";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section>
      <div className="text-xl font-medium text-center flex flex-col gap-4">
        <h2>Contact Me</h2>
        <p>Email: {contact.email}</p>
        {/* <p>Phone: {contact.phone}</p> */}
        <p>Address: {contact.address}</p>
        <p>
          <Link to={contact.Github}>Github</Link>
        </p>
        <p>
          <Link to={contact.Linkedin}>Linkedin</Link>
        </p>
        <p>
          <Link to={contact.X}>X</Link>
        </p>
        <p>
          <Link to={contact.Instagram}>Instagram</Link>
        </p>
      </div>
    </section>
  );
}

export default Contact;
