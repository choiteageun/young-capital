<template>
  <div>
    <IndexDisplay></IndexDisplay>
    <IndexSolution></IndexSolution>
    <el-button @click="dialog.a = true">다이얼로그 띄우기</el-button>
    <el-dialog title="A" :visible.sync="dialog.a">
      <el-button @click="dialog.b = true">하나 더 띄우기</el-button>
      <el-button @click="dialog.a = false">닫기</el-button>
    </el-dialog>
    <el-dialog title="B" :visible.sync="dialog.b">
      <el-button @click="dialog.b = false">닫기</el-button>
    </el-dialog>
    <IndexInformation></IndexInformation>
    <IndexDecoration></IndexDecoration>
    <IndexCommunity></IndexCommunity>
    <IndexRuleExp></IndexRuleExp>
  </div>
</template>
<script>
import IndexDisplay from '@/components/Index/IndexDisplay.vue'
import IndexSolution from '@/components/Index/IndexSolution.vue'
import IndexInformation from '@/components/Index/IndexInformation.vue'
import IndexDecoration from '@/components/Index/IndexDecoration.vue'
import IndexCommunity from '@/components/Index/IndexCommunity.vue'
import IndexRuleExp from '@/components/Index/IndexRuleExp.vue'

export default {
  components: {
    IndexDisplay,
    IndexSolution,
    IndexDecoration,
    IndexInformation,
    IndexCommunity,
    IndexRuleExp
  },
  data() {
    return {
      dialog: {
        a: false,
        b: false
      }
    }
  },
  methods: {},
  async fetch({ store, app }) {}
}
</script>
<style scoped lang="scss">
</style>
