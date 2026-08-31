<template>
  <div class="categoria-card card h-100">
    <div class="card-body text-center">
      <div class="categoria-icon">
        <i class="fas fa-sliders-h"></i>
      </div>
      <h5 class="card-title">
        {{ categoria.tipo_motor || "Sin especificar" }}
      </h5>
      <div class="categoria-specs">
        <span class="badge-premium me-2" v-if="categoria.traccion">
          <i class="fas fa-road"></i> {{ categoria.traccion }}
        </span>
        <span class="badge-premium" v-if="categoria.aceleracion_0_100">
          <i class="fas fa-tachometer-alt"></i> 0-100:
          {{ categoria.aceleracion_0_100 }}s
        </span>
      </div>
      <p
        class="card-text small text-muted mt-2"
        v-if="categoria.velocidad_maxima"
      >
        <i class="fas fa-flag-checkered"></i>
        Vel. máxima: {{ categoria.velocidad_maxima }} km/h
      </p>
      <button
        class="btn btn-sm btn-danger mt-2"
        @click="$emit('eliminar', categoria.id)"
      >
        <i class="fas fa-trash"></i> Eliminar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoriaCard",
  props: {
    categoria: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.categoria-card {
  transition: all 0.3s ease;
  padding: 10px;
}

.categoria-icon {
  font-size: 3rem;
  color: #ffd700;
  margin-bottom: 10px;
}

.categoria-specs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
}
</style>
