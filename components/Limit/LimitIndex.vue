<template>
  <div class="allContents">
      <h3>나의 맞춤 대출, 신용조회 없이 <sapn style="color:red;">가능 한도 알아보기</sapn></h3>
      <div class="formContainer">
        <el-form>
          <!-- form 작업할 부분 -->
          <div>
            <el-form-item label="이름" prop="name">
              <el-input v-model="createUserData.name"></el-input>
            </el-form-item>
          </div>
        </el-form>
      </div>
  </div>
  
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      createUserData:{
        name:"",
      }
    }
  },
  methods: {
  },
}
</script>
<style lang="scss" scoped>
.allContents {
  .formContainer{
    margin-left:auto;
    margin-right:auto;
    width: 90%;
    >span{
      text-align:center;
    }
  }
}
</style>
