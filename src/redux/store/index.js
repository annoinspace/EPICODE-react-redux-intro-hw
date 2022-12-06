import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favouritesReducer"
import jobsReducer from "../reducers/jobsReducer"

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
