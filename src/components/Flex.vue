<template>
  <div class="game">
    <div v-for="(player, idx) in pick" :key="idx" :class="['player', `player-${idx + 1}`]">
      <div class="avatar"></div>
      <div class="hand"></div>
      <div class="chow"></div>
      <div class="discard"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pick: [1, 2, 3, 4]
    }
  }
}
</script>
