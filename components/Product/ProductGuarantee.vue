<template>
  <div>
    <div class="productContainer">
      <ProductTitle title="보증인 대출">
        본인신용이나 조건에서 대출이 불가하나 어떠한 담보도 내세울수 없을때 받을수있는 상품
      </ProductTitle>
      <ProductExplain title="대상">직장인,자영업자,주부,무직자<br />
        나이 만 20세~만 60세,지역: 전국</ProductExplain>
      <ProductExplain title="한도">~ 6,000만원 까지(보증인 조건에따라)</ProductExplain>
      <ProductExplain title="기간">최장 5년까지 취급 수수료 없음.</ProductExplain>
      <ProductExplain title="금리"> 연 ~ 24% 이내(연체금리 :대출금리의 최대 24%넘지않음)</ProductExplain>
      <ProductExplain title="상환 방식">(매월) 만기일시상환 및 원리금 균등상환</ProductExplain>
      <ProductExplain title="구비 서류">채무자: 신분증, 원초본, 입금통장앞면,자격득실확인서,의료보험납부확인서,급여통장 3개월<br />
        보증인: 신분증, 자격득실확인서, 의료보험납부확인서,급여통장 3개월거래내역</ProductExplain>
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
    height: 30px;
    border-radius: 5px;
    margin-bottom: 15px;
    @media (max-width: 767px) {
      margin-bottom: 50px;
    }
    .Title h1 {
      margin-left: 10px;
      text-shadow: rgba(255, 255, 255, 0.8) 1px 1px 3px,
        rgba(0, 0, 0, 0.4) 2px 2px 8px;
    }
    .explanation {
      padding-left: 20px;
      span {
        font-size: 1rem;
        color: rgba(220, 220, 220, 1);
        background-color: rgba(0, 0, 0, 0.6);
        font-weight: 500;
      }
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
  .rowText .el-col:first-child {
    line-height: 30px;
    background-color: #2e2f30;
    border-radius: 5px;
    text-align: center;
    h3 {
      margin-bottom: 0;
      color: white;
    }
  }
  .rowText .el-col:last-child {
    line-height: 30px;
    background-color: #eee;
    border-radius: 5px;
    padding: 0px 30px;
    span {
      text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px;
    }
  }
  .marginText {
    margin-bottom: 50px;
    @media (max-width: 767px) {
      margin-bottom: 80px;
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
</style>
