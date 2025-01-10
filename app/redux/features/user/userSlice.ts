import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  id: string;
  name: string;
  email: string;
  image: string;
  expires: string;
}
const initialState: initialStateInterface | null = null;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
