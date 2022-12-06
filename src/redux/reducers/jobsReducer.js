import { GET_JOBS, GET_JOBS_LOADING } from "../actions"

const initialState = {
  jobOptionsFromFetchArray: [],
  isLoading: false
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobOptionsFromFetchArray: action.payload
      }
    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }

    default:
      return state
  }
}

export default jobsReducer
