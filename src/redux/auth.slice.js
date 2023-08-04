import { createSlice } from '@reduxjs/toolkit'


export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth : false 
  },
  reducers : {
    changeAuthState : (state , action)=> {
         state.isAuth = true 
    }
  },
})
export const { changeAuthState } = authSlice.actions
export default authSlice.reducer