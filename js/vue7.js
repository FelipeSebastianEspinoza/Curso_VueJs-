//Padre
Vue.component("padre", {
  template: `
    <div class="p-5 bg-dark text-white">
      <button @click="suma">+</button>
      <button @click="resta(2)">-</button>
      <h2>número {{numero}} </h2>
      <h2>edad {{edad}} </h2>
      <hijo></hijo>
    </div>
  `,
  computed: {
    ...Vuex.mapState(["edad", "numero"]), //esto hace le código comentado

    /*
    numero() {
      return store.state.numero;
    },
    edad() {
      return store.state.edad;
    },
    */
  },
  methods: {
    ...Vuex.mapMutations(["suma", "resta"]),
  },
});
//Hijo
Vue.component("hijo", {
  template: `
    <div class="p-5 bg-info text-white"> 
      <button @click="suma">+</button>
      <button @click="resta(1)">-</button>
      <h2> número {{$store.state.numero}} </h2>
    </div>
  `,
  computed: {
    ...Vuex.mapState(["edad", "numero"]),
  },
  methods: {
    ...Vuex.mapMutations(["suma", "resta"]),
  },
});

const store = new Vuex.Store({
  state: {
    numero: 5,
    edad: 9,
  },
  mutations: {
    suma(state) {
      state.numero++;
    },
    resta(state,num) {
      state.numero=state.numero-num;
    },
  },
});

const con = new Vue({
  el: "#elemento",
  store: store,
});
