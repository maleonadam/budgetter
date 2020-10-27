import React, { useState, useContext } from "react";

import { GlobalContext } from "../appcontext/GlobalState";

export const NewTransaction = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    let newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      name,
      amount: +amount,
    };

    addTransaction(newTransaction);

    setName("");
    setAmount("");
  };

  return (
    <div className="newtra">
      <h3>Add Income/Expense</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="income/expense name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <b>Amount</b>
            <br />
            <span className="sub-title">
              use a negative (-) value for expense e.g -100
            </span>
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <hr />
    </div>
  );
};
