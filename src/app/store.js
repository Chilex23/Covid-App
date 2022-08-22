import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { covidApi } from '../redux/covidApi';

export const store = configureStore({
  reducer: {
    [covidApi.reducerPath]: covidApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(covidApi.middleware),
});
setupListeners(store.dispatch);
