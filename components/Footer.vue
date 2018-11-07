<template>
  <div>
    <footer class="footer">
      <div class="allContainer">
        <el-row>
          <el-col class="footerContent" :md="6" :sm="12">
            <div class="contents">
              <h1 class="footerTitle">ABOUT</h1>
              <div class="content companyInfo">
                <p class="abo_oneLine">
                  <el-row>
                    <el-col span="6"><i class="icon far fa-building"></i></el-col>
                    <el-col span="18"><span>넘버원 대부중개</span></el-col>
                  </el-row>
                </p>
                <p class="abo_twoLine">
                  <el-row>
                    <el-col span="6"><i class="icon far fa-clipboard"></i></el-col>
                    <el-col span="18"><span>123-45-678910</span></el-col>
                  </el-row>
                </p>
                <p class="abo_threeLine">
                  <el-row>
                    <el-col span="6"><i class="icon fas fa-phone"></i></el-col>
                    <el-col span="18"><span>070 7049 0620 </span></el-col>
                  </el-row>
                </p>
                <p class="abo_fourLine">
                  <el-row>
                    <el-col span="6"><i class="icon fas fa-at"></i></el-col>
                    <el-col span="18"><span>information@naver.com</span></el-col>
                  </el-row>
                </p>
                <p class="abo_fiveLine">
                  <el-row>
                    <el-col span="6"><i class="icon fas fa-map-marked-alt"></i></el-col>
                    <el-col span="18"><span>서울특별시 강북구 한천로124가길 53, 103호</span></el-col>
                  </el-row>
                </p>
                <p class="abo_sixLine">
                  <el-row>
                    <el-col span="6"><i class="icon far fa-user"></i></el-col>
                    <el-col span="18"><span>김민주</span></el-col>
                  </el-row>
                </p>
              </div>
            </div>
          </el-col>
          <el-col class="footerContent" :md="6" :sm="12">
            <div class="contents">
              <h1 class="footerTitle">INTRODUCE</h1>
              <div class="content introduce">
                <div>
                  <img class="footerIntroImg" src="img/main/footer_1.jpg" />
                </div>
                <div class="footerIntroText">
                  <span>넘버원대부중개는 단기적인 이익을 위한 고객의 대출을 유도하지 않고 지속 가능한 파트너쉽으로 유지 될 수 있도록 체계적인 컨설팅을 제공합니다.</span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="footerContent" :md="6" :sm="12">
            <div class="contents">
              <h1 class="footerTitle">COMPANY POLICY</h1>
              <div class="content companyContent">
                <div>
                  <p>개인정보 취급 방침</p>
                </div>
                <div>
                  <p>이용약관</p>
                </div>
                <div>
                  <p>책임한계 및 법적고지</p>
                </div>
                <div>
                  <p>SMS 및 메일링 서비스약관</p>
                </div>
                <div>
                  <p>인재채용</p>
                </div>
              </div>
            </div>
          </el-col>
          <el-col class="footerContent" :md="6" :sm="12">
            <div class="contents">
              <h1 class="footerTitle">COMMUNITY</h1>
              <div class="communityContent">
                <div class="kakaoCon iconBox">
                  <img src="img/main/naver.png">
                </div>
                <div class="naverCon iconBox">
                  <img src="img/main/kakaotalkIcon.png">
                </div>
                <div class="bandCon iconBox">
                  <img src="img/main/band.jpg">
                </div>
              </div>
              <div class="content ">

              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- <p v-if="!$store.state.logged" @click="adminDialog= true">
        로그인
      </p>

      <p v-if="$store.state.logged">
        <span @click="handleLogout">로그아웃</span>
        <nuxt-link to="/admin">
          <span style="color: white;">관리자 페이지</span>
        </nuxt-link>

      </p> -->
    </footer>
    <!-- <el-form @submit.native.prevent="handleAdminSubmit" label-width="80px">
      <el-dialog title="로그인" :visible.sync="adminDialog" width="400px">
        <p style="margin-bottom:15px;">양식을 채워주세요</p>
        <el-form-item label="직원 이름">
          <el-select v-model="adminName" style="width: 100%">
            <el-option v-for="staff in adminNames" :key="staff.id" :label="staff.name" :value="staff.name"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="비밀번호">
          <el-input type="password" v-model="adminPassword"></el-input>
        </el-form-item>

        <transition>
          <p class="danger" v-show="wrongPassword">비밀번호가 틀렸습니다.</p>
        </transition>

        <div slot="footer">
          <el-button @click="adminDialog=false">취소</el-button>
          <el-button type="primary" native-type="submit">로그인</el-button>
        </div>
      </el-dialog>
    </el-form> -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      adminDialog: false,
      adminName: '',
      adminNames: [],
      adminPassword: '',
      wrongPassword: false
    }
  },
  methods: {
    async handleAdminSubmit() {
      try {
        const info = await this.$axios.$post('/api/auth/login', {
          password: this.adminPassword,
          name: this.adminName
        })

        //로그인 성공
        this.$store.commit('login', info)
        this.wrongPassword = false
        this.adminDialog = false
      } catch (e) {
        //로그인 실패
        this.wrongPassword = true
      }
    },
    async handleLogout() {
      await axios.get('/api/auth/logout')
      this.$store.commit('logout')
    }
  },
  async mounted() {
    const data = await this.$axios.$get('/api/user')
    this.adminNames = data
  }
}
</script>
<style lang="scss" scoped>
.footer {
  background-color: #715d60;
  .footerContent {
    max-width: 1000px;
    margin-right: auto;
    margin-left: auto;
    font-size: 14px;
    color: #ccc;
    cursor: pointer;

    .footerTitle {
      text-align: center;
    }
    .content {
      margin-left: 20px;
      margin-right: 20px;
      color: white;
    }
    .contents {
      padding-top: 20px;
      padding-bottom: 20px;
      height: 400px;
      .companyInfo {
        .icon {
          margin-left: 10px;
          margin-right: 50px;
        }
        p {
          line-height: 40px;
          border-bottom: 1px solid #ccc;
        }
      }

      .introduce {
        text-align: center;
        .footerIntroImg {
          width: 100%;
          max-width: 400px;
          height: 150px;
          object-fit: cover;
          border-radius: 20px;
          opacity: 0.9;
          box-shadow: 2px 2px 10px -2px rgba(0, 0, 0, 0.5);
        }
        .footerIntroText {
          text-shadow: rgba(0, 0, 0, 1) 1px 1px 2px,
            rgba(255, 255, 255, 0.5) 1px 1px 15px;
          margin-top: 40px;
          line-height: 20px;
        }
      }
      .companyContent {
        padding-top: 20px;
        padding-left: 40px;
        p {
          font-size: 0.9rem;
          line-height: 50px;
        }
      }
      .communityContent {
        padding-top: 50px;
        padding-left:50px;
        .iconBox {
          line-height:50px;
          img {
            width: 30px;
            height: 30px;
          }
        }
      }
    }
  }
}
</style>
