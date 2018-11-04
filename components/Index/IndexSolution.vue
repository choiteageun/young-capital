<template>
  <div>
    <section class="solution">
      <div class="skew"></div>
      <div class="container smallAbout">
        <h1><span style="text-shadow: rgba(255, 255, 255, 1) 1px 1px 2px,rgba(0, 0, 0, 0.5) 1px 1px 15px;">NUMBER_ONE CAPITAL SOLUTION</span></h1>
        <div class="explanationSpan">
          <span>모두가 포기해도 끝까지 절대 포기하지 않는 남들과 다른 특별함이 저희 회사의 정신입니다.</span>
        </div>
        <el-row :gutter="20" style="margin-bottom:20px;margin-left:10px;margin-right:10px;">
          <el-col :md="8" :sm="12" v-for="box in 6" :key="box">
            <div data-aos="fade-up" class="sub-box" :style="`background-image: url('/img/main/sub_${box}.jpg');`">
              <div class="overlay"></div>
              <div class="content animated bounceInUp">
                <h3 class="title">{{title[box-1].title}}</h3>
                <div class="description">
                  <div class="overScroll">
                    <p class="sub_contents" style="margin-bottom : 20px;color: #ddd;">{{title[box-1].content.one}}</p>
                    <p class="sub_contents"><span style="color: #aaa;font-size:0.7rem">대출 대상 : </span>{{title[box-1].content.two}}</p>
                    <p class="sub_contents"><span style="color: #aaa;">대출 한도 : </span>{{title[box-1].content.three}}</p>
                    <p class="sub_contents"><span style="color: #aaa;">금리 : </span>{{title[box-1].content.four}}</p>
                    <p class="sub_contents" style="color: red;">{{title[box-1].content.five}}</p>
                    <p class="sub_contents"><span style="color: #aaa;">상환 방식 : </span>{{title[box-1].content.six}}</p>
                  </div>
                  <div style="text-align: center; margin-top: 20px;">
                    <el-button type="success">{{title[box-1].title}} 신청하러 가기</el-button>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </section>
  </div>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  data() {
    return {
      title: [
        {
          title: '프리랜서 대출',
          content: {
            one:
              '생활비나 학원비로 자금이 필요한 취업준비중인 고객 및 청년을 위한 맞춤상품',
            two: '만 19세~35세',
            three: '~ 2500만원 (무소득자 제외)',
            four: '연 ~ 24% 이내',
            five: '(연체금리 : 대출금리의 최대 24%넘지않음)',
            six: '만기일시상환 및 원리금균등상환'
          }
        },
        {
          title: '재학생 및 유학생 대출',
          content: {
            one:
              '학업을 하면서 식비,생활비,교통비,학원비 등..생활자금이 필요한 경우에는 대학생대출!',
            two:
              '만19 ~ 만35세 전국 대학교 재,휴학생, 학점은행제 사이버대 기능대 가능',
            three: '~ 2500만원(무소득자 제외)',
            four: '연 ~ 24% 이내',
            five: '(연체금리 : 대출금리의 최대 24%넘지않음)',
            six: '만기일시상환 및 원리금균등상환'
          }
        },
        {
          title: '직장인 대출',
          content: {
            one:
              '소득활동을 하면서 생활자금,병원비,각종공과금 납부 등 급하게 자금이 필요한 고객을 위한 상품',
            two: '만19 ~ 만60세 1개월이상 재직중인 직장인(현금수령 가능)',
            three: '~ 2500만원(무소득자 제외)',
            four: '연 ~ 24% 이내',
            five: '(연체금리 :대출금리의 최대 24%넘지않음)',
            six: '만기일시상환 및 원리금균등상환'
          }
        },
        {
          title: '사업자 대출',
          content: {
            one:
              '일정치 않은 소득 때문에 급하게 가게운영자금이나 생계자금이 필요하실때는 사업자대출',
            two: '만 20~만60세 자영업 운영 3개월이상자',
            three: '~ 2500만원(무소득자 제외)',
            four: '연 ~ 24% 이내',
            five: '(연체금리 :대출금리의 최대 24%넘지않음)',
            six: '만기일시상환 및 원리금균등상환'
          }
        },
        {
          title: '전월세 대출',
          content: {
            one:
              '대출도 많고 등급도 안좋고 대출이 될까?내이름으로 된 전세,월세가 있다면 집주인 동의없이 가능',
            two:
              '만 20세이상 전세,(단,군미필 불가)임대잔존기간 6개월이상 임대차 보증금 1000만원 이상',
            three: '~ 2500만원(무소득자 제외)',
            four: '연 ~ 24% 이내',
            five: '(연체금리 :대출금리의 최대 24%넘지않음)',
            six: '만기일시상환 및 원리금균등상환'
          }
        },
        {
          title: '신용회복 및 회생 대출',
          content: {
            one:
              '회생 신청후 최저생계비로 생활하려고 하니 빠듯하시죠~회생 중 생활비가 필요하실때 추천',
            two: '만 20세 ~ 만55세 개인회생(사건번호만 나와도 가능)',
            three: '~ 2500만원(무소득자 제외)',
            four: '연 ~ 24% 이내',
            five: '(연체금리 :대출금리의 최대 24%넘지않음)',
            six: '만기일시상환 및 원리금균등상환'
          }
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
.solution {
  position: relative;
  .skew {
    background-color: white;
    width: 100%;
    height: 200px;
    transform: skewY(-4deg);
    transform-origin: 50% 50%;
    position: absolute;
    top: -100px;
    left: 0;

    box-shadow: 0px -20px 25px -5px rgba(0, 0, 0, 0.6),
      0px -15px 15px -10px rgba(0, 0, 0, 0.8);
    @media (min-width: 2000px) {
      transform: skewY(-2deg);
    }
  }
  .container {
    position: relative;
    z-index: 5;
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.smallAbout {
  h1 {
    font-size: 2rem;
    text-align: center;
  }
  .explanationSpan {
    text-align: center;
    color: #aaa;
    margin-bottom: 20px;
    margin-left: 15px;
    margin-right: 15px;
    opacity: 0.8;
    letter-spacing: -0.05em;
    line-height: 1.3;
    span {
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
    }
  }
}
.sub-box {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 300px;
  background-color: white;
  box-shadow: 0px 10px 20px -7px rgba(0, 0, 0, 0.8);
  transition: box-shadow 0.5s;
  border-radius: 20px;
  margin-bottom: 20px;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    transition: height 0.5s cubic-bezier(0.87, -0.41, 0.19, 1.44);
    background-color: rgba(0, 0, 0, 0.7);
    color: whitesmoke;
    .title {
      line-height: 60px;
      text-align: center;
    }
    .description {
      padding-left: 30px;
      padding-right: 30px;
      // overflow-y: auto;
      .overScroll {
        height: 150px;
        overflow-y: auto;
      }
    }
    .sub_contents {
      margin-bottom: 5px;
      font-size: 0.8rem;
    }
  }

  &:hover {
    box-shadow: 0px 10px 30px -2px rgba(0, 0, 0, 0.9),
      0px 10px 15px -3px rgba(0, 0, 0, 0.9);
    .content {
      height: 100%;
    }
  }
}
</style>
