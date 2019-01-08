const state = {
  users: 5
}

const mutations = {
  USER_INC (state) {
    // state.users++
    state.store1.users++
  },

  USER_DEC (state) {
    // state.users--
    state.store1.users--
  }
}

export default { state, mutations }
