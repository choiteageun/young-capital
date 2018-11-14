<template>
  <div>
    <el-row>
      <el-col class="title">
        <h1>{{title}}</h1>
      </el-col>
      <el-col class="explanation"><span><slot></slot></span></el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  props:{
    title:{
      required:true,
      type:String,
    }
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  margin-bottom: 50px;
}
.title h1 {
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
</style>
