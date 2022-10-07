import { configureStore } from '@reduxjs/toolkit'
import rootSlice  from './sliceReducer'

const store = configureStore({
  reducer: {
    rootSlice 
  }
})

export default store