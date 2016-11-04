<template>
  <div class="block">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Block',
    data() {
      return {}
    },
    mounted() {

    },
    methods: {},
    components: {}
  }
</script>


<style lang="less" rel="stylesheet/less" scoped>
.block{
  background-color: #cdcdcd;
  position: absolute;
}
</style>