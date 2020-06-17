Vue.component("padre", {
  template: `
  <div class='p-5 bg-dark text-white'>
  <h2>Padre {{numeroPadre}}</h2>
  <h2>Hijo {{nombreHijo}}</h2>
  <hijo :numero=numeroPadre @nombreHijo="nombreHijo=$event"></hijo>
  <button class="btn btn-danger" @click="numeroPadre++">botón</button>
  </div>
  `,
  data() {
    return { numeroPadre: 105, nombreHijo: "" };
  },
});
//Hijo
Vue.component("hijo", {
  template: `
  <div class='p-5 bg-light text-dark'>
    Hijo
    <h2>{{numero}}</h2>
    <button @click=numero++>+</button>
    <h2>{{nombreHijo}}</h2>
  </div>
  `,
  props: ["numero"],
  data() {
    return { nombreHijo: "pepito" };
  },
  mounted() {
    this.$emit("nombreHijo", this.nombreHijo);
  },
});

const con = new Vue({
  el: "#elemento",
  data: {},
});
