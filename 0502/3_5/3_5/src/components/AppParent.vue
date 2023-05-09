<template>
    <div>
      <h1>AppParent</h1>
      <input type="text" 
      v-model="parentData"
      @keyup.enter="emitParentInputEvent">
  
      <p>App Data : {{ appData }}</p>
      <p>Child Data: {{ childData}} </p>
      <AppChild 
      :app-data="appData"
      :parent-data="parentData"
      @child-input="handleChildInput"/>
    </div>
  </template>
  
  <script>
  
  import AppChild from '@/components/AppChild'
  export default {
    name : 'AppParent',
    data(){
      return {
        parentData : '',
        childData : ''
      }
    },
    methods:{
      handleChildInput(childData){
        // console.log('자식이 엔터쳤어')
        // console.log(childData)
        this.childData = childData
        this.$emit('child-input',childData)
      },
      emitParentInputEvent(){
        this.$emit('parent-input',this.parentData)
      }
    },
    props:{
      appData:String,
    },
    components:{
      AppChild,
    }
  }
  </script>
  
  <style>
  
  </style>