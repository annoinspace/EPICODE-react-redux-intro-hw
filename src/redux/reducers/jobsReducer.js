import { GET_JOBS } from "../actions"

const initialState = {
  jobOptionsFromFetchArray: []
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobOptionsFromFetchArray: action.payload
        // jobList: [...state.content, ...action.payload]
      }
    default:
      return state
  }
}

export default jobsReducer
