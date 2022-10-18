import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { SeriesType } from '../types/types'

export interface seriesState {
  series: SeriesType[]
  page: number
  searchedSeries: SeriesType[]
}

const initialState: seriesState = {
  series: [],
  page: 0,
  searchedSeries: []
}

export const moviesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<SeriesType[]>) => {
        let newSeries = [ ...state.series, ...action.payload]
        state.series = newSeries
    },
    incrementPage: (state, action:PayloadAction<number>) => {
        state.page += action.payload
    },
    setSearchedSeries:  (state, action: PayloadAction<SeriesType[]>) => {
        let newSeries = [...action.payload]
        state.searchedSeries = newSeries
    },
  },
})

export const { setMovies, setSearchedSeries, incrementPage } = moviesSlice.actions

export default moviesSlice.reducer