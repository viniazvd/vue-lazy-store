import devtool from './devtool'

import { getMutations, getStates, resolveSource, hasModules, getModuleName } from './services'

export default {
  install (Vue, { modules = {}, state = {}, mutations = {}, plugins }) {
    const __init = hasModules(modules) ? getStates(modules) : state
    const __vm = new Vue({
      data: {
        $$init: { ...__init },
        $$state: Object.create(null)
      }
    })
    let __state = __vm.$data.$$state
    const __mutations = hasModules(modules) ? getMutations(modules) : mutations
    const __subscribers = []
    const __devtoolHook = typeof window !== 'undefined' && window.__VUE_DEVTOOLS_GLOBAL_HOOK__

    const store = { state: __state, mutations: __mutations }

    plugins && plugins.forEach(plugin => plugin(store))

    if (Vue.config.devtools) devtool(store, __devtoolHook, subscribe)

    function commit ({ type, payload, module = '', state = '' }) {
      const mutation = resolveSource(__mutations, type)

      if (!mutation || !(module || state)) throw new Error('invalid mutation')

      if (hasModules(modules) && !(__state[module] && __state[module][state])) {
        __state[module] = {}
        __state[module][state] = __init[module][state]

        Vue.util.defineReactive(__state, module, __state[module])
      } else if (!hasModules(modules) && !__state[state]) {
        __state[state] = __init[state]

        Vue.util.defineReactive(__state, state, __init[state])
      }

      mutation(__state, payload)

      for (const sub of __subscribers) sub({ type, payload }, __state)
    }

    function subscribe (sub) {
      if (!sub.length) return

      __subscribers.push(sub)

      return () => __subscribers.splice(__subscribers.indexOf(sub), 1)
    }

    Object.defineProperty(Vue.prototype, '$coex', {
      get: () => ({ state: { ...__vm.$data.$$state }, commit })
    })
  }
}
