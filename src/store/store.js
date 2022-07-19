import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/authentication/authSlice";
import { allPostsReducer } from "../features/post/postSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    allPosts: allPostsReducer
  },
});

export { store };
