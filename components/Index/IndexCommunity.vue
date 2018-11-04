<template>
  <div class="allContainer">
    <div class="photo">
      <div class="content">
        <el-row>
          <el-col>
            
          </el-col>
        </el-row>
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
.allContainer {
  margin-top: 50px;
  height:400px;
  position: relative;
  .photo {
    width: 100%;
    height:100%;
    position: absolute;
    top:0;
    left:0;
    background-image: url('/img/main/community_1.jpg');
    background-attachment: fixed;
    opacity: 0.4;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    box-shadow: inset 0px 0px 30px 10px rgba(255, 255, 255, 1);
    padding-top:50px;
    padding-bottom:50px;
  }
  .content{
    position: relative;
    width:90%;
    margin-left: auto;
    margin-right: auto;
    height:300px;
    background-color:rgba(255, 255, 255, 0.7);
    
  }
}
</style>
