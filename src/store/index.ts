import { createStore } from "vuex";
interface State {
  userName: string;
}
export default createStore({
  state: { userName: "xiuluo" },
  mutations:{
    changeName:(state)=>{
      state.userName +="@@"
    }
  }
});
