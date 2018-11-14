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
      createUserData: {
        name: '',
        tel: '',
        loanAmount: '',
        route: '웹DB',
        agree: false
      },
      rules: {
        name: [
          { required: true, message: '이름을 입력해주세요.', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '연락처을 입력해주세요.', trigger: 'blur' }
        ],
        loanAmount: [
          {
            required: true,
            message: '대출금액을 입력해주세요.',
            trigger: 'blur'
          }
        ],
        note: [
          {
            required: true,
            message: '문의내용을 입력해주세요.',
            trigger: 'blur'
          }
        ],
        agree: [
          {
            type: 'string',
            message: '개인정보 취급방침을 동의해주세요.',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    async createUser() {
      console.log(this.$refs)
      console.log(this.$refs.consulForm)
      this.$refs.consulForm.validate(async valid => {
        if (valid) {
          //검증성공
          const res = await axios.post('/api/consultation', {
            data: this.createUserData
          })
        } else {
          //검증실패
          return false
        }
      })
    }
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

    .nameInput {
      padding-right: 10px;
      @media (max-width: 767px) {
        padding-right: 0px;
      }
    }
    .loanInput {
      padding-left: 10px;
      @media (max-width: 767px) {
        padding-left: 0px;
      }
    }
  }

  .formContainer {
    width: 100%;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    .el-form {
      box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.3),
        inset 0px 0px 3px 0px rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      padding-top: 8px;
      padding-left: 8px;
      padding-right: 8px;
      padding-bottom: 1px;
      margin-bottom: 10px;
      margin-right: 10px;
      margin-left: 10px;
    }

    .terms {
      margin-left: 15px;
      padding: 2px 10px;
      max-width: 100px;
      border: 1px solid black;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.2s;
      font-weight: 500;
      display: inline;
      text-align: center;
    }
    .terms:hover {
      background-color: #715d60;
      font-weight: 600;
      color: white;
    }
    .el-form > .el-form-item /deep/ .el-form-item__content {
      margin-left: 0 !important;
    }
  }
}
</style>
