<template>
  <div class="article">
    <BaseSubHeader>고객 만족 센터</BaseSubHeader>
    <ServiceIndex></ServiceIndex>
  </div>

</template>
<script>
import BaseSubHeader from '@/components/Base/BaseSubHeader.vue'
import ServiceIndex from '@/components/Service/ServiceIndex.vue'
export default {
  data() {
    return {

    }
  },
  components: { BaseSubHeader,ServiceIndex }
}
</script>
<style lang="scss" scoped>
.article {
  padding-top: 60px;
  padding-bottom: 60px;
}
</style>