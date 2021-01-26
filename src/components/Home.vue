<template>
  <router-link to="/foo">Go to Foo</router-link>
  <div @click="jump('foo')">
    跳转到foo
  </div>
  <div @click="jump('echart')">
    跳转到echart
  </div>
<!--  <div>-->
<!--    <p>数字为：{{num}}</p>-->
<!--    <p>两倍为：{{double}}</p>-->
<!--   <span> {{all}}</span>-->
<!--    <button @click="sum()">累加</button>-->
<!--  </div>-->
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</template>

<script>
import { ref, onMounted, computed } from "vue"; // 导入Vue3中的核心方法

export default {
  name: 'Home',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0,
    }
  },
  methods:{
jump:function (path) {
  this.$router.push(path||'/foo')
//   this.$router.push({ name: 'user', params: { userId }}) // -> /user/123
//   this.$router.push({ path: `/user/${userId}` }) // -> /user/123
// // 这里的 params 不生效
//   this.$router.push({ path: '/user', params: { userId }}) // -> /user
}
  },
  setup(){
    const num = ref(666); // 定义一个响应式的常量
    const all = ref(0); // 定义一个响应式的常量
     const sum = () =>{ all.value=num.value+double.value}; // 定义一个方法

    const double = computed(() => num.value+1) // 定义一个计算属性

    onMounted(() => {
      console.log('页面加载完执行的生命周期钩子函数')
    })

    // ...等等都可以定义在setup函数中

    return { // 导出定义的变量和方法，在模板中使用
      num,
      sum,
      double,all
    }
  }
}
</script>
