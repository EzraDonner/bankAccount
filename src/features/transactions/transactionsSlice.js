import { createSlice } from "@reduxjs/toolkit";

/**
 * Each transaction is recorded as an object with the following properties.
 * @typedef Transaction
 * @property {"deposit"|"withdrawal"|"transfer/[name]"} type
 * @property {number} amount
 * @property {number} balance - The balance after the transaction is completed.
 */

// Set initial state to have a balance of 0 and an empty array of transactions.
const initialState = {
  balance: 0,
  history: [],
};

/* Adding reducers "deposit" and "transfer".
   - "deposit" increases the balance by the amount in the payload and records the transaction.
   - "transfer" decreases the balance by the amount in the payload and records the transaction.
*/

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    deposit: (state, { payload }) => {
      state.balance += payload.amount;
      state.history.push({
        type: "deposit",
        amount: payload.amount,
        balance: state.balance,
      });
    },
    withdrawal: (state, { payload }) => {
      state.balance -= payload.amount;
      state.history.push({
        type: "withdrawal",
        amount: payload.amount,
        balance: state.balance,
      });
    },
    transfer: (state, { payload }) => {
      state.balance -= payload.amount;
      state.history.push({
        type: `transfer/${payload.name}`,
        amount: payload.amount,
        balance: state.balance,
      });
    },
  },
});

export const { deposit, withdrawal, transfer } = transactionsSlice.actions;

export const selectBalance = (state) => state.transactions.balance;
export const selectHistory = (state) => state.transactions.history;

export default transactionsSlice.reducer;
