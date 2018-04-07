<template>
  <div class="order">
    <ul class="pick">
      <li
        v-for="(item, idx) in orders"
        :class="[
          banker === idx ? 'banker' : '',
          current === idx ? 'current' : ''
        ]"
        :key="idx">
        <span>{{ item }}</span>
      </li>
    </ul>
    <div class="count">{{ tileCount || '' }}</div>
    <ul class="banker-count">
      <li v-for="idx in bankerCount" :key="idx"></li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      orders: ['东', '南', '西', '北']
    }
  },
  computed: mapState({
    current: 'current',
    banker: 'banker',
    bankerCount: 'bankerCount',
    tileCount: 'tileCount'
  })
}
</script>
