import React, { useContext } from "react";

import { GlobalContext } from "../appcontext/GlobalState";
import { numberWithCommas } from "../utils/format";

export const SingleTransaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "out" : "in"}>
      <span
        className={
          transaction.amount < 0 ? "delete-btn-expense" : "delete-btn-income"
        }
        onClick={() => deleteTransaction(transaction._id)}
      >
        X
      </span>
      <span>{transaction.name} </span>
      <span>
        {sign}
        {numberWithCommas(Math.abs(transaction.amount))}
      </span>
    </li>
  );
};
