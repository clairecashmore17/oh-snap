import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
  //Hook for determining error message
  const [errorMessage, setErrorMessage] = useState("");
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
    //validate email, name, or message
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    //We use ...(spread operator) in order to retain other key-value pairs
    // We can also target all the values with the e.target.name which will take either name, email, or message, making this function versatile
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
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
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            name="email"
            defaultValue={email}
            onBlur={handleChange}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            rows="5"
          />
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
