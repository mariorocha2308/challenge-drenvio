import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  list: []
}

const rootSlice = createSlice({
  name: 'rootSlice',
  initialState,
  reducers: {
  },
})

export const { } = rootSlice.actions
export default rootSlice.reducer 