<template>
  <el-dialog title="대출 가능 한도 조회" width="80%" :visible.sync="visible" :before-close="handleClose" :modalAppendToBody="false">
    <div class="allContainer">
      <div class="allContents">
        <h3>나의 맞춤 대출, 신용조회 없이 <span style="color:red;">가능 한도 알아보기</span></h3>
        <div class="formContainer">
          <el-form ref="consulForm" :rules="rules">
            <!-- form 작업할 부분 -->
            <el-row>
              <el-col :sm="6">
                <div>
                  <el-form-item label="이름" prop="name">
                    <el-input v-model="createUserData.name"></el-input>
                  </el-form-item>
                  <el-form-item label="연락처" prop="tel">
                    <el-input v-model="createUserData.tel"></el-input>
                  </el-form-item>
                  <el-form-item label="신청 금액" prop="loanAmount">
                    <el-input v-model="createUserData.loanAmount"></el-input>
                  </el-form-item>
                  <el-form-item label="동의" prop="agree">
                    <el-checkbox v-model="createUserData.agree" true-label="true" :false-label="0" type="success" label="개인정보 취급방침"></el-checkbox>
                  </el-form-item>
                </div>
              </el-col>
              <el-col :sm="18">
                <div class="photoContainer">
                  <div class="photo">
                    <CustomPrivacyPolicyNoDialog></CustomPrivacyPolicyNoDialog>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="footer" slot="footer">
        <el-button>조회 신청</el-button>
        <el-button @click="$emit('update:visible', false)">닫기</el-button>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import axios from 'axios'
import CustomPrivacyPolicyNoDialog from '@/components/Custom/CustomPrivacyPolicyNoDialog.vue'
export default {
  components: { CustomPrivacyPolicyNoDialog },
  data() {
    return {
      termDialog: false,
      createUserData: {
        name: '',
        tel: '',
        loanAmount: '',
        note: '',
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
    handleClose(done) {
      this.$emit('update:visible', false)
    },
    async consulForm() {
      const res = await axios.post(
        `/api/consultation/${this.consulFormData.id}`,
        {
          data: this.consulFormData
        }
      )
      this.$notify({
        title: '한도 조회 완료',
        message: `접수되었습니다.`,
        duration: 1500
      })

      this.consulFormDialog = false

      console.log(res)
    }
  },
  props: ['visible']
}
</script>
<style lang="scss" scoped>
.allContents {
  > h3 {
    margin-left: 50px;
  }
  .formContainer {
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    .el-row {
      @media (max-width: 767px) {
        display: flex;
        flex-direction: column-reverse;
      }
    }
    > span {
      text-align: center;
    }
    .photoContainer {
      padding-left: 50px;
      .photo {
        width: 100%;
        height: 400px;
        opacity: 0.9;
        border-radius: 25px;
        background-image: url('/img/limit/limit_1.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;
        box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.8),
          0px 0px 20px 2px rgba(0, 0, 0, 0.5);
        overflow-x: auto;
        padding: 20px;
      }
      @media (max-width: 767px) {
        padding: 0px;
      }
    }
  }
  .el-dialog {
    background-color: rgba(255, 255, 255, 0.5);
    .allContainer {
      width: 100%;
      max-width: 1000px;
      margin-left: auto;
      margin-right: auto;
      .footer {
        text-align: center;
        margin-top: 20px;
      }
    }
  }
}
</style>
