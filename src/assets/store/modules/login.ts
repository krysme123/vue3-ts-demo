import { defineStore } from 'pinia';
import { sessionStorage }  from '../../utils/storage'
import type { UserState,LoginFormData } from '../../type/login'
import { login } from '../../request/login'
const useUserStore = defineStore({
  id: 'user',
  state:(): UserState => {
    return{
      token: sessionStorage.get('token') || '',
      username:''
    }
  },
  
  actions:{
    async loginAction(LoginForm: LoginFormData) {
      const res: any = await login(LoginForm)
      //commit('changeToken',res.data.token)
      this.token = res.data.token
      sessionStorage.set('token', res.data.token)
    }
  }
})

export default useUserStore
