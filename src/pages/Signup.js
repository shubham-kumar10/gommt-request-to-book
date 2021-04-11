import React, { useState } from "react";
import Input from "../components/Input";

function Signup({ isHost }) {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    isHost: isHost,
  });

  const handleInputChange = (event) => {
    setUser({ ...user }, (event.target.name = event.target.value));
  };

  return (
    <div>
      <form>
        <Input
          label="Firstname"
          type="text"
          value={user.firstname}
          handleChange={handleInputChange}
        />
        <Input
          label="Lastname"
          type="text"
          value={user.lastname}
          handleChange={handleInputChange}
        />
        <Input
          label="Email"
          type="text"
          value={user.email}
          handleChange={handleInputChange}
        />
        <Input
          label="Email"
          type="password"
          value={user.password}
          handleChange={handleInputChange}
        />
      </form>
    </div>
  );
}

export default Signup;
