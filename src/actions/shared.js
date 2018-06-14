import { hideLoading, showLoading } from 'react-redux-loading'

import { setAuthedUser } from '../actions/authedUser'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({  }) => {

        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
      })
  }
}