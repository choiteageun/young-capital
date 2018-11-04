<template>
  <div>
    <section class="display">
      <div class="content">
        <el-row :gutter="20">
          <el-col :md="{span: 9, offset: 0}" :sm="{ span: 16, offset:4 }">
            <div class="box consulBox">
              <h1 class="center">전문가에게 상담신청</h1>
              <el-form ref="consulForm" :model="createUserData" :rules="rules" label-width="80px" @submit.native.prevent="createUser" class="consulForm">
                <el-form-item label="이름" prop="name">
                  <el-input v-model="createUserData.name"></el-input>
                </el-form-item>
                <el-form-item label="연락처" prop="tel">
                  <el-input v-model="createUserData.tel"></el-input>
                </el-form-item>
                <el-form-item label="대출금액" prop="loanAmount">
                  <el-input v-model="createUserData.loanAmount"></el-input>
                </el-form-item>
                <el-form-item label="문의내용" prop="note">
                  <el-input v-model="createUserData.note" type="textarea"></el-input>
                </el-form-item>
                <el-form-item label="동의" prop="agree">
                  <el-checkbox v-model="createUserData.agree" true-label="true" :false-label="0" type="success" label="개인정보 취급방침"></el-checkbox>
                </el-form-item>
                <el-button style="width:100%; margin-top:10px;" type="success" native-type="submit">상담신청</el-button>
              </el-form>
            </div>
          </el-col>
          <el-col :md="15">
            <div class="box carouselBox">
              <el-carousel height="415px" :interval="5000" arrow="always">
                <el-carousel-item>
                  <div class="carouselIcon"><span><i style="color:#2fb0f2;" class="smileIcon far fa-grin-hearts"></i></span></div>
                  <div style="margin-left:5px;border-left:3px solid #2fb0f2;box-sizing:border-box;">
                    <p style="margin-left:10px;margin-top:10px;color:#eee;width:100%;text-shadow: rgba(0, 0, 0, 1) 1px 1px 1px,rgba(255, 255, 255, 0.4) 1px 1px 10px;">고객 대응을 신속 정확하게</p>
                    <h1 style="color:#2fb0f2;">고객만족 <span style="color:#4fd0ff;font-size:1.5rem;">SATISFY</span></h1>
                    <h3>하루의 시작을 고객의 고민들과 함께 시작합니다.</h3>
                    <h3>현재에 만족하지 않고 끊임없이 고객의 만족을 위해 변화해 나가겠습니다.</h3>
                    <h3>많은 분들의 성원에 보답하겠습니다.</h3>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="carouselIcon"><span><i style="color:#67c23a;" class="smileIcon far fa-handshake"></i></span></div>
                  <div style="margin-left:5px;border-left:3px solid #67c23a;box-sizing:border-box;">
                    <p style="margin-left:10px;margin-top:10px;color:#eee;width:100%;text-shadow: rgba(0, 0, 0, 1) 1px 1px 1px,rgba(255, 255, 255, 0.4) 1px 1px 10px;">고객 입장에서 쉽고 간편하게</p>
                    <h1 style="color:#67c23a">고객편의 <span style="color:#87e25a;font-size:1.5rem;">CONVENIENT</span></h1>
                    <h3>고객의 입장에 서서 생각하겠습니다.</h3>
                    <h3>끝까지 포기하지 않고 고객의 말에 귀 기울여 듣고 실현시키겠습니다.</h3>
                    <h3>여러분의 든든한 파트너가 되드리겠습니다.</h3>
                  </div>
                </el-carousel-item>
                <el-carousel-item>
                  <div class="carouselIcon"><span><i style="color:#5b5be4;" class="smileIcon fas fa-shield-alt"></i></span></div>
                  <div style="margin-left:5px;border-left:3px solid #5b5be4;box-sizing:border-box;">
                    <p style="margin-left:10px;margin-top:10px;color:#eee;width:100%;text-shadow: rgba(0, 0, 0, 1) 1px 1px 1px,rgba(255, 255, 255, 0.4) 1px 1px 10px;">고객을 가족처럼 생각하는</p>
                    <h1 style="color:#5b5be4">고객안전 <span style="color:#7b7bff;font-size:1.5rem;">SAFETY</span></h1>
                    <h3>저희 회사내에서는 안전만큼은 작은 실수도 용납하지 않습니다.</h3>
                    <h3>고객님의 프라이버시를 저희 가족의 일처럼 생각하고 지킬 것을 약속드립니다.</h3>
                    <h3>실망시켜드리지 않겠습니다.</h3>
                  </div>
                </el-carousel-item>
              </el-carousel>
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
import axios from 'axios'

