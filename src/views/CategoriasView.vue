<template>
  <div class="categorias-view fade-in">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="text-white">
        <i class="fas fa-sliders-h text-gold"></i> Categorías
      </h2>
      <button class="btn btn-gold" @click="mostrarForm = !mostrarForm">
        <i class="fas fa-plus"></i>
        {{ mostrarForm ? "Cancelar" : "Agregar Categoría" }}
      </button>
    </div>

    <!-- Formulario -->
    <CategoriaForm
      v-if="mostrarForm"
      :categoriaEditando="editandoCat"
      @guardar="guardarCategoria"
      @cancelar="cancelarEdicion"
    />

    <!-- Grid de Categorías -->
    <div class="row" v-if="categorias.length > 0">
      <div class="col-md-3 col-sm-6 mb-4" v-for="c in categorias" :key="c.id">
        <CategoriaCard :categoria="c" @eliminar="eliminarCategoria" />
      </div>
    </div>
    <div v-else class="text-center text-white py-5">
      <i class="fas fa-sliders-h fa-4x text-secondary mb-3"></i>
      <h4>No hay categorías registradas</h4>
      <p class="text-muted">
        Agrega tu primera categoría usando el botón "Agregar Categoría"
      </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CategoriaCard from "@/components/Categorias/CategoriaCard.vue";
import CategoriaForm from "@/components/Categorias/CategoriaForm.vue";

export default {
  name: "CategoriasView",
  components: {
    CategoriaCard,
    CategoriaForm,
  },
  data() {
    return {
      mostrarForm: false,
      editandoCat: null,
    };
  },
  computed: {
    ...mapState(["categorias"]),
  },
  mounted() {
    this.fetchCategorias();
  },
  methods: {
    ...mapActions(["fetchCategorias", "createCategoria", "deleteCategoria"]),
    async guardarCategoria(data) {
      try {
        await this.createCategoria(data);
        this.mostrarForm = false;
        this.editandoCat = null;
      } catch (error) {
        alert("Error al guardar la categoría");
      }
    },
    cancelarEdicion() {
      this.mostrarForm = false;
      this.editandoCat = null;
    },
    async eliminarCategoria(id) {
      if (confirm("¿Eliminar esta categoría?")) {
        try {
          await this.deleteCategoria(id);
        } catch (error) {
          alert("Error al eliminar la categoría");
        }
      }
    },
  },
};
</script>
