import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer } from "./Filter/filterSlice";
import { authReducer } from "./auth/slice";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const persistedReducer = persistReducer(persistConfig, authReducer)

const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
  auth: persistedReducer
}

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
    
export const persistor = persistStore(store)