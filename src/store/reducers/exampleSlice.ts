import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IExample } from './types'

const initialState: IExample = {
  name: '',
}

const exampleSlice = createSlice({
  name: 'contactForm',
  initialState,
  reducers: {
    getExampleName(state, action: PayloadAction<IExample>) {
      state.name = action.payload.name
    },
  },
})

export const { getExampleName } = exampleSlice.actions

export default exampleSlice.reducer
