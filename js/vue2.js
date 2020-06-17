const con = new Vue({
  el: "#elemento",
  data: {
    colorFondo: "bg-success",
    padding: "p-2",
    colorTexto: "text-white",
    cambioColor: true,
  },
  methods: {
    cambioColorFunc() {
      if ((this.cambioColor == false)) {
        this.cambioColor = true;
      } else {
        this.cambioColor = false;
      }
    },
  },
});
