export default function userReducer(state = {
  currentUser: null,
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCHING_CURRENT_USER":
      return {...state, fetching: true}
    case "FETCHED_CURRENT_USER":
      return {...state, fetching: false, fetched: true, currentUser: action.currentUser};
    case "UNFETCHED_CURRENT_USER":
      return {...state, fetching: false, fetched: false, error: action.error}
    case "FETCH_CURRENT_USER_ERROR":
      return {...state, fetching: false, fetched: false, error: action.error}
    default:
      return state
  }
}
