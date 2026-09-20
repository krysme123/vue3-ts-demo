 /**
 * 登录表单类型声明
 */
 export interface LoginFormData {
    username:string
    password:string
 }
 export interface SignupFormData {
   username:string
   password:string
}
export interface UserState{
   token:string,
   username:string
 }
