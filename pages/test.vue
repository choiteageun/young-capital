<template>
  <div>
    <SplitImage src="https://unsplash.it/g/1024/768?image=874" size="600" :split="7"></SplitImage>
  </div>
</template>
<script>
import SplitImage from "@/components/Custom/SplitImage.vue"

export default {
  components:{
    SplitImage
  },
  data() {
    return {}
  },
  
}
</script>
<style lang="scss" scoped>

</style>

