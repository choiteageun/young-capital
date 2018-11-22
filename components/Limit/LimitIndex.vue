<template>
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
</template>
<script>
import axios from 'axios'
import CustomPrivacyPolicy from '@/components/Custom/CustomPrivacyPolicy.vue'
import CustomPrivacyPolicyNoDialog from '@/components/Custom/CustomPrivacyPolicyNoDialog.vue'
export default {
  components: { CustomPrivacyPolicy, CustomPrivacyPolicyNoDialog },
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
      }
    }
  },
  methods: {},
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
}
</style>
