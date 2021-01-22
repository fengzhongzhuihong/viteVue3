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
  data() {
    return {
      count: 0,
    }
  },
  methods:{
    changeName:function () {
      console.log(this)
      this.$store.commit('changeName')
      console.log(this.$store.state.userName)
    }
  },
  setup(){
    const count = ref(0);
    console.log(count)
    const store=useStore()
    const a=reactive({state:'132'})
    const userName=computed(()=>store.state.userName)
    return {userName,...toRef(a)}
  }
}
</script>
