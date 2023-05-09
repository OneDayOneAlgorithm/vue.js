<template>
    <div>
        <h2>산출세액 : {{ number5_cal }} 만원</h2>
        <h2>세액감면 : (-) {{ number2 }} 만원</h2>
        <hr>
        <FinalTax msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<script>
import FinalTax from '@/components/FinalTax'
export default {
    name : 'TaxRate',
    components : {
        FinalTax,
    },
    props : {
        number2 : Number,
        number4 : Number,
    },
    data() {
        return{
            number5 : 0
        }
    },
    computed : {
        number5_cal(){
            if (this.number4 <= 1200){
                this.$emit('number-seven',Math.round(this.number4**0.06))
                return Math.round((this.number4)*0.06)
            }
            else if (this.number4 <= 4600){
                this.$emit('number-seven',Math.round(this.number4*0.15 - 108))
                return Math.round(this.number4*0.15 - 108)
            }
            else if (this.number4 <= 8800){
                this.$emit('number-seven',Math.round(this.number4*0.24 - 522))
                return Math.round(this.number4*0.24 - 522)
            }
            else if (this.number4 <= 15000){
                this.$emit('number-seven',Math.round(this.number4*0.35 - 1490))
                return Math.round(this.number4*0.35 - 1490)
            }
            else if (this.number4 <= 30000){
                this.$emit('number-seven',Math.round(this.number4*0.38 - 1940))
                return Math.round(this.number4*0.38 - 1940)
            }
            else if (this.number4 <= 50000){
                this.$emit('number-seven',Math.round(this.number4*0.40 - 2540))
                return Math.round(this.number4*0.40 - 2540)
            }
            else if (this.number4 <= 100000){
                this.$emit('number-seven',Math.round(this.number4*0.42 - 3540))
                return Math.round(this.number4*0.42 - 3540)
            }
            else {
                this.$emit('number-seven',Math.round(this.number4*0.45 - 6540))
                return Math.round(this.number4*0.45 - 6540)
            }
        },
    }
}
</script>

<style>

</style>