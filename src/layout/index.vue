<template>
  <div class="wrapper">
    <o-header></o-header>
    <o-slidebar></o-slidebar>
    <div class="content-box" :class="{'content-collapse':collapse}"> 
      <o-tags></o-tags>
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagList">
            <router-view></router-view>
          </keep-alive>
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import OHeader from './OHeader'
import OSlidebar from './OSlidebar'
import OTags from './OTags'
import bus from '@/components/common/bus'
export default {
  components: {
    OHeader,
    OSlidebar,
    OTags
  },
  data(){
    return {
      tagList: [],
      collapse: false
    }
  },
  created() {
    bus.$on('collapse-content',msg => {
      this.collapse = msg
    })

    bus.$on('tags',msg => {
      let arr = []
      for(let i=0,len=msg.length;i<len;i++){
        msg[i].name && arr.push(msg[i].name)
      }
      this.tagList = arr
    })
  }
}
</script>

<style lang="scss" scoped>
</style>