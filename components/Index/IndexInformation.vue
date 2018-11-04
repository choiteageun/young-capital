<template>
  <div style="margin-bottom : 40px;">
    <div class="backgroundImg">
      <div style="background-color: rgba(255,255,255,0.5);"></div>
      <div style="padding-top:150px;">
        <el-steps process-status="process" finish-status="success" :active="3" align-center>
          <el-step title="Step 1" description="상담 신청"></el-step>
          <el-step title="Step 2" description="서류 접수"></el-step>
          <el-step title="Step 3" description="대출 심사"></el-step>
          <el-step title="Step 4" description="당일 대출"></el-step>
        </el-steps>
      </div>
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
.backgroundImg {
  background-image: url('/img/main/information_line.jpg');
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.8),
    0px 10px 10px 0px rgba(0, 0, 0, 0.4);
  background-attachment: fixed;
}
.el-step {
  & /deep/ .el-step__main .is-process {
    color: white;
  }
  & /deep/ .el-step__line-inner {
    color: white;
  }
}
</style>
