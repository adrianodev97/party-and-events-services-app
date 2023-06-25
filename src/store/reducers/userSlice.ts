import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserAuthState } from './types'

const initialState: IUserAuthState = {
  id: '',
  email: '',
  isLogged: false,
}

const userAuthSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    getUserAuthentication(state, action: PayloadAction<IUserAuthState>) {
      console.log(state.email)
      state.id = action.payload.id
      state.email = action.payload.email
      state.isLogged = action.payload.isLogged
    },
  },
})

export const { getUserAuthentication } = userAuthSlice.actions

export default userAuthSlice.reducer
