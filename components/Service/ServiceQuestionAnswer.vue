<template>
  <div>
    <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="123" name="0">
        <div>
          <slot></slot>
          {{title}}
        </div>
      </el-collapse-item>
    </el-collapse>
    <!-- <el-row :gutter="10">
      <el-col :sm="6" class="title">
        <h3>{{title}}</h3>
      </el-col>
      <el-col :sm="18" class="explain">
        <p>
          <slot></slot>
        </p>
      </el-col>
    </el-row> -->
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
</style>
