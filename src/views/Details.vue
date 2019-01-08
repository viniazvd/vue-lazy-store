<template>
  <div>
    <br /><br />

    <button @click="coeInc">+</button>
    <button @click="coeDec">-</button>

    coes: {{ coes }}
  </div>
</template>

<script>
export default {
  name: 'detail',

  computed: {
    coes () {
      return (this.$coex.state.store2 && this.$coex.state.store2.coes) || 0
      // return this.$coex.state.coes
    }
  },

  methods: {
    coeInc () {
      this.$coex.commit({ type: 'COE_INC', module: 'store2', state: 'coes' })
    },

    coeDec () {
      this.$coex.commit({ type: 'COE_DEC', module: 'store2', state: 'coes' })
    }
  }
}
</script>
