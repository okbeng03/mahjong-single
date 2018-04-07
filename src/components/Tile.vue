<template>
  <div :class="['tile', `tile-${type}`, `tile-${tile}`, willDiscard ? 'has-sure' : '']" @click="click"></div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    tile: Number,
    index: Number,
    willDiscard: Boolean,
    onClick: Function
  },
  methods: {
    click: function () {
      if (typeof this.onClick === 'undefined') {
        return
      }

      this.onClick(this.index)
    }
  }
}
</script>
