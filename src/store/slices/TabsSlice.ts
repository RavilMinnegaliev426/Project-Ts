import { createSlice } from "@reduxjs/toolkit";
type TabsNubmer = {
  tabsNumber: number;
};
const initialState: TabsNubmer = {
  tabsNumber: 7,
};

const tabsNumberSlice = createSlice({
  name: "tabsNumberSlice",
  initialState,
  reducers: {
    tabsNumberState(state, action) {
      state.tabsNumber = action.payload;
    },
  },
});
export const { tabsNumberState } = tabsNumberSlice.actions;

export default tabsNumberSlice.reducer;
