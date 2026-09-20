<template>
  <div>
    <nav-header :user="currentUser"/>
    <router-view/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue'
import NavHeader from './layout/NavHeader.vue'
export default defineComponent({
  components:{
    NavHeader
  },
  setup () {
    const currentUser = ref(true)

    return {currentUser}
  }
})
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html,body,#app{
  height: 100%;
  width: 100%;
}
</style>
