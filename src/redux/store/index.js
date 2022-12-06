import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favouritesReducer"
import jobsReducer from "../reducers/jobsReducer"

//setting uo the local storage so data is not lost on page refresh
import localStorage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt"

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY
    })
  ]
}

const bigReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

export const persistor = persistStore(store)
