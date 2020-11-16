export const state = () => ({
    user: {}
  })
  
  export const mutations = {
    login(state, userData) {
      state.userData = userData
    },
    logout(state) {
      state.userData = null
      state.permissions = null
      state.menuAccess = null
    },
  }
  