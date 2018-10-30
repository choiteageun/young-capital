<template>
  <div>
    <IndexDisplay></IndexDisplay>
    <indexSolution></indexSolution>
  </div>
</template>
<script>
import IndexDisplay from "@/components/Index/IndexDisplay.vue"
import IndexSolution from "@/components/Index/IndexSolution.vue"

export default {
  components:{
    IndexDisplay,
    IndexSolution,
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
