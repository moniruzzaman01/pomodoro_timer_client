import { configureStore } from "@reduxjs/toolkit";
import uReducer from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: uReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
