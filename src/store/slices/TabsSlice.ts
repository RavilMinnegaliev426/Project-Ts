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
    tabslatitude(state, action) {
      state.latitude = action.payload;
    },
    tabslongitude(state, action) {
      state.longitude = action.payload;
    },
  },
});
export const { tabsNumberState } = tabsNumberSlice.actions;
export const { tabslatitude } = tabsNumberSlice.actions;
export const { tabslongitude } = tabsNumberSlice.actions;

export default tabsNumberSlice.reducer;
