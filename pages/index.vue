<template>
  <div>
    <IndexDisplay></IndexDisplay>
    <IndexSolution></IndexSolution>
    <IndexInformation></IndexInformation>
    <IndexDecoration></IndexDecoration>
  </div>
</template>
<script>
import IndexDisplay from "@/components/Index/IndexDisplay.vue"
import IndexSolution from "@/components/Index/IndexSolution.vue"
import IndexDecoration from "@/components/Index/IndexDecoration.vue"
import IndexInformation from "@/components/Index/IndexInformation.vue"

export default {
  components:{
    IndexDisplay,
    IndexSolution,
    IndexDecoration,
    IndexInformation,
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
