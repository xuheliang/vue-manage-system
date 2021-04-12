<template>
  <div class="header">
    <div class="header-left">
      <div class="collapse-btn" @click="collapseChange">
        <i v-if="!collapse" class="el-icon-s-fold"></i>
        <i v-else class="el-icon-s-unfold"></i>
      </div>
      <div class="logo">后台管理系统</div>
    </div>
    
    <div class="header-right">
      <div class="header-user-icon">
        <!-- 全屏提示 -->
        <div class="btn-fullscreen" @click="handleFullSrceen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" plcaement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
        </div>
        <!-- 用户头像 -->
        <div class="user-avater">
          <img src="../assets/img/img.jpg" />
        </div>
        <!-- 用户下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <a href="https://github.com/lin-xin/vue-manage-system" target="_blank">
              <el-dropdown-item>项目仓库</el-dropdown-item>
            </a>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import bus from '../components/common/bus'
export default {
  data() {
    return {
      collapse: false,
      fullscreen: false,
      name: 'xhl',
      message: 2
    }
  },
  computed: {
    username() {
      let username = localStorage.getItem('ms_username')
      return username ? username : this.name
    }
  },
  methods: {
    handleCommand(command) {
      if(command === 'loginout'){
        localStorage.removeItem('ms_username')
        this.$router.push('/login')
      }
    },
    collapseChange() {
      this.collapse = !this.collapse
      bus.$emit('collapse',this.collapse)
    },
    handleFullScreen() {
      let element = document.documentElement
      if(this.fullscreen) {
        if(document.exitFullscreen) {
          document.exitFullscreen()
        }else if (document.webkitCancelFullScreen){
          document.webkitCancelFullScreen()
        }else if(document.mozCancelFullScreen){
          document.mozCancelFullScreen()
        }else{
          document.msExitFullscreen()
        }
      }else {
        if(element.requestFullscreen) {
          element.requestFullscreen();
        }else if(element.webkitRequestFullScreen){
          element.webkitRequestFullScreen();
        }else if(element.mozRequestFullScreen){
          element.mozRequestFullScreen();
        }else if(element.msRequestFullscreen){
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen
    },
    mounted() {
      if(document.body.clientWidth < 1500){
        this.collapseChange()
      }
    }
  }

}
</script>

<style  scoped>
</style>