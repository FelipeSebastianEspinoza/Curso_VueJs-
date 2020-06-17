Vue.component("padre", {
  template: `
  <div class='p-5 bg-dark text-white'>
  <h2>Padre {{numeroPadre}}</h2>

  <hijo :numero=numeroPadre></hijo>
  <button class="btn btn-danger" @click="numeroPadre++">botón</button>
  </div>
  `,
  data() {
    return { numeroPadre: 105 };
  },
});
Vue.component("hijo", {
  template: `
  <div class='p-5 bg-light text-dark'>
  Hijo
  <h2>{{numero}}</h2>
  </div>
  `,
  props: ["numero"],
});

const con = new Vue({
  el: "#elemento",
  data: {},
});
