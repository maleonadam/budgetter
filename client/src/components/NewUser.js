import React, { useState, useContext } from "react";

import { GlobalContext } from "../appcontext/GlobalState";

export default function NewUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { addUser } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: Math.floor(Math.random() * 100000000),
      name,
      email,
      password,
    };

    addUser(newUser);

    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="newtra">
      <h3>Sign Up</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="enter name..."
          />
        </div>
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
        <button className="btn">Register</button>
      </form>
      <hr />
    </div>
  );
}
