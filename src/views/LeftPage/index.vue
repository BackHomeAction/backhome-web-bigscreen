<template>
  <div class="left-page">
    <dv-border-box-13>
      <movements />
    </dv-border-box-13>
  </div>
</template>

<script>
import Movements from './components/Movements/index.vue'

export default {
  components: { Movements }
}
</script>

<style lang="scss" scoped>
.left-page {
  padding-bottom: 0.15rem;
}
</style>
