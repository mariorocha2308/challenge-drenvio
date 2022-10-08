import { createAsyncThunk } from "@reduxjs/toolkit"
import { setUserProfile, setErrorFetch } from './rootReducer'

export const getRandomUserQuery = createAsyncThunk(
  'rootSlice/getRandomUserQuery',
  (input, { dispatch }) => {
    fetch(`https://randomuser.me/api`)
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        dispatch(setErrorFetch(result.erro))
        return;
      }
      dispatch(setUserProfile(result.results[0]))
    })
    .catch(err => console.log(err))
  }
)