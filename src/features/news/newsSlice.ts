import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formatISO } from "date-fns";

export interface NewsState {
  id?: string;
  title: string;
  description: string;
  dateTime?: string;
  deleted?: boolean;
}

const initialState: NewsState[] = [];

export const newsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {
    addNews(state, actions: PayloadAction<NewsState>) {
      state.push({
        dateTime: formatISO(new Date()),
        deleted: false,
        ...actions.payload,
      });
    },
    removeNews(state, actions: PayloadAction<string>) {
      state.findIndex((news) => news.id === actions.payload);
    },
  },
});

export const { addNews, removeNews } = newsSlice.actions;
export default newsSlice.reducer;
