<template>
  <div class="allContainer">
    <div class="photo">
      <div style="height:100%;width:100%;background-clor:rgba(255,255,255,0.7);"></div>
      <h1 style="text-shadow: rgba(255, 255, 255, 1) 1px 1px 2px,rgba(0, 0, 0, 0.5) 1px 1px 15px;text-align:center;">SUPPORT</h1>
      <div class="content">
        <el-row>
          <el-col :md="8" :sm="12" v-for="box in 6" :key="box">
            <div class="boxTest" data-aos="zoom-in" data-aos-duration="1000">
              <span style="font-size:0.8rem;">{{community[box-1].exp}}</span>
              <h1 style="text-align:center;color:#715d60;">{{community[box-1].title}}</h1>
              <div style="text-align:center;">
                <img style="width:100px;height:40px;opacity:.9;border-radius:10px;" :src="`/img/main/support_${box}.png`">
              </div>
              <div style="text-align:right;">
                <el-button type="primary">바로가기</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      community: [
        {
          exp: '# 초본발급',
          title: '등.초본'
        },
        {
          exp: '# 졸업증명서',
          title: '고졸증명서'
        },
        {
          exp: '# 복무확인서',
          title: '복무확인서'
        },
        {
          exp: '# 대학졸업증명서',
          title: '대졸증명서'
        },
        {
          exp: '# 건강보험',
          title: '국민건강보험'
        },
        {
          exp: '# 대부업체조회',
          title: '대부등록 업체조회'
        }
      ]
    }
  },
  methods: {},
  mounted() {
    AOS.init()
  }
}
</script>
<style lang="scss" scoped>
.allContainer {
  margin-top: 50px;
  position: relative;
  .photo {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.7),
        rgba(255, 255, 255, 0.7)
      ),
      url('/img/main/community_1.jpg');
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    box-shadow: inset 0px 0px 30px 10px rgba(255, 255, 255, 1);
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .content {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 20px;
    padding-left: 20px;
    background-color: rgba(255, 255, 255, 0.4);
    .boxTest {
      height: 200px;
      margin: 10px 20px;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid #ccc;
      box-shadow: 2px 2px 20px -10px rgba(0,0,0,0.5),
      2px 2px 3px -4px rgba(0,0,0,0.8);
      padding: 20px;
      cursor: pointer;
      @media (max-width: 767px) {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}
</style>
