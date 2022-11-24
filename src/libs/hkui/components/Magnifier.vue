<template>
  <div 
  v-my-magnifier
  class="img-wrap"
  :style="{
    width: imgWidth + 'px',
    height: imgHeight + 'px',
  }"
  >
    <a class="mag-wrap"
    :href="link"
    :target="bank ? '_blank' : ''"
    :style="{
      width: magWidth + 'px',
      height: magHeight + 'px',
    }"
    >
      <img 
      class="img-wrap"
      :src="imgUrl"
      :alt="imgAlt"
      :style="{
        width: imgWidth + 'px',
        height: imgHeight + 'px',
      }"
      />
    </a>
    <a 
      class="static-lk"
      :href="link"
    
    >
    <img 
      class="static-img"
      :src="imgUrl"
      :alt="imgAlt"
      />
    </a>
  </div>
</template>

<script setup>
import {magnifier as vMyMagnifier} from '../directives/magnifier'
const props = defineProps({
  imgWidth: {
    type: Number,
    default: 375
  },
  imgHeight: {
    type: Number,
    default: 500
  },
  magWidth: {
    type: Number,
    default: 100
  },
  magHeight: {
    type: Number,
    default: 100
  },
  bank: {
    type: Boolean,
    default: false
  },
  imgUrl: {
    type: String,
    default: ''
  },
  imgAlt: {
    type: String,
    default: ''
  },
  link: {
    type: String,
    default: ''
  },
})
</script>

<style lang="less" scoped>
.img-wrap{
  border: 1px solid #ddd;
  box-shadow: 0 0 5px #999;
  position: relative;
  .static-img{
    width: 100%;
  }
  .mag-wrap{
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
    cursor: move;
    overflow: hidden;
    border-radius: 50%;
    &.show{
      display: block;
      transform: scale(1.5);
    }
    .img-wrap{
      position: absolute;
      top: 0;
      left: 0;
    }
  }
}
</style>