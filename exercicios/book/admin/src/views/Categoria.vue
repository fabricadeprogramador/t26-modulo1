<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="categoria.descricao"></v-text-field>
        <v-btn @click="salvar()">Salvar</v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="arrCategorias"
          :items-per-page="5"
          class="elevation-1"
        ></v-data-table>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar">
      {{ mensagem.texto }}
      <v-btn color="indigo" text @click="snackbar = false">Fechar</v-btn>
    </v-snackbar>
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      headers: [
        {
          text: "Descrição",
          align: "left",
          sortable: true,
          value: "descricao"
        }
      ],

      snackbar: false,
      categoria: {},
      arrCategorias: [],
      mensagem: { texto: "" }
    };
  },
  methods: {
    listar() {
      axios
        .get("http://localhost:3000/categoria")
        .then(response => {
          this.arrCategorias = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },

    salvar() {
      //mandar pra API

      axios
        .post("http://localhost:3000/categoria", this.categoria)
        .then(response => {
          this.mensagem.texto = response.data;
          this.snackbar = true;
          this.listar();
        })
        .catch(error => {
          console.log(error);
        });

      this.categoria = {};
    }
  },
  mounted() {
    this.listar();
  }
};
</script>
