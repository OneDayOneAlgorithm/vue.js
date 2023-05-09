<template>
  <div class="home">
    <h1>점심메뉴</h1>
    <button @click="select_menu">Pick Lunch</button>
    <p>{{selected_menu}}</p>
    <br>
    <br>
    <h1>로또를 뽑아보자</h1>
    <button @click="goToLotto">Pick Lotto</button>
  </div>
</template>

<script>

// @ is an alias to /src
import _ from 'lodash'
export default {
  name: 'HomeView',
  data() {
    return {
    menu: ['국밥','떡볶이','우동','짜장면','닭가슴살','연어'],
    selected_menu : ''
  }
},
  methods:{
    goToLotto(){
      this.$router.push('/lotto/6')
    },
    select_menu(){
      this.selected_menu = _.sample(this.menu)
    }
  }
}
</script>
