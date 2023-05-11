<template>
  <div id="app">
    <h1 class=" fw-bold text-primary">SSAFY TUBE</h1>
    <div class="d-flex row" v-if="videoList">
    <iframe  :src="videoSrc"
    width = "500"
    height = "500">
    </iframe>
    <br>
    <div class="border shadow-sm p-3 mb-5 bg-body rounded " v-html="videoList[number].snippet.title"></div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      videoList : null,
      number : 0
    }
  },
  computed :{
    videoSrc(){
      return `https://www.youtube.com/embed/${this.videoList[this.number].id.videoId}`
    },
  },
  methods:{
    search(){
      const API_URL = 'https://www.googleapis.com/youtube/v3/search'
      axios({
        url: API_URL,
        params : {
          key : 'AIzaSyCY-9gl9IcGBwlwj2U7BUv8o9sgJWrfBXo',
          part : 'snippet',
          type : 'video',
          q : '메이플스토리',
        }
      })
      .then((response)=>{
        this.videoList = response.data.items
        console.log(this.videoList)
      })
    }
  },
  created(){
    this.videoList = this.search()
    console.log(this.videoList)
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
</style>
<!-- https://www.youtube.com/embed/5ZwOTM7k72o-->
<!--       return `https://www.youtube.com/embed/${this.selectedVideo.id.videoId}`
-->