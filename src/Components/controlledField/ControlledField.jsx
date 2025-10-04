import React, { useState } from "react";

const ControlledField = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.email.value = "";
    e.target.password.value = "";
  };

  const [password, setPassword] = useState("")

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <div>
      <h2 className="title">Controlled Field</h2>

      <form onSubmit={handleSubmit} className="text-center">
        <input type="email" name="email" placeholder="Your email" required />
        <br />
        <input
          type="password"
          name="password"
          defaultValue={password}
          onChange={handlePasswordOnChange}
          placeholder="Your Password"
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="flex flex-col items-center md:flex-row md:gap-10 md:justify-center">
        <p className="keyNote !mx-0">
        Jokon required use korba nah thokon submit button ei click korle submit
        hoi jabe and jokon required add korbo thokon empty input field submit kora
        jabe nah.
      </p>
      <p className="keyNote !mx-0">
        Jokon required use korba nah thokon submit button ei click korle submit
        hoi jabe and jokon submit add korbo thokon empty input field submit kora
        jabe nah.
      </p>
      </div>
    </div>
  );
};

export default ControlledField;
