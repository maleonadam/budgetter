import React from "react";
import "./App.css";

import { Title } from "./components/Title";
import { TotalBalance } from "./components/TotalBalance";
import { IncomeExpense } from "./components/IncomeExpense";
import { AllTransactions } from "./components/AllTransactions";
import { NewTransaction } from "./components/NewTransaction";
import { GlobalProvider } from "./appcontext/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Title />
      <div className="container">
        <NewTransaction />

        <AllTransactions />

        <IncomeExpense />

        <TotalBalance />
      </div>
    </GlobalProvider>
  );
}
