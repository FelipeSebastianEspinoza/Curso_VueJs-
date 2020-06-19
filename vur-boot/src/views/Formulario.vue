<template>
  <div>
    <h1>Formulario</h1>
    <form>
      <b-row>
        <b-col clos="12">
          <b-form-input type="text" v-model="texto" :state="valida"></b-form-input>
          {{ texto }}
        </b-col>
      </b-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "form",
  data() {
    return {
      texto: "",
    };
  },
  computed: {
    valida() {
      return this.texto.length > 5 ? true : false;
    },
  },
};
</script>
