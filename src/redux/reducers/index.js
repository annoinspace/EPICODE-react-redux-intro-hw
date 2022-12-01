const initialState = {
  favourites: {
    content: [] // the books will be put here
  }
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    //multiple cases will happen here, but we'll start with the default
    case "ADD_TO_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload]
        }
      }
    case "REMOVE_FROM_FAVOURITES":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter(
            (company, i) => i !== action.payload
          )
        }
      }

    default:
      return state
    // in the case of an unknown action.type, return the current state
    // without modifying anything
  }
}

export default mainReducer
