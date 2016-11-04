/**
* Created by zhangran on 16/11/2.
*/

<template>
  <div id="app">
    <DrawingBoard class="center"></DrawingBoard>
    <AdvanceBoard class="advance"></AdvanceBoard>
  </div>
</template>

<script type="text/ecmascript-6">
  import DrawingBoard from './components/DrawingBoard'
  import AdvanceBoard from './components/AdvanceBoard'

  export default {
    name: 'app',
    data() {
      return {
        msg: '我是谁！'
      }
    },
    mounted() {

    },
    methods: {},
    components: {
      DrawingBoard,
      AdvanceBoard
    }
  }
</script>


<style lang="less" rel="stylesheet/less">
*{
  margin: 0;
  padding: 0;
}
.center{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.advance{
  position: absolute;
  top: 0;
  bottom: 0;
  right: 100px;
  margin: auto;
}
</style>
