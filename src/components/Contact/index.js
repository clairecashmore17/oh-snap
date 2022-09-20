import React, { useState } from "react";

function ContactForm() {
  //add a hook to manage the form data and initialize the input fields to be clear
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  // deconstructing the formState object
  const { name, email, message } = formState;

  //defining handleChange for user name input
  function handleChange(e) {
    //We use ...(spread operator) in order to retain other key-value pairs
    // We can also target all the values with the e.target.name which will take either name, email, or message, making this function versatile
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  //Handle submit function for form
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }
  return (
    <section>
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        {/* inputs */}
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            defaultValue={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onChange={handleChange}
            rows="5"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
