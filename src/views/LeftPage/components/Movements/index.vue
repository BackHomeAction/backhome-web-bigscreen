<template>
  <div id="movement">
    <div class="bg-color-black">
      <div class="d-flex pt-2 pl-2">
        <span style="color:#5cd9e8">
          <icon name="chart-line" />
        </span>
        <div class="d-flex">
          <span class="fs-xl text mx-2">案件动态</span>
        </div>
      </div>
      <div class="d-flex jc-center body-box">
        <dv-scroll-board
          :config="config"
          style="width:5.25rem;height:11.4rem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from '@/utils/dayjs'

function actionIdToText (id) {
  return {
    1: '<span class="colorRed">新案件发布</span>',
    2: '<span class="colorGrass">案件已完成</span>',
    3: '案件已取消',
    4: '案件已归档',
    5: '志愿者加入',
    6: '志愿者退出',
    7: '匹配到人脸'
  }[id]
}

export default {
  computed: {
    cdata () {
      return this.$store.state.data
    },
    config () {
      return {
        header: ['任务 ID', '事件', '时间'],
        data: this.cdata.dynamicList.map(ele => {
          return [
            ele.id,
            actionIdToText(ele.actionId),
            dayjs(ele.time).fromNow()
          ]
        }),
        rowNum: 12, // 表格行数
        headerHeight: 35,
        headerBGC: '#0f1325', // 表头
        oddRowBGC: '#0f1325', // 奇数行
        evenRowBGC: '#171c33', // 偶数行
        columnWidth: [100],
        align: ['center']
      }
    }
  },
  mounted () {},
  methods: {}
}
</script>

<style lang="scss">
#movement {
  padding: 0.2rem;
  height: 5.125rem;
  min-width: 3.75rem;
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
