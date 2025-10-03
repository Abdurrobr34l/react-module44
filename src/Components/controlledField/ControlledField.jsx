import React from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.email.value = "";
    e.target.password.value = "";
  };

  return (
    <div>
      <h2 className="title">Controlled Field</h2>

      <form onSubmit={handleSubmit} className="text-center">
        <input type="email" name="email" placeholder="Your email" required />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Your Password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ControlledField;
