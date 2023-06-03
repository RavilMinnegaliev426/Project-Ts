import { createSlice } from "@reduxjs/toolkit";

export interface CardAnswer {
  cardInfo: {
    id: number;
    sunset: string;
    sunrise: string;
    temp_max: number;
    temp_min: number;
    wind_max: number;
    weathercode: number;
    probability: number;
  };
  Answer: boolean;
  Days: string;
  city: string;
  time: string;
}

const initialState: CardAnswer = {
  cardInfo: {
    id: 0,
    sunset: "loading...",
    sunrise: "loading...",
    probability: 0,
    temp_max: 0,
    temp_min: 0,
    wind_max: 0,
    weathercode: 0,
  },
  Answer: false,
  Days: "",
  city: "loading..",
  time: "00:00:00",
};

const CardAnswerSlice = createSlice({
  name: "CardAnswerSlice",
  initialState,
  reducers: {
    setAnswerCardState: (state, action) => {
      state.cardInfo = action.payload;
    },
    setAnswerState: (state, action) => {
      state.Answer = action.payload;
    },
    setAnswerCardStateDays: (state, action) => {
      state.Days = action.payload;
    },
    setAnswerCardStateCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { setAnswerCardState } = CardAnswerSlice.actions;
export const { setAnswerState } = CardAnswerSlice.actions;
export const { setAnswerCardStateDays } = CardAnswerSlice.actions;
export const { setAnswerCardStateCity } = CardAnswerSlice.actions;

export default CardAnswerSlice.reducer;
