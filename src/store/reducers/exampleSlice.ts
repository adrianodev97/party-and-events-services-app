import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IExample } from './types'

const initialState: IExample = {
  id: '',
  email: '',
  isLogged: false,
}

const exampleSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    getExampleName(state, action: PayloadAction<IExample>) {
      state.id = action.payload.id
      state.email = action.payload.email
      state.isLogged = action.payload.isLogged
    },
  },
})

export const { getExampleName } = exampleSlice.actions

export default exampleSlice.reducer
