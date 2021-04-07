<template>
  <div class="right">
    <top-areas />
    <trends style="margin-top: 0.25rem" />
  </div>
</template>

<script>
import TopAreas from './components/TopAreas/index.vue'
import Trends from './components/Trends/index.vue'

export default {
  components: { TopAreas, Trends }
}
</script>
