<template>
  <div class="wrapper">
    <div class="detail-list">
      <div class="detail-list-item">
        <img src="@/assets/images/center-details-data1.png">
        <div class="detail-item-text">
          <h3>今日新增案件</h3>
          <span>{{ cdata.todayNewCaseNum }}</span>
          <span class="unit">个</span>
        </div>
      </div>
      <div class="detail-list-item">
        <img src="@/assets/images/center-details-data2.png">
        <div class="detail-item-text">
          <h3>今日完结案件</h3>
          <span>{{ cdata.todayFinishCaseNum }}</span>
          <span class="unit">个</span>
        </div>
      </div>
      <div class="detail-list-item">
        <img src="@/assets/images/center-details-data3.png">
        <div class="detail-item-text">
          <h3>在线志愿者</h3>
          <span>{{ cdata.onlineVolunteerNum }}</span>
          <span class="unit">位</span>
        </div>
      </div>
      <div class="detail-list-item">
        <img src="@/assets/images/center-details-data4.png">
        <div class="detail-item-text">
          <h3>进行中案件总数</h3>
          <span>{{ cdata.ingCaseNum }}</span>
          <span class="unit">个</span>
        </div>
      </div>
      <div class="detail-list-item">
        <img src="@/assets/images/center-details-data5.png">
        <div class="detail-item-text">
          <h3>完结案件总数</h3>
          <span>{{ cdata.finishCaseNum }}</span>
          <span class="unit">个</span>
        </div>
      </div>
      <div class="detail-list-item">
        <img src="@/assets/images/center-details-data6.png">
        <div class="detail-item-text">
          <h3>案件总数</h3>
          <span>{{ cdata.caseNum }}</span>
          <span class="unit">个</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cdata () {
      return this.$store.state.data
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  margin-bottom: 0.25rem;
  margin-top: 0.5rem;
  width: 100%;
  height: 3.25rem;
  .detail-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    align-content: space-between;
    justify-content: space-around;
    width: 100%;
    &-item {
      display: flex;
      align-items: center;
      position: relative;
      height: 1.5625rem;
      padding: 0 0.125rem;
      width: 32%;
      border-radius: 5px;
      border: 1px solid #343f4b;
      background-color: rgba(19, 25, 47, 0.8);
      img {
        width: 1.25rem;
        height: 1.25rem;
      }
      .detail-item-text {
        margin-left: 0.125rem;
        h3 {
          color: #bcdcff;
          font-size: 16px;
          margin-bottom: 0.25rem;
        }
        span {
          font-weight: 500px;
          font-size: 0.25rem;
          font-weight: bolder;
          background: linear-gradient(to bottom, #fff, #4db6e5);
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }
        .unit {
          font-size: 0.2rem;
          margin-left: 0.125rem;
        }
      }
    }
  }
}
</style>
