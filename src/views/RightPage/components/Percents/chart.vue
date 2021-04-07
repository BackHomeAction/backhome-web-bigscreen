<template>
  <div class="chart">
    <div class="chart-item">
      <Echart
        id="percents-chart"
        :options="options"
        height="1.25rem"
        width="1.25rem"
      />
      <span class="dis-text">{{ cdata.title }}</span>
    </div>
  </div>
</template>

<script>
import Echart from '@/common/echart'
import echarts from 'echarts'

const percentOptions = params => ({
  title: {
    text: `${params.number}%`,
    left: '45%',
    top: '40%',
    textAlign: 'center',
    textStyle: {
      fontSize: '16',
      fontWeight: '500',
      color: '#909dff',
      textAlign: 'center'
    }
  },
  series: [
    {
      type: 'pie',
      startAngle: 0,
      radius: ['80%', '70%'],
      center: ['50%', '50%'],
      data: [
        {
          value: params.number,
          name: params.title,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#5a8bfa'
                },
                {
                  offset: 1,
                  color: '#831bdb'
                }
              ]),
              shadowColor: 'rgba(175,143,230,.5)',
              shadowBlur: 10
            }
          },
          label: {
            show: false
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0
              }
            }
          },
          hoverAnimation: false
        },
        {
          label: {
            show: false
          },
          labelLine: {
            normal: {
              smooth: true,
              lineStyle: {
                width: 0
              }
            }
          },
          value: 100 - params.number,
          hoverAnimation: true,
          itemStyle: {
            color: 'rgba(79,76,192, 0.3)'
          }
        }
      ]
    }
  ]
})

export default {
  components: { Echart },
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
        this.options = percentOptions(data)
      },
      immediate: true,
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.chart {
  margin-top: 0.15rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  &-item {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 1.85rem;
    .dis-text {
      font-weight: bold;
      margin-top: 0.1rem;
      color: #b2cfee;
      font-size: 0.2rem;
      background: linear-gradient(to bottom, #fff, #6176F4);
      color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
}
</style>
