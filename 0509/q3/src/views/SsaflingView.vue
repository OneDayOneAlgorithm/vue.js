<template>
    <div class="SsaflingView">
        <h2>시작</h2>
        <div>
        <i class="fa-solid fa-circle-chevron-left" @click="cant_go"></i>
        <img src="@/assets/happling.png" alt="" style="max-width: 100%; height: auto;">
        <i class="fa-solid fa-circle-chevron-right" @click="go_Ssaflower"></i>
        </div>        
        <h2>해플링</h2>
    </div>
</template>

<script>
export default {
    name: 'SsaflingView',
    methods : {
        cant_go(){
            alert('이전 진화 단계로 돌아갈 수 없습니다.')
        },
        go_Ssaflower(){
            this.$router.push({name: 'SsaflowerView'})
        }
    }
}
</script>
