import React from "react";

const ControlledField = () => {
  return (
    <div>
      <h2 className="title">Controlled Field</h2>

      <form className="text-center">
        <input type="text" name="name" placeholder='Your Name' />
        <br />
        <input type="email" name="email" placeholder='Your email' />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ControlledField;
