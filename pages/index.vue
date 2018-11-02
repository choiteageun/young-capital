<template>
  <div>
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <IndexDisplay></IndexDisplay>
    <IndexSolution></IndexSolution>
    <IndexDecoration></IndexDecoration>
  </div>
</template>
<script>
import IndexDisplay from "@/components/Index/IndexDisplay.vue"
import IndexSolution from "@/components/Index/IndexSolution.vue"
import IndexDecoration from "@/components/Index/IndexDecoration.vue"

export default {
  components:{
    IndexDisplay,
    IndexSolution,
    IndexDecoration,
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
