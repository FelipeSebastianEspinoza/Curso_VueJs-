const con = new Vue({
  el: "#elemento",
  data: {
    texto: "programador novato",
    contador: 0,
  },
  computed: {
    alReves() {
      return this.texto.split("").reverse().join("");
    },
    tipoBarra() {
      if (this.contador < 0) {
        this.contador = 0;
      } else if (this.contador > 100) {
        this.contador = 100;
      }
      return {
        "bg-success": this.contador <= 50,
        "bg-warning": this.contador <= 80 && this.contador > 50,
        "bg-danger": this.contador <= 100 && this.contador > 80,
      };
    },
  },
});
