const initialState = { email: null }

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return { ...state, ...action.value }
    }
    default: {
      return state
    }
  }
}

export default userReducer
