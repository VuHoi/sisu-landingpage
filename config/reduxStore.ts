import {
  OVERVIEW_API_REDUCER_KEY,
  overviewApi,
} from "@features/example/example.service";
import exampleReducer from "@features/example/example.slice";
import {
  combineReducers,
  configureStore,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";

// overview

const rootReducer = combineReducers({
  exampleReducer,
  [OVERVIEW_API_REDUCER_KEY]: overviewApi.reducer,
});

export const makeStore = (opts?: ConfigureStoreOptions["preloadedState"]) => {
  return configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware: any) => {
      return getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [],
        },
      }).concat([]);
    },
    ...opts,
  });
};

export const store = makeStore();


export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;
