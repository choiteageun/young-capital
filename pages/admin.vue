<template>
  <section>
    <div class="container">
      <div class="topTitle">
        <h1 class="title">Final Admin Page</h1>
      </div>
      <div class="flex topBtns">
        <el-button @click="tab = 'apply'" :type="tab === 'apply' ? 'primary' : 'warning'">신청목록</el-button>
        <el-button @click="tab = 'complete'" :type="tab === 'complete' ? 'primary' : 'warning'">승인목록</el-button>
        <el-button @click="tab = 'notice'" :type="tab === 'notice' ? 'primary' : 'warning'">공지사항</el-button>
        <el-button @click="tab = 'customer'" :type="tab === 'customer' ? 'primary' : 'warning'">고객관리</el-button>
        <el-button @click="tab = 'staff'" :type="tab === 'staff' ? 'primary' : 'warning'">직원관리</el-button>
      </div>
      <div>
        <transition name="tab" mode="out-in">
          <ApplyList v-if="tab === 'apply'"></ApplyList>
          <CompleteList v-else-if="tab === 'complete'"></CompleteList>
          <Customer v-else-if="tab === 'notice'"></Customer>
          <Notice v-else-if="tab === 'customer'"></Notice>
          <Staff v-else></Staff>
        </transition>
      </div>
    </div>
    <div class="admin-login">
      <p @click="handleLogout">로그아웃</p>
    </div>
  </section>
</template>
<script>
import ApplyList from '@/components/Admin/ApplyList.vue'
import CompleteList from '@/components/Admin/CompleteList.vue'
import Customer from '@/components/Admin/Customer.vue'
import Notice from '@/components/Admin/Notice.vue'
import Staff from '@/components/Admin/Staff.vue'

export default {
  layout: 'admin',
  data() {
    return {
      tab: 'apply'
    }
  },
  methods:{
    async handleLogout() {
      await this.$axios.get('/api/auth/logout')
      this.$store.commit('logout')
      this.$router.push('/adminLogin')
    }
  },
  components: {
    ApplyList,
    CompleteList,
    Customer,
    Notice,
    Staff
  },
  updated() {
    console.log(this.tab)
  },
  //컴포넌트가 로딩되기 전에 실행되는 함수, {페이지 컴포넌트만 사용 가능}
  async fetch({ store, app, redirect }) {
    //로그인 되어있는지 검사
    console.log("스토어 : ")
    console.log(store.state.info.id)
    if (!store.state.logged || (store.state.info.id !== 3)) {
      redirect('/')
    }
    try {
      const data = await app.$axios.$get('/api/consultation')
      store.commit('setApplyList', data)

      const staffs = await app.$axios.$get('/api/user')
      store.commit('setStaffList', staffs)
    } catch (e) {
      console.log(e)
      redirect('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  min-height: 95vh;
}
.topTitle {
  text-align: center;
  margin-top: 50px;
}
.topBtns {
  margin-top: 15px;
  margin-bottom: 15px;
}
.title {
  font-size: 40px;
  margin: 20px 0 40px 0;
}
/* 트랜지션 내내 적용되는 클래스 */
.tab-enter-active,
.tab-leave-active {
  transition: opacity 0.5s;
}

/* 트랜지션 및 첫 프레임에 적용되었다가 사라지는 클래스 즉, css 초기값 */
.tab-enter,
.tab-leave-to {
  opacity: 0;
}

.admin-login {
  padding: 20px 0;
  background-color: $primary-dark;
  text-align: center;
  color: white;
  p {
    cursor: pointer;
  }
}
</style>