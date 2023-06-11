import { createSlice } from "@reduxjs/toolkit";
type TabsNubmer = {
  tabsNumber: number;
  latitude: number;
  longitude: number;
};
const initialState: TabsNubmer = {
  tabsNumber: 7,
  latitude: 56.32,
  longitude: 43.8,
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
