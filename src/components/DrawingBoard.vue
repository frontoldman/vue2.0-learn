/**
* Created by zhangran on 16/11/4.
*/

<template>
  <div class="canvas">
    <Block v-for="i in row * col"
           :style="{
           left: ((i-1)%col * blockWidth) + 'px',
           top: (Math.floor((i-1)/row) * blockHeight) + 'px',
           width: blockWidth + 'px',
           height: blockHeight + 'px'}"></Block>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'DrawingBoard',
    data() {
      return {
        content: {
          width: 300,
          height: 300
        }
      }
    },
    computed: {
      ...mapState([
        'row',
        'col'
      ]),
      ...mapGetters([
        'matrix'
      ]),
      blockWidth() {
        return this.content.width / this.col
      },
      blockHeight() {
        return this.content.height / this.row
      }
    },
    mounted() {
      console.log(this.matrix)
    },
    methods: {},
    components: {}
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
  .canvas {
    width: 300px;
    height: 300px;
    border: 1px solid #ddd;
  }
</style>
