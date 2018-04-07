<template>
  <div :class="['player', `player-${pick}`]">
    <div :class="['avatar', `avatar-${pick}`]"></div>
    <hand-tiles :tiles="handTiles" :is-my-round="isMyRound" :onDiscard="discard"></hand-tiles>
    <chow-tiles :chow-tiles="chowTiles" :flower-tiles="flowerTiles"></chow-tiles>
    <discard-tiles :tiles="discardTiles"></discard-tiles>
    <melds v-if="pick === 0 && melds.length" :melds="melds" :onAction="action"></melds>
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
    discardTiles (state) {
      return state.players[this.pick].discardTiles
    },
    flowerTiles (state) {
      return state.players[this.pick].flowerTiles
    },
    melds (state) {
      return state.players[this.pick].melds
    },
    bonus (state) {
      return state.players[this.pick].bonus
    },
    score (state) {
      return state.players[this.pick].score
    }
  }),
  methods: {
    ...mapMutations([
      'discard',
      'action'
    ])
  },
  components: {
    HandTiles,
    DiscardTiles,
    ChowTiles,
    Melds
  }
}
</script>
