<template>
  <div>
    <el-row>
      <el-col style="margin-top:10px;">
        <h4 style="color:red">※중요:모든 서류에는 주민번호 뒷자리가 않보이게 첨부(예:123456-1******)</h4>
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
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
