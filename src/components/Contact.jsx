import React from "react";

function Contact() {
  return (
    <div className="odd-page page" id="contact">
      <div className="main-heading">How to reach Me</div>
      <div className="desc-text">
        Email:{" "}
        <a
          rel="noreferrer"
          href="mailto:kshitijkumar176@gmail.com"
          target="_blank"
        >
          kshitijkumar176@gmail.com
        </a>
      </div>
      <div className="desc-text">
        Phone: <a href="tel:965-018-1751">+91 9650181751</a>{" "}
      </div>
      <div className="desc-text">
        LinkedIn:{" "}
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/kshitij-kumar-17601/"
          target="_blank"
        >
          Kshitij
        </a>
        .
      </div>
    </div>
  );
}

export default Contact;
