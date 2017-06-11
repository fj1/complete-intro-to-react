const DEFAULT_STATE = {
  searchTerm: ''
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  // must have state at start up
  // but, let's use es6 default params
  // state = state || DEFAULT_STATE

  switch (action.type) {
    default:
      return state
  }
}

export default rootReducer