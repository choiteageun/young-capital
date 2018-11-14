<template>
  <div>
    <el-row>
      <el-col style="margin-top:10px;">
        <h4 style="color:red;text-align:center;margin-bottom:20px;">※중요:모든 서류에는 주민번호 뒷자리가 않보이게 첨부(예:123456-1******)</h4>
      </el-col>
    </el-row>
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
export default {
  data() {
    return {
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
</style>
