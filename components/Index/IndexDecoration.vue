<template>
  <div>
    <div class="container">
      <el-row>
        <el-col>
          <el-row class="decoConBox">
            <!-- <el-col :sm="10" class="decorationContents leftContent" :style="`background-image: url('/img/main/decoration_${box}.jpg');`"></el-col> -->
            <el-col data-aos="fade-right" data-aos-duration="1500" :sm="10" :xs="24" class="decorationContents photoContent" :style="`background-image: url('/img/main/decoration_1.jpg');`"></el-col>
            <el-col data-aos="fade-up" :sm="14" :xs="24" class="decorationContents expContent">
              <div class="oneContent">
                <h4>저희만의 경력과 노하우를 보유하고 있습니다</h4>
                <span class="decoTitle">대출 전문가 </span><span style="opacity:0.5;">Expert</span>
                <div class="textContent">
                  <p>모든 일에는 그 분야의 전문가가 필요합니다.</p>
                  <p>고객님 한분한분에게 최적화 된 솔루션을 제공합니다.</p>
                  <p>저희 넘버원이 당신의 대출 고민을 해결해 줄 전문가입니다.</p>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row class="decoConBox reverseFlex">
            <!-- <el-col :sm="10" class="decorationContents leftContent" :style="`background-image: url('/img/main/decoration_${box}.jpg');`"></el-col> -->
            <el-col data-aos="fade-up" :sm="14" :xs="24" class="decorationContents expContent">
              <div class="twoContent">
                <h4>금리는 최대한 낮게 !</h4>
                <span class="decoTitle">고객 우선 정신 </span><span style="opacity:0.5;">Customer First</span>
                <div class="textContent">
                  <p>고객분들에게 가장 좋은 상품을 폭 넓게 제안해드립니다.</p>
                  <p>최대한의 혜택을 찾아 고객분들에게 제공합니다</p>
                  <p>넘버원은 늘 그래왔으며, 앞으로도 그럴것입니다.</p>
                </div>
              </div>
            </el-col>
            <el-col data-aos="fade-left" data-aos-duration="1500" :sm="10" :xs="24" class="decorationContents photoContent" :style="`background-image: url('/img/main/decoration_2.jpg');`">
            </el-col>
          </el-row>
          <el-row class="decoConBox">
            <!-- <el-col :sm="10" class="decorationContents leftContent" :style="`background-image: url('/img/main/decoration_${box}.jpg');`"></el-col> -->
            <el-col data-aos="fade-right" data-aos-duration="1500" :sm="10" :xs="24" class="decorationContents photoContent" :style="`background-image: url('/img/main/decoration_3.jpg');`"></el-col>
            <el-col data-aos="fade-down" :sm="14" :xs="24" class="decorationContents expContent right">
              <div class="threeContent">
                <h4>신용조회 NO !</h4>
                <span class="decoTitle">안전이 최우선 </span><span style="opacity:0.5;">Safe</span>
                <div class="textContent">
                  <p>저희는 대출 상품 검색시 절대 신용조회를 하지 않습니다.</p>
                  <p>고객분들의 걱정을 믿음으로 바꿔드리고자 합니다.</p>
                  <p>저희 넘버원은 어떠한 사고도 없습니다.</p>
                </div>
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
      margin-left:40px;
      margin-right:40px;
  }
  .decoConBox {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    .expContent {
      padding: 20px;
      border-left: 3px solid #715d60;
      height: 200px;
    }
    .decoTitle {
      font-size: 2.5rem;
      margin-left: 10px;
      font-weight: 700;
    }
    .oneContent{
      .decoTitle{
        color:#2fb0f2;
      }
    }
    .twoContent{
      .decoTitle{
        color:#67c23a;
      }
      
    }
    .threeContent{
      .decoTitle{
        color:#5b5be4;
      }
    }
    h4 {
      opacity: 0.7;
      font-weight: 400;
    }
    .textContent{
      margin-top:20px;
      p{
        color:#715d60;
        line-height: 25px;
        text-shadow: rgba(0,0,0,0.3) 1px 1px 3px;
      }
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
