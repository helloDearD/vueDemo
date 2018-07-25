<template>
    <div>
       <mt-swipe class="mint-swipe-height" :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
       </mt-swipe>
    </div>
</template>
<script>
export default {
    methods:{
        getLunbotu(){
            this.$http.get("http://vue.studyit.io/api/getlunbo").then(res=>{
                console.log(res)
            })
        }
    },
    created(){
        this.getLunbotu();
    }
}
</script>

<style scoped>
.mint-swipe-height{
 height: 200px
}
.mint-swipe-item:nth-child(1){
    background: red
}
.mint-swipe-item:nth-child(2){
    background: yellow
}
.mint-swipe-item:nth-child(3){
    background: green
}
</style>

