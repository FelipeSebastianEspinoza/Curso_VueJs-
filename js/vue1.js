const con = new Vue({
  el: "#elemento",
  data: {
    contenido: "Hola Mundo",
    lenguajes: [
      {
        nombre: "Javascript",
        link: "https://www.javascript.com",
        puntos: 10,
      },
      {
        nombre: "Python",
        link: "http://php.net",
        puntos: 5,
      },
      {
        nombre: "Php",
        link: "http://www.python.org",
        puntos: 1,
      },
    ],
    nuevoLenguaje: "",
    nuevoLink: "",
    nuevoPunto: "",
    total: 0,
  },
  methods: {
    agregarLenguaje() {
      this.lenguajes.push({
        nombre: this.nuevoLenguaje,
        link: this.nuevoLink,
        puntos: this.nuevoPunto,
      });
      this.nuevoLenguaje = "";
      this.nuevoLink = "";
      this.nuevoPunto = "";
      e.preventDefault(); // To prevent the form from submitting
    },
  },
  computed: {
    sumarPuntaje() {
      this.total = 0;
      this.lenguajes.forEach((element) => {
        this.total = this.total + element.puntos;
      });
      return this.total;
    },
  },
});
