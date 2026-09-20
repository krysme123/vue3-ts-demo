<template>
  <div class="common-layout">
    <el-container>
      <el-main> 
        <el-row>
          <el-col v-for="item in cardList" :key="item._id" :span="6" style="padding:20px">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.avatar" class="image" />
              <div style="padding: 14px">
                <span>{{item.title}}</span>
                <div class="bottom">
                  <time class="time">{{ item.description }}</time>
                  <el-button text class="button">Operating</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">

import { defineComponent,ref,reactive } from 'vue'

export interface ColumnProps {
  _id: string;
  title: string;
  avatar: string;
  description: string;
}
export default defineComponent({
  setup () {
    const cardList =reactive ([
      {
        _id:"1",
        avatar:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        title:'Yummy hamburger',
        description:'1234454'
      }as ColumnProps  ,
      {
        _id:"1",
        avatar:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        title:'Yummy hamburger',
        description:'1234454'
      }as ColumnProps  ,
      {
        _id:"1",
        avatar:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        title:'Yummy hamburger',
        description:'1234454'
      }as ColumnProps  ,
      {
        _id:"1",
        avatar:'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        title:'Yummy hamburger',
        description:'1234454'
      }as ColumnProps  ,
    ])
    const currentDate = ref(new Date())
    return {currentDate,cardList}
  }
})
</script>

<style lang="scss" scoped>

.el-main{
  height: calc(100vh - 61px); //61px为顶部header盒子高度
  overflow-y: auto;
  margin: 0 auto;
}
.time {
  font-size: 12px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 0;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}
</style>
