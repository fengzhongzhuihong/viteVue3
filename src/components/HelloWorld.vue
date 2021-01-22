<template>
  <h1>{{ msg }}</h1>
  <button @click="changeName()">count is: {{ count }}  {{userName}}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import {reactive, ref, toRef} from "@vue/reactivity";


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const count = ref(0)
    const store=useStore()
    const a=reactive({state:'132'})
     const changeName= ()=> {
      console.log(this)
       count.value++
      store.commit('changeName')
    }
    const userName=computed(()=>store.state.userName)
    return {userName,...toRef(a),changeName,count}}}
</script>
