import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import configReducer from "../features/config/configSlice"

export const store = configureStore({
  reducer: {
    config: configReducer,
  },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
