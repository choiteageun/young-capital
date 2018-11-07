<template>
  <div class="article">
    <BaseSubHeader>대출 한도 조회</BaseSubHeader>
    <div style="display:flex;">
      <div class="flex leftBtns">
        <el-button @click="tab = 'freelancer'" :type="(tab === 'freelancer') ? 'warning' : 'primary'">프리랜서 대출</el-button>
        <el-button @click="tab = 'worker'" :type="(tab === 'worker') ? 'warning' : 'primary'">직장인 대출</el-button>
        <el-button @click="tab = ''" type="primary">사업자 대출</el-button>
        <el-button type="primary">대학생/무직자 대출</el-button>
        <el-button type="primary">회생 대출</el-button>
        <el-button type="primary">무입고 자동차 대출</el-button>
        <el-button type="primary">보증인 대출</el-button>
        <el-button type="primary">군미필 대출</el-button>
        <el-button type="primary">전/월세 대출</el-button>
        <el-button type="primary">무설정 담보 대출</el-button>
      </div>
      <div>
        <FreelancerLoan v-if="tab === 'freelancer'"></FreelancerLoan>
      </div>
    </div>
  </div>
  <!-- <el-button @click="tab = 'staff'" :type="tab === 'staff' ? 'primary' : 'warning'">직원관리</el-button> -->
  <!-- <WorkerLoan v-else-if="tab === 'worker'"></WorkerLoan> -->
  <!-- <BuisnesLoan v-else></BuisnesLoan> -->
  <!-- </transition> -->
</template>
<script>
import BaseSubHeader from '@/components/Base/BaseSubHeader.vue'
import FreelancerLoan from '@/components/product/ProductFreelancer.vue'
export default {
  data() {
    return {
      tab: 'freelancer'
    }
  },
  components: {
    BaseSubHeader,
    FreelancerLoan
  }
}
</script>
<style lang="scss" scoped>
.article {
  padding-top: 60px;
  .flex {
    display: flex;
    width: 200px;
    height: 100%;
    flex-direction: column;
    .el-button {
      margin-left: 0px;
      padding-bottom: 30px;
      padding-top: 30px;
      border-radius: 0px;
      border-bottom: 1px solid white;
    }
  }
}
</style>