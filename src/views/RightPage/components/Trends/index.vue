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
              <span class="title-dis-keyword">{{ averageTimes }} 次</span>
            </span>
            <span>
              案发峰值:
              <span class="title-dis-keyword">{{ maxTimes }} 次</span>
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
import dayjs from '@/utils/dayjs'

const HOURS = 24 // 时间维度

export default {
  components: { Chart },
  data () {
    return {
      timeList: [],
      countList: [],
      cdata: {}
    }
  },
  computed: {
    data () {
      return this.$store.state.data.developmentTrend
    },
    averageTimes () {
      return (this.countList.reduce((previous, current) => current + previous, 0) / HOURS).toFixed(2)
    },
    maxTimes () {
      return Math.max(...this.countList)
    }
  },
  watch: {
    data () {
      this.generageData()
    }
  },
  mounted () {
    this.generageData()
  },
  methods: {
    generageData () {
      this.timeList = []
      this.countList = []
      for (let i = 0; i < HOURS; i++) {
        const now = dayjs()
        const time = now.hour(now.hour() - i).minute(0).second(0).millisecond(0)
        this.timeList[i] = time.format('HH:mm')
        const ele = this.getTimeCount(time)
        this.countList[i] = ele ? ele.caseNum : 0
      }

      this.timeList.reverse()
      this.countList.reverse()

      this.cdata = {
        timeList: this.timeList,
        data: this.countList
      }
    },
    getTimeCount (time) {
      return this.data.find(ele => {
        return time.isSame(dayjs(ele.time))
      })
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
