export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"
export const GET_JOBS = "GET_JOBS"

export const addToFavouritesAction = (data) => {
  return { type: "ADD_TO_FAVOURITES", payload: data }
}
export const removeFromFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i
  }
}

export const getJobsAction = (query, jobList) => {
  return async (dispatch, getState) => {
    console.log("Fetching results from the API")
    let baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search="
    try {
      let resp = await fetch(baseEndpoint + query + "&limit=20")
      if (resp.ok) {
        let data = await resp.json()
        console.log(data)
        const jobList = data

        dispatch({
          type: GET_JOBS,
          payload: jobList
        })
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
}
