<template>
  <div>
    <div class="productContainer">
      <el-row style="margin-bottom:100px;border:none;">
        <el-col class="Title">
          <h1>사업자 대출</h1>
        </el-col>
        <el-col class="explanation"><span>일정치 않은 소득 때문에 급하게 가게운영자금이나 생계자금이 필요하실때는 사업자대출</span></el-col>
      </el-row>
      <el-row class="rowText">
        <el-col :sm="4">
          <h3>대상</h3>
        </el-col>
        <el-col :sm="20"><span>만 20~만60세,자영업 운영 3개월이상자</span></el-col>
      </el-row>
      <el-row class="rowText">
        <el-col :sm="4">
          <h3>한도</h3>
        </el-col>
        <el-col :sm="20"><span>~ 5,000만원 까지</span></el-col>
      </el-row>
      <el-row class="rowText">
        <el-col :sm="4">
          <h3>기간</h3>
        </el-col>
        <el-col :sm="20"><span>6개월~5년까지 취급 수수료 없음.</span></el-col>
      </el-row>
      <el-row class="rowText">
        <el-col :sm="4">
          <h3>금리</h3>
        </el-col>
        <el-col :sm="20"><span> 연 ~ 24% 이내(연체금리 :대출금리의 최대 24%넘지않음)</span></el-col>
      </el-row>
      <el-row class="rowText">
        <el-col :sm="4">
          <h3>상환 방식</h3>
        </el-col>
        <el-col :sm="20"><span>(매월) 만기일시상환 및 원리금 균등상환</span></el-col>
      </el-row>
      <el-row class="rowText marginText">
        <el-col :sm="4">
          <h3>구비 서류</h3>
        </el-col>
        <el-col :sm="20"><span>신분증,원초본,통장사본,사업자등록증,소득금액증명원or부가세표준증명원,<br/>카드매출통장거래내역</span></el-col>
      </el-row>
      <el-row class="rowText">
        <el-col :sm="4">
          <h3>지급 방식</h3>
        </el-col>
        <el-col :sm="20"><span>대출 완료시 고객 본인이 지정한 본인 계좌로 입금</span></el-col>
      </el-row>
      <el-row class="rowText">
        <el-col :sm="4">
          <h3>신청 시간</h3>
        </el-col>
        <el-col :sm="20"><span>24시간 / 365일 가능</span></el-col>
      </el-row>
      <el-row>
        <el-col style="margin-top:10px;">
          <h4 style="color:red">※중요:모든 서류에는 주민번호 뒷자리가 않보이게 첨부(예:123456-1******)</h4>
        </el-col>
      </el-row>
    </div>
    <div class="formContainer">
      <el-form ref="consulForm" :rules="rules" :model="createUserData" label-width="80px" @submit.native.prevent="createUser">
        <el-row>
          <el-col :sm="7">
            <el-form-item label="이름" prop="name">
              <el-input v-model="createUserData.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="9">
            <el-form-item label="연락처" prop="tel">
              <el-input v-model="createUserData.tel"></el-input>
            </el-form-item>
          </el-col>
          <el-col :sm="8">
            <el-form-item label="신청금액" prop="loanAmount">
              <el-input v-model="createUserData.loanAmount"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <el-row>
            <div>
              <el-col :sm="16">
                <div>
                  <el-form-item label="동의" prop="agree">
                    <el-checkbox v-model="createUserData.agree" true-label="true" :false-label="0" type="success" label="개인정보 취급방침"></el-checkbox>
                    <span @click="termDialog=true;" class="terms">약관보기</span>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :sm="8">
                <div style="text-align:right;">
                  <el-button style="width:100%;" type="success" native-type="submit">신청하기</el-button>
                </div>
              </el-col>
            </div>
          </el-row>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import CustomPrivacyPolicy from "@/components/Custom/CustomPrivacyPolicy.vue"
export default {
  components :{CustomPrivacyPolicy},
  data() {
    return {
      termDialog: false,
      createUserData: {
        name: '',
        tel: '',
        loanAmount: '',
        route: '웹DB',
        agree: false,
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
      },
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
    margin-right:10px;
    margin-left:10px;
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
