import { createSlice } from "@reduxjs/toolkit";

interface initialStateInterface {
  id: string;
  name: string;
  email: string;
  image: string;
  token: string;
}
const initialState: initialStateInterface = {
  id: "",
  name: "",
  email: "",
  image: "",
  token: "",
};

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
