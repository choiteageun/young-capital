<template>
  <header>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
    <nuxt-link to="/">
      <div class="logo">
        <p class="logoTitle">넘버원 대부중개</p>
      </div>
    </nuxt-link>
    <div class="menu-list">
      <div>
        <nuxt-link to="/product">
          <el-button type="text">대출 상품</el-button>
        </nuxt-link>
      </div>
      <div>
        <el-button @click="limitVisible= true" type="text">대출한도 간단 조회</el-button>
        <LimitIndex :visible.sync="limitVisible" />
      </div>
      <div>
        <nuxt-link to="/service">
          <el-button type="text">고객 만족 센터</el-button>
        </nuxt-link>
      </div>
      <div>
        <nuxt-link to="/about">
          <el-button type="text">회사 소개</el-button>
        </nuxt-link>
      </div>
    </div>
    <span class="sidebar-icon">
      <el-button @click="sidebarVisible = true" icon="el-icon-menu" circle type="primary"></el-button>
    </span>
    <transition name="fade">
      <div class="sidebar-wrapper" v-show="sidebarVisible">
        <div class="overlay" @click="sidebarVisible=false"></div>
        <transition name="slide">
          <aside class="sidebar" v-show="sidebarVisible">
            <el-menu :router="true">
              <el-menu-item index="product">
                <i class="el-icon-menu"></i>
                <span>대출 상품</span>
              </el-menu-item>
              <div>
                <span @click="limitVisible= true" type="text">대출한도 간단 조회</span>
                <LimitIndex :visible.sync="limitVisible" />
              </div>
              <el-menu-item index="service">
                <i class="el-icon-menu"></i>
                <span>고객 만족 센터</span>
              </el-menu-item>
              <el-menu-item index="about">
                <i class="el-icon-menu"></i>
                <span>회사 소개</span>
              </el-menu-item>
            </el-menu>
          </aside>
        </transition>
      </div>
    </transition>
  </header>
</template>
<script>
import LimitIndex from '@/components/Limit/LimitIndex.vue'
export default {
  components: { LimitIndex },
  data() {
    return {
      sidebarVisible: false,
      limitVisible: false
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding-left: 20px;
  padding-right: 20px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2);

  .logo > p {
    line-height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    text-shadow: rgba(255, 255, 255, 1) 1px 1px 2px,
      rgba(0, 0, 0, 1) 1px 1px 10px;
  }
  .menu-list {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;

    .el-button {
      padding-left: 10px;
      padding-right: 10px;
      line-height: 60px;
    }
  }

  .sidebar-icon {
    font-size: 22px;
    line-height: 60px;
    padding-left: 10px;
    padding-right: 10px;
    display: none;
  }
  @media (max-width: 767px) {
    .menu-list {
      display: none;
    }
    .sidebar-icon {
      display: inline;
    }
  }
}

.sidebar-wrapper {
  position: fixed;
  z-index: 1005;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  @media (min-width: 992px) {
    display: none;
  }
  .overlay {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .sidebar {
    position: absolute;
    top: 0;
    right: 0px;
    z-index: 2;
    height: 100%;
    width: 200px;
    background-color: white;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s;
}
.slide-enter,
.slide-leave-to {
  transform: translateX(200px);
}
</style>
