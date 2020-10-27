import React, { useContext, useEffect } from "react";

import { GlobalContext } from "../appcontext/GlobalState";
import { SingleTransaction } from "./SingleTransaction";

export const AllTransactions = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  console.log(transactions);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="alltra">
      <h3>Records</h3>
      <ul className="transactions">
        {transactions.map((transaction) => (
          <SingleTransaction key={transaction._id} transaction={transaction} />
        ))}
      </ul>
      <hr />
    </div>
  );
};
