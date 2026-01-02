// store/index.ts
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // localStorage

import authReducer from "../features/auth/store/authSlice";
import orderReducer from "../features/orders/store/order.slices";
import { ordersApi } from "@/features/orders/api/orders.api";

// Auth persist konfiqurasiyası
const persistConfig = {
  key: "auth",
  storage,
  blacklist: ["accessToken", "refreshToken"], // sensitive məlumatlar saxlanmır
};

// Root reducer
const rootReducers = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  [ordersApi.reducerPath]: ordersApi.reducer, // RTK Query reducer
  orderUI: orderReducer,
});

// Store
export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/REGISTER",
        ],
      },
    }).concat(ordersApi.middleware), // RTK Query middleware əlavə olunur
    devTools: true,
});

// Persistor
export const persistor = persistStore(store);

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
