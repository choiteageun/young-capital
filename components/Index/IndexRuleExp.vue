<template>
  <div class="container">
    <div class="content">
      <p>대출실행시 이자외에 기타비용은 일체 없으며, <span style="color:red;">중개수수료</span>를 요구하거나 받는 것은 <span style="color:red;">불법</span>입니다.</p>
      <p>대출이자 또는 원금이 <span style="color:red;">연체</span> 될 시 에는 신용상의 <span style="color:red;">불이익</span>을 받으실 수 있습니다. 과도한 빚, 고통의 시작입니다.</p>
      <p>대출시 귀하의 신용등급이 <span style="color:red;">하락</span>할 수 있습니다.</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.container {
  .content {
    margin-top: 50px;
    padding-right: 40px;
    padding-left: 40px;
    padding-bottom: 50px;
    
    p {
      border-left: 3px solid #715d60;
      padding-right:20px;
      padding-left:20px;
      line-height: 2rem;
      color: #715d60;
      font-weight: 600;
      text-shadow: rgba(255, 255, 255, 1) 1px 1px 1px,
        rgba(0, 0, 0, 0.5) 2px 2px 5px;
    }
  }
}
</style>
