export default function feedReducer(state = {
  feeds: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch (action.type) {
    case "FETCHING_FEEDS":
      return {...state, fetching: true}
    case "FETCHED_FEEDS":
      return {...state, fetching: false, fetched: true, feeds: action.feeds}
    case "UNFETCHED_FEEDS":
      return {...state, fetching: false, error: action.error};
    case "FETCH_FEEDS_ERROR":
      return {...state, fetching: false, error: action.error};
    default:
      return state
  }
}
