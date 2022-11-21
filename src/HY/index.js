/**
 * 依赖收集
 * 
 * 
 * 一对多 -〉 依赖收集
 * */ 

createImageBitmap('#app',{
  refs: {
    title: ref('this is title'), // {value}
    content: ref('this is content'),
  },
  methods: {
    setTitle() {
      this.title.value = '这是标题'
    },
    setContent() {
      this.content.value = '这是内容'
    }
  }
})