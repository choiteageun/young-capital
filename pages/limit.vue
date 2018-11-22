<template>
  <el-dialog title="대출 가능 한도 조회" width="80%" :visible.sync="visible" :before-close="handleClose" :modalAppendToBody="false">
    <div class="allContainer">
      <LimitIndex></LimitIndex>
      <div slot="footer">
        <el-button @click="$emit('update:visible', false)">닫기</el-button>
      </div>

    </div>
  </el-dialog>
</template>
<script>
import LimitIndex from '@/components/Limit/LimitIndex'
export default {
  data() {
    return {}
  },
  components: { LimitIndex },
  methods: {
    handleClose(done) {
      this.$emit('update:visible', false)
    }
  },
  props: ['visible']
}
</script>
<style lang="scss" scoped>
.allContainer {
  width: 100%;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>