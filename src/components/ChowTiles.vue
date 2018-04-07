<template>
  <div class="chow-tile">
    <div v-if="!chowTiles.length"></div>
    <div class="group-container">
      <div class="group" v-for="(meld, i) in chowTiles" :key="i">
        <Tile
          v-for="(tile, idx) in meld.tiles"
          :key="`${tile}-${idx}`"
          :type="'normal'"
          :tile="tile"
        >
        </Tile>
        <div class="split"></div>
      </div>
    </div>
    <div class="flower-tiles">
      <Tile
        v-for="(tile, idx) in flowerTiles"
        :key="`${tile}-${idx}`"
        :type="'normal'"
        :tile="tile"
      >
      </Tile>
    </div>
  </div>
</template>

<script>
import Tile from './Tile.vue'

export default {
  props: {
    chowTiles: Array,
    flowerTiles: Array
  },
  components: {
    Tile
  }
}
</script>
