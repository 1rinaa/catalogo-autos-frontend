<template>
  <div class="form-card">
    <h5 class="text-gold">
      <i class="fas fa-plus-circle"></i>
      {{ editando ? "Editar" : "Nueva" }} Categoría
    </h5>
    <div class="row">
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model="localCat.tipo_motor"
          placeholder="Tipo motor *"
        />
      </div>
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model="localCat.traccion"
          placeholder="Tracción"
        />
      </div>
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model.number="localCat.aceleracion_0_100"
          placeholder="0-100 (seg)"
          type="number"
          step="0.1"
        />
      </div>
      <div class="col-md-3">
        <input
          class="form-control mb-2"
          v-model.number="localCat.velocidad_maxima"
          placeholder="Vel. máxima (km/h)"
          type="number"
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
  name: "CategoriaForm",
  props: {
    categoriaEditando: Object,
  },
  data() {
    return {
      localCat: {
        tipo_motor: "",
        traccion: "",
        aceleracion_0_100: null,
        velocidad_maxima: null,
      },
      editando: false,
    };
  },
  watch: {
    categoriaEditando: {
      immediate: true,
      handler(val) {
        if (val) {
          this.localCat = { ...val };
          this.editando = true;
        } else {
          this.resetForm();
        }
      },
    },
  },
  methods: {
    resetForm() {
      this.localCat = {
        tipo_motor: "",
        traccion: "",
        aceleracion_0_100: null,
        velocidad_maxima: null,
      };
      this.editando = false;
    },
    guardar() {
      if (!this.localCat.tipo_motor) {
        alert("El tipo de motor es obligatorio");
        return;
      }
      this.$emit("guardar", {
        tipo_motor: this.localCat.tipo_motor,
        traccion: this.localCat.traccion || "",
        aceleracion_0_100: Number(this.localCat.aceleracion_0_100) || 0,
        velocidad_maxima: Number(this.localCat.velocidad_maxima) || 0,
      });
    },
    cancelar() {
      this.resetForm();
      this.$emit("cancelar");
    },
  },
};
</script>
