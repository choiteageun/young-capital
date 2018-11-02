<template>
  <div>
    <div class="container">
      <el-row>
        <el-col>
          <el-row class="decoConBox">
            <!-- <el-col :sm="10" class="decorationContents leftContent" :style="`background-image: url('/img/main/decoration_${box}.jpg');`"></el-col> -->
            <el-col data-aos="fade-right" data-aos-duration="1500" :sm="10" :xs="24" class="decorationContents photoContent" :style="`background-image: url('/img/main/decoration_1.jpg');`"></el-col>
            <el-col data-aos="fade-up" :sm="14" :xs="24" class="decorationContents expContent">
              <div class="">
                <h4>1:1 맞춤 컨설팅</h4>
                <span class="decoTitle">안녕하세요</span>
                <p class="">있음으로써 가치를 그들의 피고 품고 바이며, 것이다. 소금이라 이성은 영원히 굳세게 듣기만 사막이다. 속에 힘차게 그들은 아니한 것이다.보라, 아니더면, 아니다. 우리 이 대고, 이상은 풍부하게 피가 관현악이며, 이것이다.</p>
              </div>
            </el-col>
          </el-row>
          <el-row class="decoConBox reverseFlex">
            <!-- <el-col :sm="10" class="decorationContents leftContent" :style="`background-image: url('/img/main/decoration_${box}.jpg');`"></el-col> -->
            <el-col data-aos="fade-up" :sm="14" :xs="24" class="decorationContents expContent">
              <div class="">
                <h4>1:1 맞춤 컨설팅</h4>
                <span class="decoTitle">안녕하세요</span>
                <p class="">있음으로써 가치를 그들의 피고 품고 바이며, 것이다. 소금이라 이성은 영원히 굳세게 듣기만 사막이다. 속에 힘차게 그들은 아니한 것이다.보라, 아니더면, 아니다. 우리 이 대고, 이상은 풍부하게 피가 관현악이며, 이것이다.</p>
              </div>
            </el-col>
            <el-col data-aos="fade-left" data-aos-duration="1500" :sm="10" :xs="24" class="decorationContents photoContent" :style="`background-image: url('/img/main/decoration_2.jpg');`">
            </el-col>
          </el-row>
          <el-row class="decoConBox">
            <!-- <el-col :sm="10" class="decorationContents leftContent" :style="`background-image: url('/img/main/decoration_${box}.jpg');`"></el-col> -->
            <el-col data-aos="fade-right" data-aos-duration="1500" :sm="10" :xs="24" class="decorationContents photoContent" :style="`background-image: url('/img/main/decoration_3.jpg');`"></el-col>
            <el-col data-aos="fade-down" :sm="14" :xs="24" class="decorationContents expContent right">
              <div class="">
                <h4>1:1 맞춤 컨설팅</h4>
                <span class="decoTitle">안녕하세요</span>
                <p class="">있음으로써 가치를 그들의 피고 품고 바이며, 것이다. 소금이라 이성은 영원히 굳세게 듣기만 사막이다. 속에 힘차게 그들은 아니한 것이다.보라, 아니더면, 아니다. 우리 이 대고, 이상은 풍부하게 피가 관현악이며, 이것이다.</p>
              </div>
            </el-col>
            <h1></h1>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {
    AOS.init()
  }
}
</script>
<style lang="scss" scoped>
.container {
  .decorationContents {
    height: 350px;
    margin-bottom: 10px;
  }
  .photoContent {
    padding: 20px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    box-shadow: inset -30px 0px 60px 0px #fff, inset 0px 0px 30px 0px #fff,
      inset 0px 0px 30px 0px #fff, inset 0px 0px 30px 0px #fff,
      inset 0px 0px 30px 0px #fff;
  }
  .decoConBox {
    box-sizing: border-box;
    overflow: hidden;
    .expContent {
      padding: 20px;
      border-left: 3px solid #715d60;
      height: 200px;
    }
    .decoTitle {
      font-size: 2.5rem;
    }
  }
  .reverseFlex {
    @media (max-width: 767px) {
      display: flex;
      flex-direction: column-reverse;
    }
  }
}
</style>
