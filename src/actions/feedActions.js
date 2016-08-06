import config from '../config';
import axios from 'axios';

export function fetchFeeds() {
  return function(dispatch) {
    axios.get(`${config.API_URL}/feed/list`).then(res => {
      if (res.data.status === 'ok') {
        dispatch({
          type: 'FETCHED_FEEDS',
          feeds: res.data.feeds
        })
      } else {
        dispatch({
          type: 'UNFETCHED_FEEDS',
          error: res.data.error
        })
      }
    }).catch(err => {
      dispatch({
        type: 'FETCH_FEEDS_ERROR',
        error: err
      })
    })
  }
}
