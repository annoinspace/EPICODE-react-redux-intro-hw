export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"

export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"

export const addToFavouritesAction = (data) => {
  return { type: "ADD_TO_FAVOURITES", payload: data }
}
export const removeFromFavouritesAction = (i) => {
  return {
    type: REMOVE_FROM_FAVOURITES,
    payload: i
  }
}
