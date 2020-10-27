import React, { createContext, useReducer } from "react";
import axios from "axios";

import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getTransactions() {
    try {
      const res = await axios.get("/api/alltransactions");
      dispatch({ type: "GET_TRANSACTIONS", payload: res.data.data });
    } catch (error) {
      dispatch({
        type: "GET_TRANSACTIONS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/alltransactions/${id}`);
      dispatch({ type: "DELETE_TRANSACTION", payload: id });
    } catch (error) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/alltransactions", transaction, config);
      dispatch({ type: "ADD_TRANSACTION", payload: res.data.data });
    } catch (error) {
      dispatch({
        type: "TRANSACTIONS_ERROR",
        payload: error.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        error: state.error,
        loading: state.loading,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
