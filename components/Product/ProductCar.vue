<template>
  <div>
    <div class="productContainer">
      <ProductTitle title="무입고 자동차 대출">
        무입고로 현재 타던 차는 그대로 운행하면서 중고시세의 최대 100%까지 대출가능
      </ProductTitle>
      <ProductExplain title="대상">2005년식부터 가능,년식 대비 중고시세의 100% 가능<br />만 65세 이하,지역:도서지역 제외(제주도가능),무직자 가능</ProductExplain>
      <ProductExplain title="접수 불가">자동차년식 9년 이상 (2005년식 이후 가능)<br />
        - 차량시세의 할부 및 압류금 제외 잔존가치 400만원 이하<br />
        - 중고차 시세 500만원 미만<br />
        - 법인차, 리스차 시세대비 90%이상 근저당 설정 / 시세대비 저당과다 / 시세대비 할부금 과다 /<br />
        최근명의이전 (1개월 미만)</ProductExplain>
      <ProductExplain title="한도">~ 4000만원 까지</ProductExplain>
      <ProductExplain title="기간">48개월</ProductExplain>
      <ProductExplain title="금리"> 연 ~ 24% 이내(연체금리 :대출금리의 최대 24%넘지않음)</ProductExplain>
      <ProductExplain title="상환 방식">(매월) 만기일시상환 및 원리금 균등상환</ProductExplain>
      <ProductExplain title="구비 서류">신분증,주민등록원초본,통장사본,자동차등록증,주거래3개월 입출금거래내역</ProductExplain>
      <ProductExplain title="공동명의">차주 & 공동명의자 서류필</ProductExplain>
      <ProductExplain title="공동명의 보증인">4급 부터 진행가능 / 장애부위에 따른 진행여부 결정 (시각, 청각, 언어장애 진행불가)</ProductExplain>
      <ProductExplain title="신용">개인회생, 신용회복, 파산면책 가능</ProductExplain>
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
