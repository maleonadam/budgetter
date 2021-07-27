import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Title } from "./components/Title";
import { TotalBalance } from "./components/TotalBalance";
import { IncomeExpense } from "./components/IncomeExpense";
import { AllTransactions } from "./components/AllTransactions";
import { NewTransaction } from "./components/NewTransaction";
import { GlobalProvider } from "./appcontext/GlobalState";
import { Title } from "./components/Title"; 
// import NewUser from "./components/NewUser";
// import LoginUser from "./components/LoginUser";
// import Nav from "./components/Nav";

export default function App() {
//   return (
//     <Router>
//       <Nav />

//       <Switch>
//         <Route path="/" exact component={Home} />

//         <Route path="/login" component={LoginUser} />

//         <Route path="/register" component={NewUser} />
//       </Switch>
//     </Router>
//   );

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

// const Home = () => {
  
// };
