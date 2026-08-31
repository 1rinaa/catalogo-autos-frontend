<template>
  <div class="auto-card card h-100">
    <!-- Badge de potencia -->
    <div class="auto-badge">
      <i class="fas fa-tachometer-alt"></i> {{ auto.potencia || 0 }} HP
    </div>

    <!-- Imagen del auto -->
    <div class="auto-image-wrapper">
      <img
        :src="getImagenUrl()"
        class="card-img-top"
        :alt="auto.modelo"
        @error="handleImageError"
      />
      <div class="auto-overlay">
        <button class="btn btn-gold btn-sm" @click="$emit('ver', auto.id)">
          <i class="fas fa-eye"></i> Ver Detalles
        </button>
      </div>
    </div>

    <!-- Información del auto -->
    <div class="card-body">
      <div class="d-flex justify-content-between align-items-start mb-2">
        <h5 class="card-title">{{ auto.modelo }}</h5>
        <span class="auto-year">{{ auto.anio || "N/A" }}</span>
      </div>

      <p class="card-text">
        <i class="fas fa-building text-gold"></i>
        {{ auto.marca || auto.fabricante_nombre || "Sin marca" }}
      </p>

      <!-- Especificaciones rápidas -->
      <div class="auto-specs">
        <span class="spec-item" v-if="auto.tipo_motor">
          <i class="fas fa-cog"></i> {{ auto.tipo_motor }}
        </span>
        <span class="spec-item" v-if="auto.traccion">
          <i class="fas fa-road"></i> {{ auto.traccion }}
        </span>
        <span class="spec-item" v-if="auto.velocidad_maxima">
          <i class="fas fa-flag-checkered"></i> {{ auto.velocidad_maxima }} km/h
        </span>
      </div>

      <!-- Acciones -->
      <div class="auto-actions">
        <button
          class="btn btn-outline-gold btn-sm"
          @click="$emit('ver', auto.id)"
        >
          <i class="fas fa-eye"></i> Detalles
        </button>
        <button class="btn btn-warning btn-sm" @click="$emit('editar', auto)">
          <i class="fas fa-edit"></i>
        </button>
        <button
          class="btn btn-danger btn-sm"
          @click="$emit('eliminar', auto.id)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutoCard",
  props: {
    auto: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getImagenUrl() {
      if (this.auto && this.auto.imagen) {
        return this.auto.imagen;
      }
      return "https://via.placeholder.com/400x300/222/444?text=🏎️+No+Image";
    },
    handleImageError(event) {
      event.target.src =
        "https://via.placeholder.com/400x300/222/444?text=🏎️+No+Image";
    },
  },
};
</script>

<style scoped>
.auto-card {
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(255, 215, 0, 0.08);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  height: 100%;
}

.auto-card:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 215, 0, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.05);
}

/* Badge de potencia */
.auto-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
  background: linear-gradient(135deg, #ffd700, #c9a800);
  color: #000;
  font-family: "Orbitron", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 6px 15px;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(255, 215, 0, 0.3);
  letter-spacing: 0.5px;
}

.auto-badge i {
  margin-right: 5px;
}

/* Wrapper de imagen */
.auto-image-wrapper {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.auto-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.auto-card:hover .auto-image-wrapper img {
  transform: scale(1.08);
}

/* Overlay al hacer hover */
.auto-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.auto-card:hover .auto-overlay {
  opacity: 1;
}

/* Cuerpo de la tarjeta */
.card-body {
  padding: 20px;
}

.card-title {
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
  margin-bottom: 0;
}

.auto-year {
  font-family: "Orbitron", sans-serif;
  font-size: 0.8rem;
  color: #ffd700;
  background: rgba(255, 215, 0, 0.1);
  padding: 2px 12px;
  border-radius: 20px;
  border: 1px solid rgba(255, 215, 0, 0.2);
}

.card-text {
  color: #aaa;
  font-size: 0.95rem;
  margin-bottom: 10px;
}

.text-gold {
  color: #ffd700;
}

/* Especificaciones */
.auto-specs {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 10px 0 15px;
}

.spec-item {
  font-size: 0.7rem;
  color: #aaa;
  background: rgba(255, 255, 255, 0.05);
  padding: 3px 12px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.spec-item i {
  color: #ffd700;
  margin-right: 4px;
}

/* Acciones */
.auto-actions {
  display: flex;
  gap: 8px;
}

.auto-actions .btn {
  flex: 1;
  font-size: 0.75rem;
  padding: 6px 12px;
  border-radius: 30px;
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
  letter-spacing: 0.5px;
}

/* Responsive */
@media (max-width: 768px) {
  .auto-image-wrapper {
    height: 180px;
  }

  .auto-badge {
    font-size: 0.65rem;
    padding: 4px 12px;
  }

  .card-title {
    font-size: 0.95rem;
  }
}
</style>
