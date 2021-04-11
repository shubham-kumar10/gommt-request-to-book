import React, { useState } from "react";
import { useHistory } from "react-router";
import Button from "../components/Button";
import Input from "../components/Input";
import { addUser } from "../mock-apis/authentication.mock";

function Signup({ isHost }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    isHost: isHost,
  });

  function handleInputChange(event) {
    const labelName = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [labelName]: value });
  }

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    addUser({ user });
    history.push("/");
  }

  return (
    <div className="form">
      <h2>Sign Up</h2>
      <form>
        <Input
          label="Firstname"
          type="text"
          name="firstname"
          value={user.firstname}
          handleChange={handleInputChange}
        />
        <Input
          label="Lastname"
          type="text"
          name="lastname"
          value={user.lastname}
          handleChange={handleInputChange}
        />
        <Input
          label="Email"
          type="text"
          name="email"
          value={user.email}
          handleChange={handleInputChange}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={user.password}
          handleChange={handleInputChange}
        />
      </form>
      <Button onClick={handleSubmit} text="Sign Up" color="primary" size="lg" />
    </div>
  );
}

export default Signup;
