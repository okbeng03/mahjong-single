import Vue from 'vue'
import game from './game'

export default {
  start (state) {
    state.status = 'start'
    game.start()
  },

  startAfter (state, data) {
    state.order = data.order
    state.banker = data.banker
    state.bankerCount = data.bankerCount
    state.tileCount = data.tileCount
    state.current = data.banker

    data.players.forEach((tiles, i) => {
      Vue.set(state.players[i], 'handTiles', tiles)
      Vue.set(state.players[i], 'discardTiles', [])
      Vue.set(state.players[i], 'chowTiles', [])
      Vue.set(state.players[i], 'flowerTiles', [])
    })
  },

  finish (state, data) {
    state.status = 'finish'
    state.winner = data.winner

    data.players.forEach((player, i) => {
      Vue.set(state.players[i], 'bonus', player.bonus)
      Vue.set(state.players[i], 'score', player.score)
    })
  },

  draw (state) {
    state.status = 'draw'
  },

  claim (state, msg) {
    state.claim = msg
  },

  next (state, idx) {
    state.current = idx
  },

  tileCount (state, count) {
    state.tileCount = count
  },

  deal (state, tiles) {
    Vue.set(state.players[state.current], 'handTiles', tiles)
  },

  discard (state, tile) {
    const round = game.rounds.slice(-1)[0]
    const player = round.players[round.player]

    player.discard(tile)
  },

  discardAfter (state, player) {
    Vue.set(state.players[state.current], 'handTiles', player.handTiles)
    Vue.set(state.players[state.current], 'discardTiles', player.discardTiles)
  },

  check (state, player) {
    Vue.set(state.players[player.pick], 'melds', player.melds)
  },

  action (state, idx) {
    const round = game.rounds.slice(-1)[0]
    const player = round.players[0]

    player.claim(idx)
    Vue.set(state.players[state.current], 'melds', [])
  },

  chow (state, tiles) {
    Vue.set(state.players[state.current], 'chowTiles', tiles)
  },

  flower (state, tiles) {
    Vue.set(state.players[state.current], 'flowerTiles', tiles)
  },

  flowerWin (state, bonus) {
    Vue.set(state.players[state.current], 'bonus', bonus)
  }
}
