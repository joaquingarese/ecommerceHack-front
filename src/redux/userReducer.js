import { createSlice } from "@reduxjs/toolkit";
// import { format } from "date-fns";

const initialState = {
  token: null,
  user: null,
};
// Agregar la data del store en el localStorage (usar libreria que paso marcus)
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setToken: {
      reducer: (state, action) => {
        return action.payload;
      },
    },
    logout(state, action) {
      state.token = null;
      state.user = null;
    },
  },
});

export const { setToken, logout } = userSlice.actions;

export default userSlice.reducer;
