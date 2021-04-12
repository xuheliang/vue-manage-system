<template>
  <div class="tags" v-if="showTags">
    <ul>
      <li class="tags-li" v-for="(item,index) in tagList" :class="{active: isActive(item.path)}" :key=index>
        <router-link :to="item.path" class="tags-li-title">
          {{item.title}}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)">
          <i class="el-icon-close"></i>
        </span>
      </li>
      <div class="tags-close-box">
        <el-dropdown @command="handleTags">
          <el-button size="mini" type="primary">
            标签选项<i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu size="small" slot="dropdown">
            <el-dropdown-item command="other">
              关闭其他
            </el-dropdown-item>
            <el-dropdown-item>
              关闭所有
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </ul>
  </div>
</template>

<script>
import bus from './bus'
export default {
  data() {
    return {
      tagList: []
    }
  },
  methods: {
    isActive(path) {
      return path === this.$route.path
    },
    closeTags(index) {
      const delItem = this.tagList.splice(index,1)[0]
      const item = this.tagList[index] ? this.tagsList[index] : this.tagsList[index-1]
      if(item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path)
      }else{
        this.$router.push('/')
      }
    },
    closeAll() {
      this.tagList = []
      this.$router.push('/')
    },
    closeOther(){
      const curItem = this.tagsList.filter(item=> {
        return item.path === this.$route.fullPath
      })
      this.tagsList = curItem
    },
    setTags(route){
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath
      })
      if(!isExist){
        if(this.tagsList.length >= 8){
          this.tagsList.shift()
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        })
      }
    }
  }
}
</script>

<style>

</style>