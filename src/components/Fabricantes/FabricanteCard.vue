<template>
  <div class="fabricante-card card h-100">
    <div class="card-body text-center">
      <div class="fabricante-icon">
        <i class="fas fa-industry"></i>
      </div>
      <h5 class="card-title">{{ fabricante.nombre }}</h5>
      <p class="card-text">
        <i class="fas fa-map-marker-alt text-gold"></i>
        {{ fabricante.pais || "País no especificado" }}
      </p>
      <p class="card-text small text-muted" v-if="fabricante.anio_fundacion">
        <i class="fas fa-calendar-alt"></i>
        Fundado en {{ fabricante.anio_fundacion }}
      </p>
      <div class="fabricante-actions">
        <a
          :href="'https://' + fabricante.sitio_web"
          target="_blank"
          class="btn btn-outline-gold btn-sm me-2"
          v-if="fabricante.sitio_web"
        >
          <i class="fas fa-globe"></i> Web
        </a>
        <button
          class="btn btn-sm btn-danger"
          @click="$emit('eliminar', fabricante.id)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FabricanteCard",
  props: {
    fabricante: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.fabricante-card {
  transition: all 0.3s ease;
  padding: 10px;
}

.fabricante-icon {
  font-size: 3rem;
  color: #ffd700;
  margin-bottom: 10px;
}

.fabricante-actions {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 8px;
}
</style>
