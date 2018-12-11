<template>
  <div>

    <!-- <transition>
          <p class="danger" v-show="wrongPassword">비밀번호가 틀렸습니다.</p>
        </transition>

        <div slot="footer">
          <el-button @click="adminDialog=false">취소</el-button>
          <el-button type="primary" native-type="submit">로그인</el-button>
        </div> -->
    <div class="allContent">
      <div class="loginBox">
        <el-form
          @submit.native.prevent="handleAdminSubmit"
          label-width="80px"
        >
          <div class="loginTitle">
            <h1>Admin Login</h1>
          </div>
          <div class="loginIdBox">
            <el-form-item label="아이디">
              <el-select
                v-model="adminName"
                style="width:250px;"
              >
                <el-option
                  v-for="staff in adminNames"
                  :key="staff.id"
                  :label="staff.name"
                  :value="staff.name"
                ></el-option>
              </el-select>
            </el-form-item>
          </div>
          <div class="loginPwBox">
            <el-form-item label="비밀번호">
              <el-input
                type="password"
                v-model="adminPassword"
                style="width:250px;"
              ></el-input>
            </el-form-item>
          </div>
          <div class="transitionText">
            <p
              class="explainText"
              v-show="explainText"
            >관리자 정보를 입력한 후 비밀번호를 입력해주세요</p>
            <transition>
              <p
                class="danger"
                v-show="wrongPassword"
              >관리자 정보가 정확하지 않습니다.</p>
            </transition>
          </div>
          <div class="loginBoxFooter">
            <el-button
              type="primary"
              native-type="submit"
            >로그인</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import ip from 'ip'

export default {
  layout: 'empty',
  data() {
    return {
      adminName: '',
      adminNames: [],
      adminPassword: '',
      wrongPassword: false,
      explainText: true
    }
  },
  methods: {
    async handleAdminSubmit() {
      console.log(ip)
      try {
        const info = await this.$axios.$post('/api/auth/login', {
          password: this.adminPassword,
          name: this.adminName
        })

        this.$store.commit('login', info)
        this.wrongPassword = false
        this.explainText = true

        //관리자 {id: 1번} 나머지는 worker 로 이동
        if (info.id === 3) {
          this.$router.push('/admin')
        } else {
          this.$router.push('/worker')
        }
      } catch (e) {
        this.wrongPassword = true
        this.explainText = false
      }
    }
  },
  async mounted() {
    const data = await this.$axios.$get('/api/user')
    this.adminNames = data
  }
}
// catch (e) {
//         //로그인 실패
//         this.wrongPassword = true
//       }
//     },
//     async handleLogout() {
//       await axios.get('/api/auth/logout')
//       this.$store.commit('logout')
//     }
//   },
//   async mounted() {
//     const data = await this.$axios.$get('/api/user')
//     this.adminNames = data
//   }
// }
</script>
<style lang="scss" scoped>
.allContent {
  padding-top: 60px;
  width: 100%;
  .loginTitle {
    padding-top: 20px;
    h1 {
      text-align: center;
    }
  }
  .loginBox {
    margin-top: 50px;
    background-color: rgba(0, 0, 0, 0);
    width: 400px;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  .loginBoxFooter {
    text-align: center;
    .el-button {
      width: 80%;
    }
  }
  .transitionText {
    width: 100%;
    height: 50px;
    text-align: center;
    .explainText {
      color: #ccc;
    }
    .danger {
      font-weight: 700;
      color: red;
    }
  }
}
</style>