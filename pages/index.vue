<template>
  <div>
    <IndexDisplay></IndexDisplay>
    <IndexSolution></IndexSolution>
    <IndexInformation></IndexInformation>
    <IndexDecoration></IndexDecoration>
    <IndexCommunity></IndexCommunity>
    <IndexRuleExp></IndexRuleExp>
  </div>
</template>
<script>
import IndexDisplay from "@/components/Index/IndexDisplay.vue"
import IndexSolution from "@/components/Index/IndexSolution.vue"
import IndexInformation from "@/components/Index/IndexInformation.vue"
import IndexDecoration from "@/components/Index/IndexDecoration.vue"
import IndexCommunity from "@/components/Index/IndexCommunity.vue"
import IndexRuleExp from "@/components/Index/IndexRuleExp.vue"


export default {
  components:{
    IndexDisplay,
    IndexSolution,
    IndexDecoration,
    IndexInformation,
    IndexCommunity,
    IndexRuleExp,
  },
  data() {
    return {
      
    };
  },
  methods: {
    
    
  },
  async fetch({ store, app }) {},
};
</script>
<style scoped lang="scss">
</style>
