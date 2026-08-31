<template>
  <div class="fabricantes-view fade-in">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="text-white">
        <i class="fas fa-industry text-gold"></i> Marcas
      </h2>
      <button class="btn btn-gold" @click="mostrarForm = !mostrarForm">
        <i class="fas fa-plus"></i>
        {{ mostrarForm ? "Cancelar" : "Agregar Marca" }}
      </button>
    </div>

    <!-- Formulario -->
    <FabricanteForm
      v-if="mostrarForm"
      :fabricanteEditando="editandoFab"
      @guardar="guardarFabricante"
      @cancelar="cancelarEdicion"
    />

    <!-- Grid de Fabricantes -->
    <div class="row" v-if="fabricantes.length > 0">
      <div class="col-md-3 col-sm-6 mb-4" v-for="f in fabricantes" :key="f.id">
        <FabricanteCard :fabricante="f" @eliminar="eliminarFabricante" />
      </div>
    </div>
    <div v-else class="text-center text-white py-5">
      <i class="fas fa-industry fa-4x text-secondary mb-3"></i>
      <h4>No hay marcas registradas</h4>
      <p class="text-muted">
        Agrega tu primera marca usando el botón "Agregar Marca"
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import FabricanteCard from "@/components/Fabricantes/FabricanteCard.vue";
import FabricanteForm from "@/components/Fabricantes/FabricanteForm.vue";

export default {
  name: "FabricantesView",
  components: {
    FabricanteCard,
    FabricanteForm,
  },
  data() {
    return {
      mostrarForm: false,
      editandoFab: null,
    };
  },
  computed: {
    ...mapState(["fabricantes"]),
  },
  mounted() {
    this.fetchFabricantes();
  },
  methods: {
    ...mapActions(["fetchFabricantes", "createFabricante", "deleteFabricante"]),
    async guardarFabricante(data) {
      try {
        await this.createFabricante(data);
        this.mostrarForm = false;
        this.editandoFab = null;
      } catch (error) {
        alert("Error al guardar la marca");
      }
    },
    cancelarEdicion() {
      this.mostrarForm = false;
      this.editandoFab = null;
    },
    async eliminarFabricante(id) {
      if (confirm("¿Eliminar esta marca?")) {
        try {
          await this.deleteFabricante(id);
        } catch (error) {
          alert("Error al eliminar la marca");
        }
      }
    },
  },
};
</script>
