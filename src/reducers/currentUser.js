import { SIGN_IN } from  '../actions/user/sign-up'



export default (state = null, { type, payload }) => {
  switch(type) {
    case SIGN_IN:
    const currentUser = { ...payload }
    return currentUser
    default :
     return state
  }
}










// const CURRENT_USER_KEY = 'currentUserRecipes'
// const currentUserFromLocalStorage = JSON.parse(
//  window.localStorage.getItem(CURRENT_USER_KEY) || 'null'
// )
//
// export default (state = currentUserFromLocalStorage, { type, payload } = {}) => {
//  switch (type) {
//    case SIGN_IN :
//      const currentUser = { ...payload }
//      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser))
//      return currentUser
//
//    // case USER_SIGNED_OUT :
//    //   window.localStorage.removeItem(CURRENT_USER_KEY)
//    //   return null
//
//    default :
//      return state
//  }
// }
