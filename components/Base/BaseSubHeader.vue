<template>
  <div class="fixed-section">
    <div class="background"></div>
    <div class="overlay"></div>
    <div class="content">
      <h1 class="title">
        <slot></slot>
      </h1>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.fixed-section {
  position: relative;
  min-height: 150px;
  overflow: hidden;

  .content {
    position: relative;
    color: white;
    line-height: 150px;
    text-align: center;
    .title:before,
    .title:after {
      content: '-';
      padding-left: 20px;
      padding-right: 20px;
    }
  }
  .background {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url('/img/main/main_background.jpg');
    background-size: cover;
    background-position: 50% 50%;
    background-attachment: fixed;
    transform: scale(1.05);
    filter: blur(5px);
  }
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
}
</style>