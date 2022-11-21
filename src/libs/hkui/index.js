import  Magnifier from './components/Magnifier.vue'

let HyUI = {}


HyUI.install = function (Vue) {
  Vue.component('Magnifier', Magnifier)
}

export default HyUI