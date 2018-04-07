import store from './index'

export default {
  game: {
    start (game) {
      const round = game.rounds.slice(-1)[0]
      const players = round.players.map(player => player.handTiles)

      store.commit('startAfter', {
        order: game.order,
        banker: game.banker,
        bankerCount: game.bankerCount,
        tileCount: round.wall.tiles.length,
        players
      })
    },

    finish (game) {
      const round = game.rounds.slice(-1)[0]
      const players = round.players.map(player => {
        return {
          bonus: player.bonus,
          score: player.score
        }
      })

      store.commit('finish', {
        winner: round.winner,
        players
      })
    },

    draw () {
      store.commit('draw')
    },

    firstFollow () {
      store.commit('claim', '首张被跟')
    },

    next (game) {
      const round = game.rounds.slice(-1)[0]

      store.commit('next', round.player)
    }
  },

  player: {
    deal (game) {
      const round = game.rounds.slice(-1)[0]
      const player = round.players[round.player]

      store.commit('deal', player.handTiles)
      store.commit('tileCount', round.wall.tiles.length)
    },

    draw (game) {
      const round = game.rounds.slice(-1)[0]
      const player = round.players[round.player]

      store.commit('deal', player.handTiles)
      store.commit('tileCount', round.wall.tiles.length)
    },

    discard (game) {
      const round = game.rounds.slice(-1)[0]
      const player = round.players[round.player]

      store.commit('discardAfter', {
        handTiles: player.handTiles,
        discardTiles: player.discardTiles
      })
    },

    check (game, pick) {
      const round = game.rounds.slice(-1)[0]
      const player = round.players[pick]

      store.commit('check', {
        pick: pick,
        melds: player.melds
      })
    },

    kong (game) {
      const round = game.rounds.slice(-1)[0]
      const player = round.players[round.player]

      store.commit('chow', player.chowTiles)
    },

    chow (game) {
      const round = game.rounds.slice(-1)[0]
      const player = round.players[round.player]

      store.commit('chow', player.chowTiles)
    },

    flower (game) {
      const round = game.rounds.slice(-1)[0]
      const player = round.players[round.player]

      store.commit('flower', player.flowerTiles)
      store.commit('flowerWin', player.bonus)
    }
  }
}
