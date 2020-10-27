import React, { useContext } from "react";

import { GlobalContext } from "../appcontext/GlobalState";
import { numberWithCommas } from "../utils/format";

export const TotalBalance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="totbal">
      <h4>Account Balance</h4>
      <h1
        className={
          total < 0 ? "total-balance-negative" : "total-balance-positive"
        }
      >
        {numberWithCommas(total)}
      </h1>
      <hr />
    </div>
  );
};
