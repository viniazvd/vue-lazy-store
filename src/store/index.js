// import Vue from 'vue'
import Store from '../coex'

import * as modules from './modules'

const store = Store({ modules })
// const store = Store({
//   state: { users: 5, coes: 0 },

//   mutations: {
//     USER_INC (state) {
//       state.users++
//     },

//     USER_DEC (state) {
//       state.users--
//     },

//     COE_INC (state) {
//       state.coes++
//     },

//     COE_DEC (state) {
//       state.coes--
//     }
//   }
// })

export default store

// import Vue from 'vue'
// import Vuex from 'vuex'

// import * as modules from './modules'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//   modules
// })
