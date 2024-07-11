import { configureStore } from "@reduxjs/toolkit";
import newsSliceReducer from "@/features/news/newsSlice";
import { newsApi } from "./services/newsApi";

export const store = configureStore({
  reducer: {
    news: newsSliceReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(newsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
