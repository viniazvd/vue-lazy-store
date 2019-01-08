import Vue from 'vue'
import App from './App.vue'

import router from './router'

import coex from './lib'
import * as modules from './store/modules'

Vue.use(coex, { modules })
// Vue.use(coex, {
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

Vue.config.productionTip = false

new Vue({ router, render: h => h(App) }).$mount('#app')
