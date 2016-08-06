import config from '../config';
import axios from 'axios';

export function fetchCurrentUser() {
    return function(dispatch) {
        axios.get(`${config.API_URL}/u/current`).then(res => {
          if (res.data.status === 'ok') {
            dispatch({
              type: 'FETCHED_CURRENT_USER',
              currentUser: res.data.currentUser
            })
          } else {
            dispatch({
              type: 'UNFETCHED_CURRENT_USER',
              error: res.data.error
            })
          }
        }).catch(err => {
          dispatch({
            type: 'FETCH_CURRENT_USER_ERROR',
            error: err
          })
        })
    }
};