export default {
  data() {
    return {
      createUserData: {
        name: '',
        tel: '',
        loanAmount: '',
        route: '웹DB',
        note: '',
        agree: false
      },
      rules: {
        name: [
          { required: true, message: '이름을 입력해주세요.', trigger: 'blur' }
        ],
        tel: [
          { required: true, message: '연락처을 입력해주세요.', trigger: 'blur' }
        ],
        loanAmount: [
          {
            required: true,
            message: '대출금액을 입력해주세요.',
            trigger: 'blur'
          }
        ],
        note: [
          {
            required: true,
            message: '문의내용을 입력해주세요.',
            trigger: 'blur'
          }
        ],
        agree: [
          {
            type: 'string',
            message: '개인정보 취급방침을 동의해주세요.',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    async createUser() {
      console.log(this.$refs)
      console.log(this.$refs.consulForm)
      this.$refs.consulForm.validate(async valid => {
        if (valid) {
          //검증성공
          const res = await axios.post('/api/consultation', {
            data: this.createUserData
          })
        } else {
          //검증실패
          return false
        }
      })
    }
  },
  mounted() {
    AOS.init()
  }
}
</script>
<style lang="scss" scoped>
.display {
  background-image: url('/img/main/main_background.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  min-height: 95vh;
  padding-bottom: 150px;

  .content {
    width: 992px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 120px;

    @media (max-width: 991px) {
      width: 600px;
      max-width: 80%;

      .el-row {
        display: flex;
        flex-direction: column-reverse;
        .el-col {
          margin-bottom: 20px;
        }
      }

      .el-carousel /deep/ .el-carousel__container {
        height: 250px !important;
      }
    }
    .el-col > .box {
      color: white;
    }
    .el-col > .consulBox {
      background-color: rgba(0, 0, 0, 0.5);
      box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.3) inset;

      padding: 20px;
    }
    .el-col > .carouselBox {
      // background-color: rgba(0, 0, 0, 0.5);
      padding: 20px;
      & /deep/ .el-carousel__arrow {
        display: none;
      }
      & /deep/ .el-carousel__indicators {
        display: none;
      }
      .carouselIcon{
        
        .smileIcon{
          color:black;
          font-size: 4rem;
          line-height: 4rem;
          margin-left: 50px;
          margin-top:30px;
          opacity: .8;
        }
      }
      h1 {
        text-shadow: rgba(0, 0, 0, 1) 1px 1px 1px;
        font-size: 3rem;
        font-weight: 400;
        margin-left: 30px;
      }
      h3 {
        color: white;
        font-weight: 400;
        opacity: 0.8;
        margin-left: 20px;
        font-size: 1rem;
        line-height: 1rem;
        text-shadow: rgba(0, 0, 0, 1) 1px 1px 1px,
          rgba(255, 255, 255, 0.4) 1px 1px 10px;
      }
    }
  }

  .consulForm {
    & /deep/ .el-form-item__label {
      color: white;
    }
    & /deep/ .el-textarea__inner {
      resize: none;
    }

    .el-checkbox /deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
      background-color: #67c23a;
      border-color: #67c23a;
    }
    .el-checkbox /deep/ .el-checkbox__input.is-checked + .el-checkbox__label {
      color: #67c23a;
    }
  }
}
</style>
