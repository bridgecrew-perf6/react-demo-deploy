import { createSlice } from "@reduxjs/toolkit";

const ToolkitSlice = createSlice({
  name: "toolkit",
  initialState: {
    nameSlice: "name",
    stateArray: "stateArray",
    stateString: "stateString",
    stateBoolean: "stateBoolean",
    actionArray: "actionArray",
    actionString: "actionString",
    actionBoolean: "actionBoolean",
    thunksName: "thunksName",
  },
  reducers: {
    newnameSlice(state, action) {
      if (action.payload === "" ) { return}
      state.nameSlice = action.payload;
    },
    newstateArray(state, action) {
      if (action.payload === "" ) { return}
      state.stateArray = action.payload;
    },
    newstateString(state, action) {
      if (action.payload === "" ) { return}
      state.stateString = action.payload;
    },
    newstateBoolean(state, action) {
      if (action.payload === "" ) { return}
      state.stateBoolean = action.payload;
    },
    newactionArray(state, action) {
      if (action.payload === "" ) { return}
      state.actionArray = action.payload;
    },
    newactionString(state, action) {
      if (action.payload === "" ) { return}
      state.actionString = action.payload;
    },
    newthunksName(state, action) {
      if (action.payload === "" ) { return}
      state.thunksName = action.payload;
    },
  },
});

export const toolkitActions = ToolkitSlice.actions;
export default ToolkitSlice;
