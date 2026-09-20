<template>
  <div>
    <el-header> 
          <div><span>小吴论坛</span></div>
          <div class="right-container" v-if="isLogin">
            <router-link to="/login"><el-button type="primary">登录</el-button></router-link>
            <router-link to="/signup"><el-button type="primary" plain>注册</el-button></router-link>
          </div>
          <div class="right-container" v-else>
            <el-button type="primary">欢迎</el-button>
          </div>
      </el-header>
  </div>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
export interface UserProps {
  isLogin: boolean;
}
export default defineComponent({
  props: {
    user: {
      type: Boolean,
      required: true
    }
  },
  setup (props) {
    const isLogin =ref(props.user)
    console.log(isLogin)
    return {isLogin}
  }
})
</script>

<style lang="scss" scoped>
.el-header{
  height:61px;
  display: flex;
  justify-content: space-between;
  color: rgb(140, 136, 136);
  background-color: #fff;
  border-bottom: 2px solid #F6F6F6;
  box-shadow:   0px 12.1px 24.1px rgba(0, 0, 0, 0.039), 0px 40px 80px rgba(0, 0, 0, 0.06);
  
  // 嵌套
  > div{// 弹性布局
      display: flex;// 纵向上居中对齐
      align-items: center;// 给文本和图片添加间距，使用类选择器
    span{
      margin-left: 200px;
      font-size: 20px;
      font-weight: bold;
    }
  }
  >.right-container{
    margin-right: 200px;
    >.el-button{
      border:1px #fff solid;
    }
    .router-link-active{
      padding: 10px;
    }
  }
}
</style>
