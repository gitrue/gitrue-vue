<template>
  <div id="app">
    <BeeHeader></BeeHeader>
    <router-view />
    <BeeFooter></BeeFooter>
  </div>
</template>
<script lang="ts">
import BeeHeader from "./components/common/BeeHeader.vue";
import BeeFooter from "./components/common/BeeFooter.vue";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: { BeeHeader, BeeFooter }
})
export default class App extends Vue {}
</script>

<style lang="less"></style>
