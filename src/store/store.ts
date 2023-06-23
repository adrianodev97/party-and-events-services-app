import { configureStore } from '@reduxjs/toolkit'

import exampleReducer from './reducers/exampleSlice'

export const storeRT = configureStore({
  reducer: {
    example: exampleReducer,
  },
})

export type RootState = ReturnType<typeof storeRT.getState>
export type AppDispatch = typeof storeRT.dispatch
