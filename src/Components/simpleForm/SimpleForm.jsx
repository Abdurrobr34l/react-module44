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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-2 border-2 rounded-xl"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          className="p-2 border-2 rounded-xl"
        />
        <br />
        <button type="submit">Submit Button</button>
      </form>
    </div>
  );
};

export default SimpleForm;
