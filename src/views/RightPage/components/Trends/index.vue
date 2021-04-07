<template>
  <div class="trends">
    <dv-border-box-12>
      <div class="left-top">
        <div class="d-flex pt-2 pl-2">
          <span style="color:#5cd9e8">
            <icon name="chart-area" />
          </span>
          <div class="d-flex">
            <span class="fs-xl text mx-2">案发态势</span>
          </div>
        </div>
        <div class="d-flex jc-center body-box">
          <div class="title-dis">
            <span>
              平均案发次数(小时):
              <span class="title-dis-keyword">123 次</span>
            </span>
            <span>
              案发峰值:
              <span class="title-dis-keyword">24 次</span>
            </span>
          </div>
        </div>
        <chart :cdata="cdata" />
      </div>
    </dv-border-box-12>
  </div>
</template>

<script>
import Chart from './chart.vue'

export default {
  components: { Chart },
  computed: {
    cdata () {
      return {
        timeList: ['9:00', '12:00', '15:00', '18:00', '21:00', '00:00'],
        data: [502.84, 205.97, 332.79, 281.55, 398.35, 214.02]
      }
      // return this.$store.state.data
    }
  }
}
</script>

<style lang="scss" scoped>
  .trends {
    position: relative;
    height: 4.375rem;
    width: 100%;
    .dv-border-box-12 {
      width: inherit;
      height: inherit;
      padding: 0.1875rem;
      .left-top {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        background-color: rgba(19, 25, 47, 0.6);
        .title-dis {
          width: 90%;
          margin-top: 0.1875rem;
          display: flex;
          justify-content: space-around;
          align-items: center;
          font-size: 0.2rem;
          color: #c0c9d2;
          &-keyword {
            padding-left: 0.125rem;
            color: #47dae8;
          }
        }
      }
    }
  }
</style>
