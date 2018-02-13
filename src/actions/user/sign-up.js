import ApiClient from '../../api/client'
import { history } from '../../store'
// import {loading, loadError} from './loading'
// import loading from '../loading' // ???
// import loadError from '../loadError' // ???
export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'

// export const SIGN_IN = 'SIGN_IN'

const api = new ApiClient()

export const signUp = (user) => {
  return dispatch => {
    const path = 'users'

    return api.post(path, user)
      .then(res => {
        console.log(`sign up ${res.body.name} succesfully`)
        console.log('------')
        console.log(res.body)
        dispatch({ type: SIGN_UP, payload: res.body })
      })
  }
}

export const signIn = ({ email, password }) => {
  return dispatch => {
    const path = 'sessions'

    api.post(path, { email, password })
      .then(res => {
        console.log(res.body)
        api.storeToken(res.body.token)
        dispatch(fetchUserData())
      })
  }
}


export const fetchUserData = () => {
  return dispatch => {
    const path = 'users/me'

    api.get(path)
      .then(res => {
        console.log(res.body)
        dispatch({ type: SIGN_IN, payload: res.body })
        history.push(`/${res.body.name}`)
      })
  }
}
