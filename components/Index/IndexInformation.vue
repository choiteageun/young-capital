<template>
  <div style="margin-bottom : 40px;">
    <div class="backgroundImg">
      <div style="background-color: rgba(255,255,255,0.5);"></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>
<style lang="scss" scoped>
.backgroundImg{
  background-image: url("/img/main/information_line.jpg");
  width: 100%;
  height: 400px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  box-shadow:0px 0px 5px 0px rgba(0,0,0,0.8),
  0px 10px 10px 0px rgba(0,0,0,0.4);
  background-attachment: fixed;
}
</style>
