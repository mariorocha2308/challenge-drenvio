import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  profile: {},
  error: {}
}

const rootSlice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      return {
        ...state,
        profile: action.payload
      }
    },
    setErrorFetch: (state, action) => {
      return {
        ...state,
        error: action.payload
      }
    }
  }
})

export const { setUserProfile, setErrorFetch } = rootSlice.actions
export default rootSlice.reducer 