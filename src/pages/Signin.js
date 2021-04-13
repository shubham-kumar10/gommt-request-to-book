import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import Button from '../components/Button';
import Input from '../components/Input';
import { userContext } from '../context/UserContext';
import { authenticate } from '../mock-apis/authentication.mock';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(userContext);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    const user = authenticate(email, password);
    if (user) {
      setUser(user);
      history.push('/');
    }
  }

  return (
    <div className="form signin">
      <h2>Login</h2>
      <form className="signin__form">
        <Input
          label="Email"
          type="text"
          value={email}
          handleChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <Button onClick={handleSubmit} text="Sign In" color="primary" size="lg" />
    </div>
  );
}

export default Signin;
