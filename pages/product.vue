<template>
  <div class="article">
    <BaseSubHeader>대출 상품</BaseSubHeader>
    <!-- 767px 에서 flex-direction: column; 로 변경-->
    <div class="allContents">
      <div>
        <div class="flex leftBtns">
          <el-button @click="tab = 'freelancer'" :type="(tab === 'freelancer') ? 'warning' : 'primary'">프리랜서 대출</el-button>
          <el-button @click="tab = 'job'" :type="(tab === 'job') ? 'warning' : 'primary'">직장인 대출</el-button>
          <el-button @click="tab = 'buisness'" :type="(tab === 'buisness' ? 'warning' : 'primary')">사업자 대출</el-button>
          <el-button @click="tab = 'student'" :type="(tab === 'student' ? 'warning' : 'primary')">대학생/무직자 대출</el-button>
          <el-button @click="tab = 'reconstruction'" :type="(tab === 'reconstruction' ? 'warning' : 'primary')">회생 대출</el-button>
          <el-button @click="tab = 'car'" :type="(tab === 'car' ? 'warning' : 'primary')">무입고 자동차 대출</el-button>
          <el-button @click="tab = 'guarantee'" :type="(tab === 'guarantee' ? 'warning' : 'primary')">보증인 대출</el-button>
          <el-button @click="tab = 'army'" :type="(tab === 'army' ? 'warning' : 'primary')">군미필 대출</el-button>
          <el-button @click="tab = 'charter'" :type="(tab === 'charter' ? 'warning' : 'primary')">전/월세 대출</el-button>
          <el-button @click="tab = 'evidence'" :type="(tab === 'evidence' ? 'warning' : 'primary')">무설정 담보 대출</el-button>
        </div>
      </div>
      <div>
        <ProductFreelancer v-if="tab === 'freelancer'"></ProductFreelancer>
        <ProductJob v-else-if="tab === 'job'"></ProductJob>
        <ProductBuisness v-else-if="tab === 'buisness'"></ProductBuisness>
        <ProductStudent v-else-if="tab === 'student'"></ProductStudent>
        <ProductReconstruction v-else-if="tab === 'reconstruction'"></ProductReconstruction>
        <ProductCar v-else-if="tab === 'car'"></ProductCar>
        <ProductGuarantee v-else-if="tab === 'guarantee'"></ProductGuarantee>
        <ProductGuarantee v-else-if="tab === 'job'"></ProductGuarantee>
        <ProductArmy v-else-if="tab === 'army'"></ProductArmy>
        <ProductCharter v-else-if="tab === 'charter'"></ProductCharter>
        <ProductEvidence v-else></ProductEvidence>
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
import ProductFreelancer from '@/components/product/ProductFreelancer.vue'
import ProductJob from '@/components/product/ProductJob.vue'
import ProductBuisness from '@/components/product/ProductBuisness.vue'
import ProductStudent from '@/components/product/ProductStudent.vue'
import ProductReconstruction from '@/components/product/ProductReconstruction.vue'
import ProductCar from '@/components/product/ProductCar.vue'
import ProductArmy from '@/components/product/ProductArmy.vue'
import ProductGuarantee from '@/components/product/ProductGuarantee.vue'
import ProductCharter from '@/components/product/ProductCharter.vue'
import ProductEvidence from '@/components/product/ProductEvidence.vue'

export default {
  data() {
    return {
      tab: 'freelancer'
    }
  },
  components: {
    BaseSubHeader,
    ProductFreelancer,
    ProductJob,
    ProductBuisness,
    ProductStudent,
    ProductReconstruction,
    ProductCar,
    ProductArmy,
    ProductGuarantee,
    ProductCharter,
    ProductEvidence
  }
}
</script>
<style lang="scss" scoped>
.article {
  padding-top: 60px;
  .allContents {
    display: flex;
    .flex {
      display: flex;
      height: 100%;
      flex-direction: column;
      @media (max-width: 767px) {
        flex-direction: row;
        overflow-x:auto;
      }
      .el-button {
        min-width: 200px;
        margin-left: 0px;
        padding-bottom: 30px;
        padding-top: 30px;
        border-radius: 0px;
        border-bottom: 1px solid white;
      }
    }
    @media (max-width: 767px) {
      flex-direction: column;
    }
  }
}
</style>