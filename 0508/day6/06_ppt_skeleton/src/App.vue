<template>
  <div id="app">
    <h1>길이 {{ messageLength }}의 메시지 {{ msg }}를 입력받음</h1>
    <h3>x2 : {{ doubleLength }}</h3>
    <input type="text" @keyup.enter="changeMessage(inputData)" 
    v-model="inputData">
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  name: 'App',
  components: {
  },
  created(){
    this.$store.dispatch('loadMessage')
  },
  computed: {
    // message() {
    //   return this.$store.state.message
    // },
    ...mapState(['message']),
    // ...mapState({
    //   message: state => state.message
    // }),
    messageLength() {
        return this.$store.getters.messageLength
    },
    doubleLength() {
        return this.$store.getters.doubleLength
    },
  },
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    // changeMessage() {
      // const newMessage = this.inputData
      // this.actionsChangeMessage(newMessage)
      // this.inputData = null
    // },
    ...mapActions({
      actionsChangeMessage: 'changeMessage'
    }),
    onSubmit(){
      const newMessage = this.inputData
      this.actionsChangeMessage(newMessage)
      this.inputData = null
    }
  },
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
