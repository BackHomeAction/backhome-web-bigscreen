<template>
  <div class="top-areas">
    <div
      v-if="cdata.caseTop && cdata.caseTop.length"
      class="d-flex pt-2 pl-2"
    >
      <span style="color:#5cd9e8">
        <icon name="chart-bar" />
      </span>
      <div class="d-flex">
        <span class="fs-xl text mx-2">案发数量 Top5</span>
      </div>
    </div>
    <div class="d-flex jc-center body-box">
      <chart
        v-if="cdata.caseTop && cdata.caseTop.length"
        :cdata="cdata"
      />
    </div>
  </div>
</template>

<script>
import Chart from './chart.vue'

export default {
  components: { Chart },
  computed: {
    cdata () {
      return this.$store.state.data
    }
  }
}
</script>

<style lang="scss" scoped>
.top-areas {
  padding: 0.2rem;
  height: 3.5rem;
  border-radius: 0.0625rem;
  .bg-color-black {
    height: 4.8125rem;
    border-radius: 0.125rem;
  }
  .text {
    color: #c3cbde;
  }
  .body-box {
    border-radius: 0.125rem;
    overflow: hidden;
  }
}

</style>
