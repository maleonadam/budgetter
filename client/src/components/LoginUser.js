import React, { useState, useContext } from "react";

import { GlobalContext } from "../appcontext/GlobalState";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      email,
      password,
    };

    addUser(newUser);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h3>Sign In</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter email..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="text"
            data-test="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password..."
          />
        </div>
        <button className="btn">Login</button>
      </form>
      <hr />
    </div>
  );
}
