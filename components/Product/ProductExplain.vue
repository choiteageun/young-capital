<template>
  <div>
    <el-row :gutter="10">
      <el-col :sm="6" class="title">
        <h3>{{title}}</h3>
      </el-col>
      <el-col :sm="18" class="explain">
        <p>
          <slot></slot>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {},
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  line-height: 30px;
  margin-bottom: 10px;
  .title {
    text-align: center;
    h3 {
      margin-bottom: 0;
      color: white;
      background-color: #2e2f30;
      border-radius: 5px;
    }
  }
  .explain {
    p {
      text-shadow: rgba(0, 0, 0, 0.2) 1px 1px 2px;
      background-color: #eee;
      border-radius: 5px;
      padding: 0 10px;
    }
  }
}
</style>
