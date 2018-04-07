<template>
  <div class="discard-tile">
    <Tile
      v-for="(tile, idx) in tiles"
      :key="`${tile}-${idx}`"
      :type="'normal'"
      :tile="tile"
    >
    </Tile>
  </div>
</template>

<script>
import Tile from './Tile.vue'

export default {
  props: {
    tiles: Array
  },
  components: {
    Tile
  }
}
</script>
