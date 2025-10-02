import React from "react";

const SimpleForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default reload
    console.log(e.target.name.value, e.target.email.value);
    e.target.name.value = ""; // After submit the input to get empty
    e.target.email.value = ""; // After submit the input to get empty
  };

  return (
    <div>
      <h2 className="title">Simple Form</h2>
      <form onSubmit={handleSubmit} className="text-center">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
        />
        <br />
        <button type="submit">Submit Button</button>
      </form>

      <p className="keyNote">How to take an value from input is shown in this page, check console before clicking the cubmit button. Check SimpleForm file to understand it</p>
    </div>
  );
};

export default SimpleForm;
