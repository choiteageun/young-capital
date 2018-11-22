<template>
  <div class="article">
    <BaseSubHeader>회사 소개</BaseSubHeader>
    <div class="allContainer">
      <el-row class="conA">
        <el-col :sm="14">
          <div class="explanationText">
            <h2>인사말</h2>
            <p style="margin-bottom:10px;"><span class="quotes">"</span><span>작은 희망의 불씨조차 소중히 다룰줄 아는..</span><span class="quotes">"</span></p>

            <p>안녕하십니까?</p>

            <p>넘버원론 대부중개 대표 <span style="font-weight:700;">김민주</span> 입니다.</p>

            <p>항상 저희 넘버원론 대부중개를 아껴주시고 성원해 주시는 고객 여러분께 깊이 감사의 인사를 드립니다.</p>

            <p>고객 한분 한분의 상황과 처지에 맞는 시스템으로 채권자와 채무자간의 연결을 도와드리며 담보만 있으면 성사률 90%에 도전하고 있습니다.</p>

            <p>저희 업체는 다른 업체에 비해서 고객님들의 부담없는 비용(단, 법무비 제외)으로 중개역활을 하는 회사로서 이미 많은 분들에게 큰 사랑을 받고 있습니다.</p>

            <p>제도권은행은 각종 신용조회 및, 소득증빙 등 많은것을 포함하여 한도가 낮은것과 달리 저희 넘버원론 대부중개에서는 그런 복잡한 서류등을 요구하지 않습니다.</p>

            <p>신용하락을 걱정하시는분들 (저희는 신용조회를 하지 않습니다.), 소득증빙이 제대로 되지않아 담보대출 한도가 나오지 않는분들..등...</p>

            <p>고객님의 마음을 녹여 막힌곳을 뻥 뚫어주는 저희 넘버원 대부중개가 될것을 약속드립니다.</p>

            <p style="margin-left:100px;font-weight:700;">넘버원 대부중개 대표</p>
            <p style="margin-left:100px;font-weight:700;">김민주 올림</p>
          </div>
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
}
.allContainer {
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  .conA {
    width: 100%;
    .explanationText {
      padding: 50px;
      height: 100%;
    }
    p {
      .quotes {
        color: red;
        font-weight: 700;
        font-size: 1.2rem;
      }
      line-height: 2.2rem;
      margin-bottom:30px;
      text-shadow: 0px 0px 1px rgba(0,0,0,0.1);
    }
    h2 {
      border-bottom: 1px solid #ccc;
    }
    .photo {
      background: url('/img/about/about.jpg');
      height: 500px;
      object-fit: cover;
      background-repeat: no-repeat;
      border-radius: 20px;
    }
  }
}
</style>