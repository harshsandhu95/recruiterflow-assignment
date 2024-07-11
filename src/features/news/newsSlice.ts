import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { formatISO } from "date-fns";

export interface News {
  id: string;
  title: string;
  body: string;
  dateTime?: string;
  deleted?: boolean;
}

const localStorageKey = "news";
const localNews = localStorage.getItem(localStorageKey);

const initialState: News[] = localNews !== null ? JSON.parse(localNews) : [];

export const newsSlice = createSlice({
  name: "News",
  initialState,
  reducers: {
    setNews(state, actions: PayloadAction<News[]>) {
      return (state = actions.payload);
    },
    addNews(state, actions: PayloadAction<News>) {
      state.push({
        dateTime: formatISO(new Date()),
        deleted: false,
        ...actions.payload,
      });

      localStorage.setItem(localStorageKey, JSON.stringify(state));
    },
    removeNews(state, actions: PayloadAction<string>) {
      const newArr = state.filter((item) => item.id !== actions.payload);
      localStorage.setItem(localStorageKey, JSON.stringify(newArr));
      return newArr;
    },
  },
});

export const { setNews, addNews, removeNews } = newsSlice.actions;
export default newsSlice.reducer;
