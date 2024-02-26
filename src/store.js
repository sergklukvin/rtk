import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import * as api from "./config";
import { themeReducer } from "./features/theme/theme-slice";
import { controlsReducer } from "./features/controls/controls-slice";
import { countriesReducer } from "./features/countries/countries-slice";
import { detailsReducer } from "./features/details/details-slice";

const rootReducer = combineReducers({
  theme: themeReducer,
  controls: controlsReducer,
  countries: countriesReducer,
  details: detailsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["theme"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          client: axios,
          api,
        },
      },
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
