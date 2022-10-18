import { configureStore } from '@reduxjs/toolkit'
import seriesReducer from './slices'

export const store = configureStore({
  reducer: {
    series: seriesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch