<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <h2>예약페이지</h2>
    <h3>시간 선택</h3>
    <div class="box">
      <div :style="{backgroundColor: bgColor}" @click="bnt_click($event,time)" v-for="time in times" :key="time" class="time-box" >{{ time }}</div>
    </div>
    <br>
    <h3>선택 시간 : {{ clock.join('&nbsp;&nbsp;&nbsp;') }}</h3>
  </div>
</template>

<script>
import {data} from '@/assets/data'

export default {
  name: 'App',
  data(){
    return{
      times : data.times,
      clock : [],
      selectedButton: [],
      bgColor: ''
    }
  },
  methods: {
    bnt_click(event,time){
      const buttonElement = event.target
      if (this.clock.includes(time)){
        let index = this.clock.indexOf(time)
        this.clock.splice(index,1)
        buttonElement.style.backgroundColor = 'white'
        return 
      }
      if (this.clock.length === 5){
        alert('5타임까지만 신청할 수 있습니다.')
        return
      }
      buttonElement.style.backgroundColor = '#658dc63d'
      this.clock.push(time)
      
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.time-box{
  font-weight: bold;
  display: flex;
  color: gray;
  flex-basis: 20%;
  /* flex-grow: 1; */
  justify-content : center;
  height: 30px;
  align-items : center;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
}
.selected {
  background-color: rgb(185,226,245);
}
</style>
