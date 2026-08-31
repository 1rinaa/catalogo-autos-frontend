<template>
  <div
    class="modal"
    :class="{ show: visible }"
    style="display: block; background: rgba(0, 0, 0, 0.85)"
    v-if="visible"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <i class="fas fa-car text-gold"></i>
            {{ auto ? auto.modelo : "Detalles del Auto" }}
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            @click="$emit('cerrar')"
          ></button>
        </div>
        <div
          class="modal-body"
          v-if="auto"
          style="background: #1a1a2e; color: #fff"
        >
          <div class="row">
            <div class="col-md-6">
              <img
                :src="getImagenUrl()"
                class="img-fluid rounded"
                :alt="auto.modelo"
                style="width: 100%; border-radius: 15px"
                @error="handleImageError"
              />
            </div>
            <div class="col-md-6">
              <h3 style="color: #fff; font-family: 'Orbitron', sans-serif">
                {{ auto.modelo }}
              </h3>
              <p style="color: #aaa">
                <i class="fas fa-building text-gold"></i> {{ obtenerMarca() }}
              </p>
              <hr style="border-color: rgba(255, 215, 0, 0.1)" />
              <div class="row">
                <div class="col-6">
                  <p style="color: #fff">
                    <i class="fas fa-calendar text-gold"></i>
                    <strong>Año:</strong> {{ auto.anio || "N/A" }}
                  </p>
                </div>
                <div class="col-6">
                  <p style="color: #fff">
                    <i class="fas fa-tachometer-alt text-gold"></i>
                    <strong>Potencia:</strong> {{ auto.potencia || "N/A" }} HP
                  </p>
                </div>
              </div>
              <hr style="border-color: rgba(255, 215, 0, 0.1)" />
              <div v-if="auto.fabricante_nombre" style="color: #fff">
                <h6 style="color: #ffd700">
                  <i class="fas fa-industry"></i> Fabricante
                </h6>
                <p style="color: #ccc">
                  <strong>Nombre:</strong> {{ auto.fabricante_nombre }}
                </p>
                <p style="color: #ccc">
                  <strong>País:</strong> {{ auto.pais || "N/A" }}
                </p>
              </div>
              <hr style="border-color: rgba(255, 215, 0, 0.1)" />
              <div v-if="auto.tipo_motor" style="color: #fff">
                <h6 style="color: #ffd700">
                  <i class="fas fa-cog"></i> Especificaciones
                </h6>
                <p style="color: #ccc">
                  <strong>Tipo motor:</strong> {{ auto.tipo_motor }}
                </p>
                <p style="color: #ccc">
                  <strong>Tracción:</strong> {{ auto.traccion || "N/A" }}
                </p>
                <p style="color: #ccc" v-if="auto.aceleracion_0_100">
                  <strong>0-100 km/h:</strong> {{ auto.aceleracion_0_100 }}s
                </p>
                <p style="color: #ccc" v-if="auto.velocidad_maxima">
                  <strong>Vel. máxima:</strong> {{ auto.velocidad_maxima }} km/h
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" @click="$emit('cerrar')">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AutoDetail",
  props: {
    auto: Object,
    visible: Boolean,
  },
  methods: {
    getImagenUrl() {
      if (this.auto && this.auto.imagen) {
        return this.auto.imagen;
      }
      return "https://via.placeholder.com/500x400/222/444?text=🏎️+No+Image";
    },
    handleImageError(event) {
      event.target.src =
        "https://via.placeholder.com/500x400/222/444?text=🏎️+No+Image";
    },
    obtenerMarca() {
      if (this.auto) {
        return this.auto.marca || this.auto.fabricante_nombre || "Sin marca";
      }
      return "Sin marca";
    },
  },
};
</script>

<style scoped>
.text-gold {
  color: #ffd700;
}

.modal-content {
  background: #1a1a2e !important;
  border: 1px solid rgba(255, 215, 0, 0.15) !important;
  border-radius: 25px !important;
}

.modal-header {
  border-bottom: 1px solid rgba(255, 215, 0, 0.1) !important;
}

.modal-footer {
  border-top: 1px solid rgba(255, 215, 0, 0.1) !important;
}

.btn-close-white {
  filter: invert(1);
}
</style>
