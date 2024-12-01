import React from "react";
import { Link } from "react-router-dom";
import { mail, github, linkedin, X, instagram } from "../../assets";

const contacts = [
  {
    name: "Gmail",
    link: "mailto:ambedkaramit176@gmail.com",
    image: mail,
  },
  {
    name: "X.com",
    link: "https://x.com/AmitAmbedkar14",
    image: X,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/amitto_001",
    image: instagram,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/amit-ambedkar",
    image: linkedin,
  },
  {
    name: "Github",
    link: "https://github.com/Am4874",
    image: github,
  },
];

function Contact() {
  return (
    <section>
      <div className="flex gap-4 rounded-lg">
        {contacts.map((contact) => {
          return (
            <p
              className=" dark:bg-slate-500 rounded-lg hover:cursor-pointer"
              key={contact.name}
            >
              <Link to={contact.link} target="_blank">
                <img
                  className="w-11 hover:translate-y-1"
                  src={contact.image}
                  alt={contact.name}
                />
              </Link>
            </p>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
