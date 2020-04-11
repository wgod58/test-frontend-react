import store from './index'

export const setUser = (data) =>
  store.dispatch({ type: 'SET_USER', value: data })
