<template>
  <div>
    <div class="LoginContainner">
    <h2 class="title">WELCOME LOGIN</h2>
    <el-form
        ref="LoginFormRef"
        :model="LoginForm"
        status-icon
        :rules="rules" 
        label-width="80px"
        class="Login-form"
      >
      <!-- 账号 -->
      <!--prop="username"用来校验表单  -->
        <el-form-item label="账号" prop="username">
          <el-input v-model="LoginForm.username" autocomplete="off" />
        </el-form-item>
      <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="LoginForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="submitbtn">
          <el-button type="primary" @click="handleLogin(LoginFormRef)">登录</el-button>
          <el-button @click="handleLogin(LoginFormRef)">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs,ref } from 'vue'
import  useStore  from '../store'
import { sessionStorage } from '../utils/storage'
import {LoginFormData} from '../type/login'
import { ElForm } from 'element-plus';
import router from '@/router';
import { useRouter } from 'vue-router';
//动画

export default defineComponent({

  setup () {
    const LoginFormRef = ref(ElForm);
    const router = useRouter();
    const { user } = useStore()
    const store =user()
    const data = reactive({ 
      LoginForm:{
        username:'admin',
        password:'123456'
      } as LoginFormData
    })
    // 校验规则
    const rules =ref({
         username: [
            { required: true, message: '请输入正确的账号名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在3-5位', trigger: 'blur' },
          ],
         password: [
            { required: true, message: '请输入正确的密码', trigger: 'blur' },
            { min: 6, max: 10, message: '长度在6-10位', trigger: 'blur' },
          ],
      })
    // 登录
    function handleLogin() {
      // validate	对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。
      LoginFormRef.value.validate((valid: boolean) => {
        if (valid) {
          // 调用actions的方法，第一个参数login对应store文件名，loginAction对应函数名，第二个参数为修改的值
          store.loginAction(data.LoginForm).then(() => {
              setTimeout(()=>{
                router.push({path:'/'})
              },1000)
          })
        } else {
          return false;
        }
      });
    }
    return {...toRefs(data),rules,LoginFormRef,handleLogin}
  }
})
</script>

<style lang="scss" scoped>
.LoginContainner{
  width: 400px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  padding:40px;
  border-radius:20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .title{
    text-align:center;
    padding-bottom: 20px;
  }
  .submitbtn{
    margin-left: 60px;
  }
}

</style>