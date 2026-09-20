<template>
    <div>
    <img src="" alt="">
    <div class="SignupContainner">
    <h2 class="title">WELCOME SIGNUP</h2>
    <el-form
        ref="SignupFormRef"
        :model="SignupForm"
        status-icon
        :rules="rules" 
        label-width="80px"
        class="signup-form"
      >
      <!-- 账号 -->
      <!--prop="username"用来校验表单  -->
        <el-form-item label="账号" prop="username">
          <el-input v-model="SignupForm.username" autocomplete="off" />
        </el-form-item>
      <!-- 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input v-model="SignupForm.password" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item class="submitbtn">
          <el-button type="primary" @click="handleLogin(SignupFormRef)">注册新用户</el-button>
        </el-form-item>
      </el-form>
  </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs,ref } from 'vue'
import {SignupFormData} from '../type/login'
import { ElForm } from 'element-plus';
import {login} from '../request/login'
import router from '@/router';
import { useRouter } from 'vue-router';

export default defineComponent({

  setup () {
    const SignupFormRef = ref(ElForm);
    const router = useRouter();
    const data = reactive({ 
      SignupForm:{
        username:'admin',
        password:'123456'
      } as SignupFormData
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
    // function handleLogin(formName:string) {
    //   console.log(formName);
    //   // validate	对整个表单的内容进行验证。 接收一个回调函数，或返回 Promise。
    //   SignupFormRef.value.validate((valid: boolean) => {
    //     if (valid) {
    //       // console.log(valid);
    //       // console.log(data.SignupForm)
    //       login(data.SignupForm).then((res)=>{
    //         console.log(res);
    //         router.push({path:'/'})
    //       })

    //     } else {
    //       return false;
    //     }
    //   });
    // }
    return {...toRefs(data),rules,SignupFormRef}
  }
})
</script>

<style lang="scss" scoped>

.SignupContainner{
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