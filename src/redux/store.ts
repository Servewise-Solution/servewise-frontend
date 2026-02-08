import { combineReducers, configureStore } from "@reduxjs/toolkit";
import providerReducer from "../redux/slices/providerSlice";
import userReducer from "../redux/slices/userSlice";
import adminReducer from "../redux/slices/adminSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  provider: providerReducer,
  user: userReducer,
  admin: adminReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
