<template>
  <div class="melds-container">
    <div
      class="meld"
      v-for="(meld, i) in melds"
      :key="i"
      @click="onAction(i)"
    >
      <div class="type">{{ meld.type }}</div>
      <Tile v-for="(tile, idx) in meld.tiles" :key="`${tile}-${idx}`" :tile="tile"></Tile>
    </div>
  </div>
</template>

<script>
import Tile from './Tile.vue'

// const claimTypes = [
//   None,
//   Chow,           // 吃
//   Pong,           // 碰
//   Expose,         // 明杠
//   ExposeSelfDraw, // 明杠暗杠
//   ConcealedKong,  // 暗杠
//   Flower,         // 花胡
//   Win,            // 胡
//   SelfDraw,       // 自摸
//   Kong,           // 杠上开花
//   FirstFollow,    // 首张被跟
//   BaoPai          // 包牌
// ]

export default {
  props: {
    melds: Array,
    onAction: Function
  },
  components: {
    Tile
  }
}
</script>
