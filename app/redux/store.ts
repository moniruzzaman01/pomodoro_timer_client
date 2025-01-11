import { configureStore } from "@reduxjs/toolkit";
import uReducer from "./features/user/userSlice";
import sReducer from "./features/session/sessionSlice";

export const store = configureStore({
  reducer: {
    user: uReducer,
    session: sReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
