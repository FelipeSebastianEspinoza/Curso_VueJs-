<template>
  <div>
    <div class="mt-5">
      <b-button variant="danger"> boton </b-button>
      <b-button variant="warning"> boton </b-button>
      <b-button variant="succsess"> boton </b-button>
      <b-button variant="info"> boton </b-button>
    </div>
    <div class="mt-5">
      <b-card
        title="titulo"
        img-src="https://picsum.photos/600/300/?image=25"
        tag="article"
        style="max-width: 20rem;"
        class="mb-2"
      >
        <b-card-text
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsum
          placeat odit ipsa illum. Rem explicabo, totam quia eligendi, iste
          voluptatibus omnis voluptates earum officia nemo soluta qui reiciendis
          ut?
        </b-card-text>
        <b-button variant="info">Boton</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
};
</script>
