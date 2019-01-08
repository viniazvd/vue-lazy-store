export default function devtool (store, devtoolHook, subscribe) {
  if (!devtoolHook) return

  devtoolHook.emit('vuex:init', store)

  subscribe((mutation, state) => devtoolHook.emit('vuex:mutation', mutation, state))
}
