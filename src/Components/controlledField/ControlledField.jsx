import React, { useState } from "react";

const ControlledField = () => {

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    e.target.email.value = "";
    e.target.password.value = "";

    if(password.length < 6) {
      setError("Password must be 6 or more in length");
    } else {
      setError("");
    }
  };

  const handlePasswordOnChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // if (password.length < 6) {
    //   setError("Password must be 6 or more in length");
    // } else {
    //   setError("");
    // }
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
          defaultValue={password}
          onChange={handlePasswordOnChange}
          placeholder="Your Password"
          required
        />
        <p>
          <small className="font-bold text-red-500">{error}</small>
        </p>
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="flex flex-col items-center md:flex-row md:gap-10 md:justify-center">
        <p className="keyNote !mx-0">
          Jokon required use korba nah thokon submit button ei click korle
          submit hoi jabe and jokon required add korbo thokon empty input field
          submit kora jabe nah.
        </p>
        <p className="keyNote !mx-0">
          State use kore amra dynamically show kortha prabo error.
        </p>
      </div>
    </div>
  );
};

export default ControlledField;
