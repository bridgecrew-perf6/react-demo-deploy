import { configureStore } from "@reduxjs/toolkit";
import ToolkitSlice from "./toolkit/toolkit";

const store = configureStore({
  reducer: {
    toolkit: ToolkitSlice.reducer
  }
});

export default store;
