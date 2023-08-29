import React from "react";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("successfully submitted");
  };

  return (
    <div className="container p-5">
      <div className="row">
        <form className="contact-form col-md-6 text-primary" onSubmit={handleSubmit}>
          <h3 className="color-change">Want to receive our newsletter?</h3>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea className="form-control" id="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="col-md-6 text-center container">
          <h3 className="color-change">Contact Us</h3>
          <ul className="row gx-5 list-unstyled h5">
            <li className="col-md-6">
              © www.mysyllabux.com, All rights reserved. Syllabux Learning Solutions Limited 12 Thomas Street, New Oko Oba, Lagos, Nigeria.
            </li>
            <li className="col-md-6">
              We'd love to hear from you +234 901 905 7108 hello@mysyllabux.com
            </li>
            <li className="col-md-6">Go to parent login</li>
            <li className="col-md-6">Go to student login</li>
            <li className="col-md-6">Go to school login</li>
            <li className="col-md-6">
              You can contact us on <a href="https://instagram.com">Instagram</a>
            </li>
            <li className="col-md-6">
              You can contact us on <a href="https://facebook.com">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
