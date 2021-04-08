<template>
  <div class="percents">
    <dv-border-box-13>
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-pie" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">平台指数</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <chart
          v-for="item in cdata"
          :key="item.title"
          :cdata="item"
        />
      </div>
    </dv-border-box-13>
  </div>
</template>

<script>
import Chart from './chart.vue'

export default {
  components: { Chart },
  computed: {
    cdata () {
      const data = this.$store.state.data
      return [
        {
          title: '结案占比',
          number: data.caseNum ? Math.round(data.finishCaseNum / data.caseNum * 100) : 0
        },
        {
          title: '归档占比',
          number: data.caseNum ? Math.round(data.overTimeCaseNum / data.caseNum * 100) : 0
        },
        {
          title: '在线志愿者',
          number: data.registerVolunteerNum ? Math.round(data.onlineVolunteerNum / data.registerVolunteerNum * 100) : 0
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.percents {
  position: relative;
  height: 3.35rem;
  width: 100%;
  .dv-border-box-13 {
    padding: 0.25rem 0.1875rem 0.1875rem;

    .body-box {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
