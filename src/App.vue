<script setup>
import { reactive, toRefs, ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const state = reactive({
  imgUrl: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F20%2F20151220183506_iXnQc.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1671635379&t=a26b4a695ae205184288478fa4c29cf2',
  imgWidth: 373,
  imgHeight: 560
})
const {imgUrl,imgWidth,imgHeight}  = toRefs(state)
const deadline = new Date('2022-11-28 23:59:59')
let countLabel = ref('')
function countdown () {
  // debugger
  const now = new Date(), timeRemainning = deadline - now;
  let day, hour, minute, second;
  if (timeRemainning < 0) {return 0;}
  second = Math.floor(timeRemainning/1000%60)
  minute = Math.floor(timeRemainning/1000/60%60)
  hour = Math.floor(timeRemainning/1000/60/60%24)
  day = Math.floor(timeRemainning/1000/60/60/24)
  countLabel.value = `${day}天${hour}时${minute}分${second}秒`
  console.log(countLabel)
  setTimeout(countdown,1000)
}
countdown()
</script>

<template>
  <div>{{countLabel}}</div>
  <div class="wrapper">
    <Magnifier  
    :imgUrl="imgUrl"
    :imgHeight="imgHeight"
    :imgWidth="imgWidth"
    />
  </div>

</template>

<style scoped>
.wrapper{
  width: 373px;
  /* margin-left: 100px; */
  margin: 100px auto;
  overflow: hidden;
}
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
