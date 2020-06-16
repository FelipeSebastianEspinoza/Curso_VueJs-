const con = new Vue({
  el: "#elemento",
  data: {
    contenido: "Hola Mundo",
    lenguajes: [
      {
        nombre: "Javascript",
        link: "https://www.javascript.com",
      },
      {
        nombre: "Python",
        link: "http://php.net",
      },
      {
        nombre: "Php",
        link: "http://www.python.org",
      },
    ],
    nuevoLenguaje: "",
    nuevoLink: "",
  },
  methods: {
    agregarLenguaje() {
      this.lenguajes.push({
        nombre: this.nuevoLenguaje,
        link: this.nuevoLink,
      });
    },
  },
});
