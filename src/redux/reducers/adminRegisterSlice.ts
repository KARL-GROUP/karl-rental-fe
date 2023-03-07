import { createSlice } from "@reduxjs/toolkit";

//creating the initial state of data

const initialState = {
  email: "",
  password: ""
 
};

//creating signup slice

export const AdminRegisterSlice = createSlice({
  name: "registerSlice",
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const { setEmail, setPassword } = AdminRegisterSlice.actions;
export default AdminRegisterSlice.reducer;
