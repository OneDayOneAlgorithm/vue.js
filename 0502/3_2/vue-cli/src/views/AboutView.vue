<template>
  <div class="about">
    <h1>로또</h1>
    <button @click="selected_num">Get Lucky Numbers</button>
    <p>{{ num }}</p>
  </div>
</template>

<script>
import _ from 'lodash'
  export default{
    name : 'AboutView',
    data(){
      return{
        num:''
      }
    },
    methods:{
      selected_num(){
        this.num = _.sampleSize(_.range(1,46),6)
      }
    }
  }
</script>