<template>
  <div id="index">
    <dv-full-screen-container class="bg">
      <dv-loading v-if="loading">
        Loading...
      </dv-loading>
      <div
        v-else
        class="host-body"
      >
        <div class="d-flex jc-center">
          <dv-decoration-10 style="width:33.3%;height:.0625rem;" />
          <div class="d-flex jc-center">
            <dv-decoration-8
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
            <div class="title">
              <span class="title-text">归家行动 数据大屏</span>
              <dv-decoration-6
                class="title-bototm"
                :reverse="true"
                :color="['#50e3c2', '#67a1e5']"
                style="width:3.125rem;height:.1rem;"
              />
            </div>
            <dv-decoration-8
              :reverse="true"
              :color="['#568aea', '#000000']"
              style="width:2.5rem;height:.625rem;"
            />
          </div>
          <dv-decoration-10 style="width:33.3%;height:.0625rem; transform: rotateY(180deg);" />
          <div
            class="timebox"
          >
            <span class="text">{{ dateYear }} {{ dateDay }} {{ dateWeek }}</span>
          </div>
        </div>

        <div class="body-box">
          <div>left</div>
          <center-page />
          <div>right</div>
        </div>
      </div>
    </dv-full-screen-container>
  </div>
</template>

<script>
import request from 'ky'
import { formatTime } from '../utils/index.js'
import CenterPage from './CenterPage/index.vue'

export default {
  components: {
    CenterPage
  },
  data () {
    return {
      loading: true,
      dateDay: null,
      dateYear: null,
      dateWeek: null,
      weekday: ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
    }
  },
  mounted () {
    this.timeFn()
    this.init()
  },
  methods: {
    timeFn () {
      setInterval(() => {
        this.dateDay = formatTime(new Date(), 'HH:mm:ss')
        this.dateYear = formatTime(new Date(), 'yyyy-MM-dd')
        this.dateWeek = this.weekday[new Date().getDay()]
      }, 1000)
    },
    async getData () {
      try {
        const res = await request.get('https://fwwb2020-app-volunteer.tgucsdn.com/largeScreen').json()
        this.$store.commit('SET_DATA', res.data)
        console.log(res)
      } catch (e) {
        console.log(e)
      }
    },
    async init () {
      await this.getData()
      this.loading = false

      setInterval(() => {
        this.getData()
      }, 5000)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/index.scss';

.timebox {
  font-size: 0.2rem;
  position: absolute;
  right: 0.375rem;
  top: 0.7rem;
  text-align: right;
  color: #d5e9ff;
}

.body-box {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 2fr 4fr 2fr;
  grid-column-gap: 0.5rem;
}
</style>
