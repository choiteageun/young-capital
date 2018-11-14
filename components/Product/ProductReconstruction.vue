<template>
  <div>
    <div class="productContainer">
      <ProductTitle title="회생 대출">
        회생 신청후 최저생계비로 생활하려고 하니 빠듯하시죠~회생 중 생활비가 필요하실때 추천
      </ProductTitle>
      <ProductExplain title="대상">만 20세 ~ 만55세,직장인 3개월이상 / 사업자 1년이상 / 파산면책 3개월 경과자<br />
        개인회생(사건번호만 나와도 가능),전국(제주도지역,도서지역불가)</ProductExplain>
      <ProductExplain title="한도">~ 2000만원까지</ProductExplain>
      <ProductExplain title="기간">6개월~최장 5년까지 취급 수수료 없음.</ProductExplain>
      <ProductExplain title="금리"> 연 ~ 24% 이내(연체금리 :대출금리의 최대 24%넘지않음)</ProductExplain>
      <ProductExplain title="상환 방식">(매월) 만기일시상환 및 원리금 균등상환</ProductExplain>
      <ProductExplain title="구비 서류">직장인-신분증,주민등록원초본,급여통장 3개월내역, 자격득실확인서,의료보험납부확인서<br />
        사업자-신분증,주민등록원초본,사업자등록증,소득금액증명원 or 부가세증명원,카드명세서,주거래통장 3개월 입출금거래내역<br />
        개인회생자-개인회생 변제내역확인서(법원 또는 신한은행에서 발급가능하십니다)<br />
        파산면책자-사건번호<br />
        신용회복자-채무변제상환내역서(신용회복위원회 전화요청)</ProductExplain>
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
