<template>
  <div class="article">
    <BaseSubHeader>회사 소개</BaseSubHeader>
    <div class="allContainer">
      <el-row class="conA">
        <el-col :sm="14">
          <div class="explanationText">안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요</div>
        </el-col>
        <el-col :sm="10">
          <div class="photo"></div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>
<script>
import BaseSubHeader from '@/components/Base/BaseSubHeader.vue'
export default {
  data() {
    return {}
  },
  components: { BaseSubHeader }
}
</script>
<style lang="scss" scoped>
.article {
  padding-top: 60px;
  padding-bottom: 60px;
  min-height: 300vh;
}
.allContainer {
  width:100%;
  max-width: 1000px;
  margin-left:auto;
  margin-right:auto;
  .conA {
    width: 100%;
    .explanationText {
      padding: 50px;
      height: 100%;
    }
    .photo {
      background: url('/img/about/about.jpg');
      height:500px;
      object-fit: cover;
      background-repeat: no-repeat;
      border-radius: 20px;
    }
  }
}
</style>