/* eslint-disable prettier/prettier */
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import userReducer from "../features/user/userSlice"
import { api } from "../../src/components/api/apiSlice"


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  
  getDefaultMiddleware().concat(api.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
