<template>
  <div id="app">
    <!-- Navbar Premium -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <div class="brand-wrapper">
            <i class="fas fa-crown text-gold"></i>
            <span class="brand-text"
              >Auto<span class="text-gold">Elite</span></span
            >
          </div>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/autos">
                <i class="fas fa-car-side"></i> Autos
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/fabricantes">
                <i class="fas fa-industry"></i> Marcas
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/categorias">
                <i class="fas fa-sliders-h"></i> Categorías
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <main class="main-content">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container text-center">
        <p class="mb-0">
          <i class="fas fa-crown text-gold"></i>
          AutoElite — Catálogo de Autos Superdeportivos
        </p>
        <small class="text-muted">© 2024 Todos los derechos reservados</small>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
// Importar fuentes premium
@import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap");

// Variables
$gold: #ffd700;
$gold-dark: #c9a800;
$dark-bg: #0a0a0a;
$card-bg: rgba(255, 255, 255, 0.03);

// Reset y base
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  background: #0a0a0a !important;
  font-family: "Rajdhani", sans-serif;
  color: #ffffff !important;
  min-height: 100vh;
  overflow-x: hidden;
}

body {
  background: #0a0a0a !important;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  position: relative;
  z-index: 1;
  color: #ffffff;
}

// ===== NAVBAR PREMIUM =====
.navbar {
  background: rgba(10, 10, 10, 0.95) !important;
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 215, 0, 0.1);
  padding: 12px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
}

.navbar-brand {
  padding: 0;
}

.brand-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-text {
  font-family: "Orbitron", sans-serif;
  font-weight: 900;
  font-size: 1.5rem;
  color: #fff;
  letter-spacing: 2px;
}

.text-gold {
  color: $gold;
}

.nav-link {
  font-family: "Orbitron", sans-serif;
  font-weight: 400;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #aaa !important;
  padding: 8px 20px !important;
  transition: all 0.3s ease;
  position: relative;

  i {
    margin-right: 8px;
    color: $gold;
  }

  &:hover {
    color: #fff !important;
    text-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
  }

  &.router-link-active {
    color: $gold !important;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 2px;
      background: $gold;
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
    }
  }
}

// ===== MAIN CONTENT =====
.main-content {
  flex: 1;
  padding-top: 80px;
  padding-bottom: 40px;
  padding-left: 20px; // ← NUEVO
  padding-right: 20px; // ← NUEVO
  background: #0a0a0a;
}

// Para pantallas más grandes, aumentar el padding
@media (min-width: 768px) {
  .main-content {
    padding-left: 40px;
    padding-right: 40px;
  }
}

@media (min-width: 1200px) {
  .main-content {
    padding-left: 60px;
    padding-right: 60px;
  }
}

// ===== FOOTER =====
.footer {
  background: rgba(10, 10, 10, 0.95);
  border-top: 1px solid rgba(255, 215, 0, 0.05);
  padding: 20px 0;
  margin-top: auto;
  font-family: "Orbitron", sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
  color: #aaa;
}

// ===== TARJETAS PREMIUM =====
.card {
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  color: #fff !important;

  &::before {
    content: "";
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-radius: 20px;
    background: linear-gradient(
      135deg,
      rgba(255, 215, 0, 0.1),
      transparent,
      rgba(255, 215, 0, 0.05)
    );
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(255, 215, 0, 0.3);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(255, 215, 0, 0.05);

    &::before {
      opacity: 1;
    }
  }

  .card-title,
  h5,
  h4,
  h3,
  h2,
  h1 {
    color: #ffffff !important;
  }

  .card-text,
  p,
  span,
  div {
    color: #cccccc !important;
  }

  .text-muted {
    color: #888888 !important;
  }
}

// ===== BOTONES PREMIUM =====
.btn-gold {
  background: linear-gradient(135deg, $gold, $gold-dark);
  color: #000 !important;
  border: none;
  font-family: "Orbitron", sans-serif;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 10px 25px;
  border-radius: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 40px rgba(255, 215, 0, 0.3);
    color: #000 !important;
  }

  i {
    margin-right: 8px;
  }
}

