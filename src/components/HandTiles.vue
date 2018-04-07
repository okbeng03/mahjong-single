<template>
  <div :class="['hand-tile', isMyRound ? 'my-hand-tile' : '']">
    <template v-if="isMyRound">
      <Tile
        v-for="(tile, idx) in tiles"
        :key="`${tile}-${idx}`"
        :type="'normal'"
        :tile="tile"
        :onClick="onClick"
        :index="idx"
        :will-discard="willDiscardTile === idx"
      >
      </Tile>
    </template>
    <template v-else>
      <Tile
        v-for="(tile, idx) in tiles"
        :key="`${tile}-${idx}`"
        :type="'normal'"
        :tile="tile"
      >
      </Tile>
    </template>
  </div>
</template>

<script>
import Tile from './Tile.vue'

export default {
  data: function () {
    return {
      willDiscardTile: -1
    }
  },
  props: {
    tiles: Array,
    isMyRound: Boolean,
    onDiscard: {
      type: Function
    }
  },
  methods: {
    onClick: function (idx) {
      if (this.willDiscardTile === idx) {
        this.onDiscard(this.tiles.slice(idx, idx + 1)[0])
        this.willDiscardTile = -1
        return
      }

      this.willDiscardTile = idx
    }
  },
  components: {
    Tile
  }
}
</script>
