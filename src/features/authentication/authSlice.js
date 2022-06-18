import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? null,
  authToken: localStorage.getItem("authToken") || "",
  status: null,
  error: null,
};

const loginHandler = createAsyncThunk(
  "user/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/login", user);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const signupHandler = createAsyncThunk(
  "user/signup",
  async (userDeatils, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/api/auth/signup", userDeatils);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutHandler: (state) => {
      state.user = null;
      state.authToken = "";
      localStorage.removeItem("authToken"), localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [loginHandler.pending]: (state) => {
      state.status = "loading";
    },
    [loginHandler.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.user = payload.foundUser;
      state.authToken = payload.encodedToken;
    },
    [loginHandler.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload;

    },
    [signupHandler.pending]: (state) => {
      state.status = "loading";
    },
    [signupHandler.fulfilled]: (state, { payload }) => {
      state.status = "success";
      state.user = payload.createdUser;
      state.authToken = payload.encodedToken;
    },
    [signupHandler.rejected]: (state, { payload }) => {
      state.status = "rejected";
      state.error = payload.error;
      toast.error(state.error);
    },
  },
});

export { loginHandler, signupHandler };
export const { logoutHandler } = authSlice.actions;
export const authReducer = authSlice.reducer;