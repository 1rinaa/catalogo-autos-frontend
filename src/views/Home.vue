<template>
  <div class="home fade-in">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="container">
        <div class="row align-items-center min-vh-75">
          <div class="col-lg-7">
            <div class="hero-content">
              <span class="badge-premium mb-3">🏎️ Colección 2024</span>
              <h1 class="hero-title">
                Descubre los<br />
                <span class="text-gold">Superdeportivos</span><br />
                más exclusivos
              </h1>
              <p class="hero-text">
                Explora nuestra colección de autos de ensueño. Cada vehículo ha
                sido seleccionado por su rendimiento, diseño y exclusividad.
              </p>
              <div class="hero-stats">
                <div class="stat-item">
                  <span class="stat-number">{{ autosCount }}</span>
                  <span class="stat-label">Autos</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ fabricantesCount }}</span>
                  <span class="stat-label">Marcas</span>
                </div>
                <div class="stat-item">
                  <span class="stat-number">{{ categoriasCount }}</span>
                  <span class="stat-label">Categorías</span>
                </div>
              </div>
              <div class="hero-actions">
                <router-link to="/autos" class="btn btn-gold btn-lg me-3">
                  <i class="fas fa-search"></i> Explorar Autos
                </router-link>
                <router-link
                  to="/fabricantes"
                  class="btn btn-outline-gold btn-lg"
                >
                  <i class="fas fa-building"></i> Ver Marcas
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-lg-5 d-none d-lg-block">
            <div class="hero-image-wrapper">
              <div class="hero-image-glow"></div>
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600"
                alt="Superdeportivo"
                class="hero-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Section -->
    <section class="featured-section py-5">
      <div class="container">
        <div class="text-center mb-5">
          <h2 class="section-title">
            <span class="text-gold">Autos</span> Destacados
          </h2>
          <p class="text-muted">
            Los más potentes y exclusivos de nuestra colección
          </p>
        </div>
        <div class="row">
          <div
            class="col-md-4 mb-4"
            v-for="auto in featuredAutos"
            :key="auto.id"
          >
            <div class="card h-100">
              <img
                :src="
                  auto.imagen ||
                  'https://via.placeholder.com/400x300/222/444?text=🏎️+No+Image'
                "
                class="card-img-top"
                :alt="auto.modelo"
                @error="
                  auto.imagen =
                    'https://via.placeholder.com/400x300/222/444?text=🏎️+No+Image'
                "
              />
              <div class="card-body">
                <h5 class="card-title">{{ auto.modelo }}</h5>
                <p class="card-text">
                  <i class="fas fa-building text-gold"></i> {{ auto.marca }}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge-premium">
                    <i class="fas fa-tachometer-alt"></i> {{ auto.potencia }} HP
                  </span>
                  <router-link
                    :to="'/autos'"
                    class="btn btn-outline-gold btn-sm"
                  >
                    Ver más
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomePage",
  computed: {
    ...mapState(["autos", "fabricantes", "categorias"]),
    autosCount() {
      return this.autos.length;
    },
    fabricantesCount() {
      return this.fabricantes.length;
    },
    categoriasCount() {
      return this.categorias.length;
    },
    featuredAutos() {
      return this.autos.slice(0, 3);
    },
  },
  mounted() {
    this.$store.dispatch("fetchAutos");
    this.$store.dispatch("fetchFabricantes");
    this.$store.dispatch("fetchCategorias");
  },
};
</script>

<style scoped>
.hero-section {
  padding: 60px 0 40px;
  position: relative;
}

.min-vh-75 {
  min-height: 75vh;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-family: "Orbitron", sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 20px;
  color: #fff;
}

.hero-text {
  font-size: 1.2rem;
  color: #aaa;
  margin-bottom: 30px;
  line-height: 1.8;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-bottom: 35px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  display: block;
  font-family: "Orbitron", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: gold;
}

.stat-label {
  font-size: 0.85rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.hero-image-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 215, 0, 0.15), transparent 70%);
  border-radius: 50%;
  animation: pulse 3s ease-in-out infinite;
}

.hero-image {
  width: 100%;
  max-width: 500px;
  border-radius: 30px;
  position: relative;
  z-index: 1;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.section-title {
  font-family: "Orbitron", sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-stats {
    gap: 20px;
  }

  .stat-number {
    font-size: 1.5rem;
  }

  .hero-image-glow {
    width: 200px;
    height: 200px;
  }
}
</style>
