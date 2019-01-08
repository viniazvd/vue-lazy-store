<template>
  <div>
    <br /><br />

    <button @click="$router.push({ name: 'Detalhes da campanha' })">next</button>

    <br /><br />

    <button @click="userInc">+</button>
    <button @click="userDec">-</button>

    users: {{ users }}
  </div>
</template>

<script>
export default {
  name: 'home',

  computed: {
    users () {
      return (this.$coex.state.store1 && this.$coex.state.store1.users) || 0
      // return this.$coex.state.users
    }
  },

  methods: {
    userInc () {
      this.$coex.commit({ type: 'USER_INC', module: 'store1', state: 'users' })
      // this.$coex.commit({ type: 'USER_INC', state: 'users' })
    },

    userDec () {
      this.$coex.commit({ type: 'USER_DEC', module: 'store1', state: 'users' })
      // this.$coex.commit({ type: 'USER_DEC', state: 'users' })
    }
  }
}
</script>
