import { configureStore } from "@reduxjs/toolkit";
import newsSliceReducer from "@/features/news/newsSlice";

export const store = configureStore({
  reducer: {
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
