<template>
  <div>
    <div class="productContainer">
      <ProductTitle title="프리랜서 대출">
        생활비나 학원비로 자금이 필요한 취업준비중인 고객 및 청년을 위한 맞춤상품
      </ProductTitle>
      <ProductExplain title="대상">만 19세~35세 이하의 취업자금 및 생활자금이 필요하신분</ProductExplain>
      <ProductExplain title="한도">~ 2500만원 대출가능 (무소득자 제외)</ProductExplain>
      <ProductExplain title="기간">최장 5년까지 취급 수수료 없음.</ProductExplain>
      <ProductExplain title="금리"> 연 ~ 24% 이내(연체금리 :대출금리의 최대 24%넘지않음)</ProductExplain>
      <ProductExplain title="상환 방식">(매월) 만기일시상환 및 원리금 균등상환</ProductExplain>
      <ProductExplain title="구비 서류">주민등록증사본,주민등록초본(최근1주일이내),통장사본,<br />최종학력증명서,주거래통장 3개월 입출금거래내역</ProductExplain>
      <ProductExplain title="지급 방식">대출 완료시 고객 본인이 지정한 본인 계좌로 입금</ProductExplain>
      <ProductExplain title="신청 기간">24시간 / 365일 가능</ProductExplain>
    </div>
    <ProductApply />
    <CustomPrivacyPolicy :visible.sync="termDialog" />
  </div>
</template>
<script>
import axios from 'axios'
import ProductTitle from '@/components/Product/ProductTitle.vue'
import ProductExplain from '@/components/Product/ProductExplain.vue'
import ProductApply from '@/components/Product/ProductApply.vue' 
export default {
  components: { ProductTitle, ProductExplain, ProductApply },
  data() {
    return {
      termDialog: false,
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.productContainer {
  width: 100%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 70px;
  padding-left: 10px;
  padding-right: 10px;
  .el-row {
    border-radius: 5px;
    margin-bottom: 15px;
    @media (max-width: 767px) {
      margin-bottom: 50px;
    } 
  }
}
</style>
