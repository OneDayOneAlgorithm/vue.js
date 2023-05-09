<template>
    <div>
        <span>연봉 입력 (만원) : </span>
        <input v-model="number1" type="number">
        <br>
        <br>
        <span>세액감면액 (만원) : </span>
        <input v-model="number2" type="number">
        <hr>
        <h2>종합소득금액 : {{ Number(number1) }} 만원</h2>
        <h2>종합소득공제 : (-) {{ number3 }} 만원</h2>
        <h2 >과세표준 : {{ number4_cal }} 만원</h2>
        <hr>
        <TaxRate 
        :number2="Number(number2)"
        :number4="number4_cal"
        @number-seven="seven"
        />
        
    </div>
</template>

<script>
import TaxRate from '@/components/TaxRate'

export default {
    name : 'InCome',
    data(){
        return{
            number1 : '',
            number2 : '',
            number3 : 150

        }
    },
    components : {
        TaxRate,
    },
    computed:{
        number4_cal(){
            return Math.max(this.number1 - this.number3,0)
        }
    },
    methods:{
        seven(input){
            this.$emit('number-seven2',input)
        }
    }
}
</script>

<style>

</style>