import React, { useContext } from "react";

import { GlobalContext } from "../appcontext/GlobalState";
import { numberWithCommas } from "../utils/format";

export const IncomeExpense = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="incexpe">
      <h3>Total Income/Expense</h3>
      <div className="income-expense">
        <div>
          <h4>Income</h4>
          <p className="cash in">{numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="cash out">{numberWithCommas(expense)}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};
