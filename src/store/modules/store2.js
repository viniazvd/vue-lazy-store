const state = {
  coes: 0
}

const mutations = {
  COE_INC (state) {
    // state.coes++
    state.store2.coes++
  },

  COE_DEC (state) {
    // state.coes--
    state.store2.coes--
  }
}

export default { state, mutations }
