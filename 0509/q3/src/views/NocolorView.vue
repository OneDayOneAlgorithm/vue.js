<template>
    <div class="NocolorView">
        <h2>시작</h2>
        <i class="fa-solid fa-circle-chevron-left" @click="go_home"></i>
        <img src="@/assets/happeed.png" alt="" style="max-width: 100%; height: auto;">
        <i class="fa-solid fa-circle-chevron-right" @click="go_Ssafling"></i>     
        <h2>해피드</h2>
    </div>
</template>

<script>
export default {
    name: 'NocolorView',
    methods : {
        go_home(){
            this.$router.push({name: 'HomeView'})
        },
        go_Ssafling(){
            this.$router.push({name: 'SsaflingView'})
        }
    }
}
</script>
