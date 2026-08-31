<template>
  <div class="form-card">
    <h5 class="text-gold">
      <i class="fas fa-edit"></i> {{ autoEditando ? "Editar" : "Nuevo" }} Auto
    </h5>
    <div class="row">
      <div class="col-md-4">
        <input
          class="form-control mb-2"
          v-model="localAuto.modelo"
          placeholder="Modelo *"
        />
      </div>
      <div class="col-md-4">
        <input
          class="form-control mb-2"
          v-model="localAuto.marca"
          placeholder="Marca *"
        />
      </div>
      <div class="col-md-2">
        <input
          class="form-control mb-2"
          v-model="localAuto.anio"
          placeholder="Año"
          type="number"
        />
      </div>
      <div class="col-md-2">
        <input
          class="form-control mb-2"
          v-model="localAuto.potencia"
          placeholder="Potencia HP"
          type="number"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <input
          class="form-control mb-2"
          v-model="localAuto.imagen"
          placeholder="URL de imagen"
        />
      </div>
      <div class="col-md-4">
        <select class="form-select mb-2" v-model="localAuto.fabricante_id">
          <option value="">Seleccionar Fabricante</option>
          <option v-for="f in fabricantes" :key="f.id" :value="f.id">
            {{ f.nombre }}
          </option>
        </select>
      </div>
      <div class="col-md-4">
        <select class="form-select mb-2" v-model="localAuto.categoria_id">
          <option value="">Seleccionar Categoría</option>
          <option v-for="c in categorias" :key="c.id" :value="c.id">
            {{ c.tipo_motor }}
          </option>
        </select>
      </div>
    </div>
    <div class="d-flex gap-2">
      <button class="btn btn-gold" @click="guardar">
        <i class="fas fa-save"></i> {{ autoEditando ? "Actualizar" : "Crear" }}
      </button>
      <button class="btn btn-secondary" @click="$emit('cancelar')">
        Cancelar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutoForm",
  props: {
    fabricantes: Array,
    categorias: Array,
    autoEditando: Object,
  },
  data() {
    return {
      localAuto: {
        modelo: "",
        marca: "",
        anio: "",
        potencia: "",
        imagen: "",
        fabricante_id: "",
        categoria_id: "",
      },
    };
  },
  watch: {
    autoEditando: {
      immediate: true,
      handler(val) {
        if (val) {
          this.localAuto = { ...val };
        } else {
          this.resetForm();
        }
      },
    },
  },
  methods: {
    resetForm() {
      this.localAuto = {
        modelo: "",
        marca: "",
        anio: "",
        potencia: "",
        imagen: "",
        fabricante_id: "",
        categoria_id: "",
      };
    },
    guardar() {
      if (!this.localAuto.modelo || !this.localAuto.marca) {
        alert("Modelo y marca son obligatorios");
        return;
      }
      this.$emit("guardar", {
        modelo: this.localAuto.modelo,
        marca: this.localAuto.marca,
        anio: parseInt(this.localAuto.anio) || 0,
        potencia: parseInt(this.localAuto.potencia) || 0,
        imagen: this.localAuto.imagen || "",
        fabricante_id: parseInt(this.localAuto.fabricante_id) || 1,
        categoria_id: parseInt(this.localAuto.categoria_id) || 1,
      });
    },
  },
};
</script>

<style scoped>
.form-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 25px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 25px;
}
</style>
