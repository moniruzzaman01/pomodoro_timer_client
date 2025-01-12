import { createSlice } from "@reduxjs/toolkit";

export interface initialStateInterface {
  userid: number | null;
  duration: number;
  timestamp: string;
  email: string;
}
const initialState: initialStateInterface[] = [];

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSession } = sessionSlice.actions;
export default sessionSlice.reducer;
