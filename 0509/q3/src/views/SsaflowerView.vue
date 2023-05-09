<template>
  <div class="SsaflowerView">
      <h2>시작</h2>
      <i class="fa-solid fa-circle-chevron-left" @click="cant_go"></i>
      <img src="@/assets/happlower.png" alt="" style="max-width: 100%; height: auto;">
      <i class="fa-solid fa-circle-chevron-right" @click="go_home"></i>     
      <h2>해플라워</h2>
  </div>
</template>

<script>
export default {
  name: 'SsaflowerView',
  methods : {
    cant_go(){
            alert('이전 진화 단계로 돌아갈 수 없습니다.')
        },
      go_home(){
          this.$router.push({name: 'HomeView'})
      },

  }
}
</script>
