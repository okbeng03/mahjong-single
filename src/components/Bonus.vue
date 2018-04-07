<template>
  <div :class="['bonus']">
    <div class="info">
      <div :class="['avatar', `avatar-${pick}`]"></div>
      <div class="name">{{ name }}</div>
    </div>
    <div class="detail">
      <hand-tiles :tiles="handTiles" :is-my-round="isMyRound" :onDiscard="discard"></hand-tiles>
      <chow-tiles :chow-tiles="chowTiles" :flower-tiles="flowerTiles"></chow-tiles>
    </div>
    <div class="score">{{ score }}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import HandTiles from './HandTiles.vue'
import DiscardTiles from './DiscardTiles.vue'
import ChowTiles from './ChowTiles.vue'
import Melds from './Melds.vue'

export default {
  props: {
    pick: Number,
    isMyRound: Boolean
  },
  computed: mapState({
    name (state) {
      return state.players[this.pick].name
    },
    handTiles (state) {
      return state.players[this.pick].handTiles
    },
    chowTiles (state) {
      return state.players[this.pick].chowTiles
    },
    flowerTiles (state) {
      return state.players[this.pick].flowerTiles
    },
    bonus (state) {
      return state.players[this.pick].bonus
    },
    score (state) {
      return state.players[this.pick].score
    }
  }),
  components: {
    HandTiles,
    ChowTiles
  }
}
</script>
