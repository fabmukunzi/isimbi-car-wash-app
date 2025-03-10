import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./features/auth/login";

const store = configureStore({
    reducer: {
      login: loginReducer,
    },
  });
  
  export default store;