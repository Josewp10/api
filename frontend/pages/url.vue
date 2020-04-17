<template>
  <v-container grid-list-xs>
    <template>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-title style="">Ingrese la información requerida para agregar una nueva URL</v-title>
        <v-text-field
          v-model="url.nombre"
          :counter="15"
          :rules="reglas"
          label="Nombre"
          required
        ></v-text-field>

        <v-text-field
          v-model="url.url"
          :rules="reglas"
          label="URL"
          required
        ></v-text-field>

        <v-text-field
          v-model="url.descripcion"
          :counter="10"
          :rules="reglas"
          label="Descripción"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="guardarURL"
          >Guardar</v-btn
        >
      </v-form>
    </template>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      url: {},
      reglas: [v => !!v || "El campo es obligatorio."]
    };
  },
  methods: {
    guardarURL() {
      if (this.$refs.form.validate()) {
        //Ejecutar el axios
        console.log(this.url);
        let url = "http://localhost:3001/url";
        this.$axios
          .post(url, this.url)
          .then(respuesta => {
            console.log(respuesta);
          })
          .catch(error => {});
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
