<template>
  <div>
    <Header />
    <div class="main">
      <nuxt />
    </div>
    <Footer />
    <Chat />
  </div>

</template>
<script>
import Chat from '@/components/Chat/Chat.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  data() {
    return {

    }
  },

  components: {
    Chat,
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.main{
  min-height: 95vh;
}
</style>