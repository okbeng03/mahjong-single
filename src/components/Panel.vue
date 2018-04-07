<template>
  <div class="panel">
    <div class="container">
      <div class="body">
        <bonus :pick="0"></bonus>
        <bonus :pick="1"></bonus>
        <bonus :pick="2"></bonus>
        <bonus :pick="3"></bonus>
      </div>
      <div class="footer">
        <button @click="start">{{ status === '' ? '开始' : '继续' }}</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Bonus from './Bonus.vue'

export default {
  computed: mapState({
    status: 'status'
  }),
  methods: {
    ...mapMutations([
      'start'
    ])
  },
  components: {
    Bonus
  }
}
</script>
