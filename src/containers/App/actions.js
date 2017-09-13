// Actions
const APP_CHECK_TOKEN = 'APP_CHECK_TOKEN';
const APP_TOKEN_EXPIRED = 'APP_TOKEN_EXPIRED';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function tokenExpired() {
  return {
    type: APP_TOKEN_EXPIRED,
    isAuthenticated: false,
    isFetching: false
  }
}
function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function checkToken(token, dispatch) {
  let options = {
    method: 'POST',
    headers: { 'Content-Type':'application/json' },
    body: JSON.stringify({
      id_token: token
    })
  };

  return fetch('/api/login/checkToken', options)
    .then(response => response.json()
      .then(response => ({ response })))
      .then(({ response }) =>  {
        if (response.expired) {
          localStorage.clear();
          dispatch(tokenExpired());
        }
    }).catch(err => console.log("Error: ", err))
}

export function logoutUser(dispatch) {
    dispatch(requestLogout())
    localStorage.removeItem('id_token')
    localStorage.removeItem('access_token')
    dispatch(receiveLogout())
}
