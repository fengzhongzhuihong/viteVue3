<template>
  <router-link to="/foo">Go to Foo</router-link>
  <div @click="jump">
    跳转到foo
  </div>
  <el-button icon="el-icon-search" circle></el-button>
  <el-button type="primary" icon="el-icon-edit" circle></el-button>
  <el-button type="success" icon="el-icon-check" circle></el-button>
  <el-button type="info" icon="el-icon-message" circle></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle></el-button>
  <el-button type="danger" icon="el-icon-delete" circle></el-button>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {ref, toRef} from "@vue/reactivity";


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
jump:function () {
  this.$router.push('/foo')
  this.$router.push({ name: 'user', params: { userId }}) // -> /user/123
  this.$router.push({ path: `/user/${userId}` }) // -> /user/123
// 这里的 params 不生效
  this.$router.push({ path: '/user', params: { userId }}) // -> /user
}
  },
  setup(){

  }
}
</script>
