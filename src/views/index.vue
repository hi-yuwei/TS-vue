<template>
  <div>
    <div class="box"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator"

  @Component
  export default class Index extends Vue {}
</script>

<style lang="scss" scoped>
  .box {
    width: 200px;
    height: 200px;

    background: red;
  }
</style>
