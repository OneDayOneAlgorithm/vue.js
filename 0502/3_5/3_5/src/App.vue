<template>
  <div id="app">
    <div>
      <h1>App</h1>
        <input type="text" v-model="appData">
      <p>Parent Data : {{ parentData }}</p>
      <p>Child Data: {{ childData }}</p>
      <AppParent :app-data="appData" 
      @child-input="handleChildInput"
      @parent-input="handleParentInput"
      />
  </div>
  </div>
</template>

<script>
import AppParent from '@/components/AppParent'

export default {
  name: 'App',
  data(){
    return {
      appData : '',
      childData : '',
      parentData : '',
    }
  },
  methods:{
    handleChildInput(childData){
      this.childData = childData
    },
    handleParentInput(parentData){
      this.parentData = parentData
    }
  },

  components: {
    AppParent,
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
  border: 1px solid black;
}
</style>
