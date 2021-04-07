<template>
  <div class="center">
    <map-chart />
    <numbers />
  </div>
</template>

<script>
import MapChart from './components/Map/index.vue'
import Numbers from './components/Numbers/index.vue'

export default {
  components: { MapChart, Numbers }
}
</script>

<style lang="scss" scoped>
.center {
  margin-top: 0.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
