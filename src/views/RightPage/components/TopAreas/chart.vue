<template>
  <div class="chart">
    <dv-capsule-chart
      :config="options"
      style="width: 5.25rem; height: 2.5rem"
    />
  </div>
</template>

<script>
export default {
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
          data: data.caseTop.map(ele => {
            return {
              name: `${ele.province} ${ele.city} ${ele.district}`,
              value: ele.caseNum
            }
          }),
          colors: ['#ff9f7f', '#ffdb5c', '#9fe6b8', '#67e0e3', '#32c5e9', '#37a2da', '#fb7293'],
          unit: '件'
        }
      },
      immediate: true,
      deep: true
    }
  }
}
</script>
