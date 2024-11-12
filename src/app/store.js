import { configureStore } from "@reduxjs/toolkit";
import transactionsSlice from "../features/transactions/transactionsSlice";
// Configure the store to use the reducer from the transactions slice.
const store = configureStore({
  reducer: {
    transactions: transactionsSlice,
  },
});

export default store;
