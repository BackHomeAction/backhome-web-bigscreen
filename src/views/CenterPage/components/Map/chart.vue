<template>
  <div class="chart">
    <!-- 大地图 -->
    <Echart
      id="bottomLeftChart"
      :options="options"
      height="9rem"
      width="100%"
    />
  </div>
</template>

<script>
import Echart from '@/common/echart'
import dayjs from '@/utils/dayjs'

export default {
  components: {
    Echart
  },
  props: {
    cdata: {
      type: [Array, Object],
      default: () => ({})
    }
  },
  data () {
    return {
      options: {}
    }
  },
  watch: {
    cdata: {
      handler (data) {
        console.log(data)
        this.options = {
          title: {
            show: false,
            text: '全国案件热点图',
            left: 'center',
            textStyle: {
              color: '#fff'
            }
          },
          legend: {
            show: false
          },
          geo: {
            nameMap: {
              China: '中国'
            },
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            zoom: 1.2,
            itemStyle: {
              normal: {
                borderColor: 'rgba(255,209,163, .5)', // 区域边框颜色
                areaColor: 'rgba(73,86,166,.1)', // 区域颜色
                borderWidth: 0.5, // 区域边框宽度
                shadowBlur: 5,
                shadowColor: 'rgba(107,91,237,.7)'
              },
              emphasis: {
                borderColor: '#FFD1A3',
                areaColor: 'rgba(102,105,240,.3)',
                borderWidth: 1,
                shadowBlur: 5,
                shadowColor: 'rgba(135,138,255,.5)'
              }
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: (data) => {
              return `${data.name}<br>于 ${this.getRelativeTime(data.value[2].lostTime)}走失于${data.value[2].place}`
            }
          },
          series: [
            {
              name: '地点',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                brushType: 'stroke'
              },
              label: {
                emphasis: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: 2,
              showEffectOn: 'render',
              itemStyle: {
                normal: {
                  color: '#46bee9'
                }
              },
              data: data
            }
          ]
        }
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getRelativeTime (val) {
      return dayjs(val).fromNow()
    }
  }
}
</script>
