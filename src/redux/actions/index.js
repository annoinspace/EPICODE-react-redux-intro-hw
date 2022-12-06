export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"

export const addToFavouritesAction = (data) => {
  return { type: "ADD_TO_FAVOURITES", payload: data }
}

export const removeFromFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i
  }
}

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    dispatch({
      type: GET_JOBS_LOADING,
      payload: true
    })
    dispatch({
      type: GET_JOBS_ERROR,
      payload: false
    })
    console.log("Fetching results from the API")
    let baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
    try {
      let resp = await fetch(baseEndpoint + query + "&limit=20")
      if (resp.ok) {
        let data = await resp.json()

        const jobListFromFetch = data.data
        console.log("---data.data---", jobListFromFetch)

        dispatch({
          type: GET_JOBS,
          payload: jobListFromFetch
        })

        dispatch({
          type: GET_JOBS_LOADING,
          payload: false
        })
      } else {
        console.log("error")
        dispatch({
          type: GET_JOBS_ERROR,
          payload: true
        })
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: GET_JOBS_ERROR,
        payload: true
      })
    }
  }
}
