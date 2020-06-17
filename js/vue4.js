Vue.component("componente", {
  template: `
  <div>
  <h1>{{numero}}</h1>
     <button @click="numero++">+</button>
  </div>
  `,
  data() {
    return {
      numero: 0,
    };
  },
});

/* */
/* */
/* */

const con = new Vue({
  el: "#elemento",
  data: {
    numero: 0,
  },
});
