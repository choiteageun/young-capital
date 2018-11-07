<template>
  <div>
    프리랜서
    <div>
      <ul class="list">
        <li>사과</li>
        <li>바나나</li>
        <li>오렌지</li>
        <li>토마토</li>
      </ul>
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
.list{
  display:flex;
  width:100px;
  background-color: #ccc;
  list-style: none;
  overflow-x:auto;
  padding:0;
  li{
    white-space: nowrap;
  }
}
</style>
