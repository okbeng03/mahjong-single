<template>
  <div class="game">
    <panel v-if="status !== 'start'"></panel>
    <order></order>
    <player v-if="status === 'start'" :pick="0" :is-my-round="current === 0"></player>
    <player v-if="status === 'start'" :pick="1"></player>
    <player v-if="status === 'start'" :pick="2"></player>
    <player v-if="status === 'start'" :pick="3"></player>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Panel from './Panel.vue'
import Order from './Order.vue'
import Player from './Player.vue'

export default {
  computed: mapState({
    status: 'status',
    current: 'current'
  }),
  components: {
    Order,
    Panel,
    Player
  }
}
</script>
