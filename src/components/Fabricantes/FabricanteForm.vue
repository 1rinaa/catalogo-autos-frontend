<template>
  <div class="form-card">
    <h5 class="text-gold">
      <i class="fas fa-plus-circle"></i>
      {{ editando ? "Editar" : "Nuevo" }} Fabricante
    </h5>
    <div class="row">
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model="localFab.nombre"
          placeholder="Nombre *"
        />
      </div>
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model="localFab.pais"
          placeholder="País"
        />
      </div>
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model.number="localFab.anio_fundacion"
          placeholder="Año fundación"
          type="number"
        />
      </div>
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model="localFab.sitio_web"
          placeholder="Sitio web"
        />
      </div>
    </div>
    <div class="d-flex gap-2">
      <button class="btn btn-gold" @click="guardar">
        <i class="fas fa-save"></i> {{ editando ? "Actualizar" : "Crear" }}
      </button>
      <button class="btn btn-secondary" @click="cancelar">Cancelar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FabricanteForm",
  props: {
    fabricanteEditando: Object,
  },
  data() {
    return {
      localFab: {
        nombre: "",
        pais: "",
        anio_fundacion: null,
        sitio_web: "",
      },
      editando: false,
    };
  },
  watch: {
    fabricanteEditando: {
      immediate: true,
      handler(val) {
        if (val) {
          this.localFab = { ...val };
          this.editando = true;
        } else {
          this.resetForm();
        }
      },
    },
  },
  methods: {
    resetForm() {
      this.localFab = {
        nombre: "",
        pais: "",
        anio_fundacion: null,
        sitio_web: "",
      };
      this.editando = false;
    },
    guardar() {
      if (!this.localFab.nombre) {
        alert("El nombre es obligatorio");
        return;
      }
      this.$emit("guardar", {
        nombre: this.localFab.nombre,
        pais: this.localFab.pais || "",
        anio_fundacion: Number(this.localFab.anio_fundacion) || 0,
        sitio_web: this.localFab.sitio_web || "",
      });
    },
    cancelar() {
      this.resetForm();
      this.$emit("cancelar");
    },
  },
};
</script>
