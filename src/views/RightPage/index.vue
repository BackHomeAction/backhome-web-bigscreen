<template>
  <div class="right">
    <top-areas />
    <trends style="margin-top: 0.45rem" />
    <percents style="margin-top: 0.5rem" />
  </div>
</template>

<script>
import TopAreas from './components/TopAreas/index.vue'
import Trends from './components/Trends/index.vue'
import Percents from './components/Percents/index.vue'

export default {
  components: { TopAreas, Trends, Percents }
}
</script>
