<template>
  <div class="autos-view fade-in">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2 class="text-white">
        <i class="fas fa-car-side text-gold"></i> Autos Superdeportivos
        <span class="badge-premium ms-2">{{ autos.length }}</span>
      </h2>
      <button
        class="btn btn-gold"
        @click="mostrarFormulario = !mostrarFormulario"
      >
        <i class="fas fa-plus"></i>
        {{ mostrarFormulario ? "Cancelar" : "Agregar Auto" }}
      </button>
    </div>

    <!-- Formulario -->
    <AutoForm
      v-if="mostrarFormulario"
      :fabricantes="fabricantes"
      :categorias="categorias"
      :autoEditando="autoEditando"
      @guardar="handleGuardarAuto"
      @cancelar="cancelarEdicion"
    />

    <!-- Grid de Autos -->
    <div class="row" v-if="!loading && autos.length > 0">
      <div
        class="col-xl-3 col-lg-4 col-md-6 mb-4"
        v-for="auto in autos"
        :key="auto.id"
      >
        <AutoCard
          :auto="auto"
          @ver="verAuto"
          @editar="editarAuto"
          @eliminar="eliminarAuto"
        />
      </div>
    </div>

    <!-- Loading -->
    <div v-else-if="loading" class="text-center text-white py-5">
      <div class="spinner-border text-warning" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
      <p class="mt-3">Cargando autos...</p>
    </div>

    <!-- Empty State -->
    <div v-else class="text-center text-white py-5">
      <i class="fas fa-car-side fa-4x text-secondary mb-3"></i>
      <h4>No hay autos en el catálogo</h4>
      <p class="text-muted">
        Agrega tu primer auto usando el botón "Agregar Auto"
      </p>
    </div>

    <!-- Modal Detalles -->
    <AutoDetail
      :auto="autoSeleccionado"
      :visible="mostrarDetalle"
      @cerrar="mostrarDetalle = false"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import AutoCard from "@/components/Autos/AutoCard.vue";
import AutoForm from "@/components/Autos/AutoForm.vue";
import AutoDetail from "@/components/Autos/AutoDetail.vue";

export default {
  name: "AutosView",
  components: {
    AutoCard,
    AutoForm,
    AutoDetail,
  },
  data() {
    return {
      mostrarFormulario: false,
      mostrarDetalle: false,
      autoEditando: null,
      autoSeleccionado: null,
    };
  },
  computed: {
    ...mapState(["autos", "fabricantes", "categorias", "loading"]),
  },
  mounted() {
    this.fetchAutos();
    this.fetchFabricantes();
    this.fetchCategorias();
  },
  methods: {
    ...mapActions([
      "fetchAutos",
      "fetchFabricantes",
      "fetchCategorias",
      "createAuto",
      "updateAuto",
      "deleteAuto",
    ]),
    async handleGuardarAuto(autoData) {
      try {
        if (this.autoEditando) {
          await this.updateAuto({ id: this.autoEditando.id, auto: autoData });
        } else {
          await this.createAuto(autoData);
        }
        this.mostrarFormulario = false;
        this.autoEditando = null;
      } catch (error) {
        console.error("Error guardando auto:", error);
        alert("Error al guardar el auto");
      }
    },
    editarAuto(auto) {
      this.autoEditando = auto;
      this.mostrarFormulario = true;
    },
    cancelarEdicion() {
      this.mostrarFormulario = false;
      this.autoEditando = null;
    },
    async eliminarAuto(id) {
      if (confirm("¿Estás seguro de eliminar este auto?")) {
        try {
          await this.deleteAuto(id);
        } catch (error) {
          console.error("Error eliminando auto:", error);
          alert("Error al eliminar el auto");
        }
      }
    },
    async verAuto(id) {
      try {
        const response = await fetch(`${this.$apiUrl}/autos/${id}`);
        this.autoSeleccionado = await response.json();
        this.mostrarDetalle = true;
      } catch (error) {
        console.error("Error cargando detalles:", error);
        alert("Error al cargar los detalles del auto");
      }
    },
  },
};
</script>