.btn-outline-gold {
  color: $gold !important;
  border: 2px solid $gold;
  background: transparent;
  font-family: "Orbitron", sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 6px 15px;
  border-radius: 30px;
  transition: all 0.3s ease;

  &:hover {
    background: $gold;
    color: #000 !important;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.2);
    transform: scale(1.05);
  }
}

// ===== FORMULARIOS PREMIUM =====
.form-card {
  background: rgba(255, 255, 255, 0.05) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 215, 0, 0.1);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  color: #fff !important;
}

.form-control,
.form-select {
  background: rgba(255, 255, 255, 0.08) !important;
  border: 1px solid rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
  border-radius: 12px;
  padding: 12px 18px;
  font-family: "Rajdhani", sans-serif;
  font-weight: 400;
  transition: all 0.3s ease;

  &:focus {
    background: rgba(255, 255, 255, 0.12) !important;
    border-color: $gold !important;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.1) !important;
    color: #ffffff !important;
  }

  &::placeholder {
    color: #888 !important;
    font-weight: 300;
  }
}

.form-select option {
  background: #1a1a2e !important;
  color: #ffffff !important;
}

// ===== TABLAS PREMIUM =====
.table {
  color: #ffffff !important;
  background: rgba(255, 255, 255, 0.02) !important;
  border-radius: 20px;
  overflow: hidden;
  border-collapse: separate;
  border-spacing: 0;

  thead {
    background: rgba(255, 215, 0, 0.08) !important;
    font-family: "Orbitron", sans-serif;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;

    th {
      color: $gold !important;
      border: none;
      padding: 15px 20px;
      font-weight: 400;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(255, 215, 0, 0.05) !important;
      }

      td {
        padding: 12px 20px;
        border: none;
        color: #cccccc !important;
        vertical-align: middle;
      }
    }
  }
}

// ===== MODAL PREMIUM =====
.modal {
  background: rgba(0, 0, 0, 0.8);
}

.modal-content {
  background: #1a1a2e !important;
  border: 1px solid rgba(255, 215, 0, 0.15) !important;
  border-radius: 25px !important;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9) !important;
  color: #ffffff !important;
}

.modal-header {
  border-bottom: 1px solid rgba(255, 215, 0, 0.1) !important;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.02);

  .modal-title {
    font-family: "Orbitron", sans-serif;
    font-weight: 700;
    color: $gold !important;
  }
}

.modal-body {
  padding: 30px;
  color: #ffffff !important;
  background: #1a1a2e !important;
}

.modal-body p,
.modal-body h3,
.modal-body h6 {
  color: #ffffff !important;
}

.modal-body .text-muted {
  color: #aaaaaa !important;
}

.modal-body hr {
  border-color: rgba(255, 215, 0, 0.1) !important;
}

.modal-footer {
  border-top: 1px solid rgba(255, 215, 0, 0.1) !important;
  padding: 20px 30px;
  background: rgba(255, 255, 255, 0.02);
}

.modal-backdrop {
  background: rgba(0, 0, 0, 0.8) !important;
}

// ===== BADGES =====
.badge-premium {
  background: linear-gradient(135deg, $gold, $gold-dark);
  color: #000 !important;
  font-family: "Orbitron", sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 15px;
  border-radius: 20px;
}

// ===== TÍTULOS =====
.text-white,
.text-light,
h1,
h2,
h3,
h4,
h5,
h6 {
  color: #ffffff !important;
}

.text-gold {
  color: $gold !important;
}

.text-muted {
  color: #888888 !important;
}

// ===== ANIMACIONES =====
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeInUp 0.6s ease forwards;
}

// ===== RESPONSIVE =====
@media (max-width: 768px) {
  .navbar-brand .brand-text {
    font-size: 1.2rem;
  }

  .main-content {
    padding-top: 70px;
    padding-bottom: 20px;
  }

  .modal-dialog {
    margin: 10px;
  }
}

// Scrollbar personalizada
::-webkit-scrollbar {
  width: 8px;
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, $gold, $gold-dark);
  border-radius: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.02);
}
</style>
