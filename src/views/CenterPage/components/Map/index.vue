<template>
  <div class="map">
    <chart :cdata="cdata" />
  </div>
</template>

<script>
import Chart from './chart.vue'

export default {
  components: { Chart },
  computed: {
    cdata () {
      return this.$store.state.data.caseMap.map(item => {
        return {
          name: `${item.district}走失老人`,
          value: [item.longitude, item.latitude, item],
          symbolSize: 6,
          itemStyle: {
            normal: {
              color: '#F58158'
            }
          }
        }
      })
    }
  }
}
</script>
