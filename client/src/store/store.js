import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({ user: userSlice.reducer });

const persisitConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persisitConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializeableCheck: false,
    }),
});

export const persistor = persistStore(store);
