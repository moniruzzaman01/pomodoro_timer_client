import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  userid: number | null;
  duration: number;
  timestamp: string;
  email: string;
}
const initialState: initialStateInterface[] | null = null;

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
