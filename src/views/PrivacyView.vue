<template>
  <div class="privacy-container">
    <h1>Política de Privacidad y Confidencialidad</h1>
    
    <section class="policy-section">
      <h2>Objetivo</h2>
      <p><strong>General:</strong> Garantizar el tratamiento seguro, confidencial y legal de los datos personales.</p>
      <ul>
        <li>Minimizar riesgos de fuga de información</li>
        <li>Ejercicio de derechos ARCO</li>
        <li>Regulación del uso de cookies</li>
      </ul>
    </section>

    <section class="policy-section">
      <h2>Política de Cookies</h2>
      <div class="cookie-types-table">
        <div class="cookie-header">
          <span>Tipo</span>
          <span>Finalidad</span>
          <span>Duración</span>
        </div>
        <div class="cookie-row">
          <span>Esenciales</span>
          <span>Funcionalidad básica del sitio</span>
          <span>Sesión</span>
        </div>
        <div class="cookie-row">
          <span>Analíticas</span>
          <span>Mejorar rendimiento</span>
          <span>24 meses</span>
        </div>
      </div>
       
      <div class="cookie-controls">
        <router-link to="/politica-privacidad-completa" class="full-policy-link">
          <i class="fas fa-file-pdf"></i> Ver política de privacidad completa
        </router-link>
        <br>
        <button @click="openCookieSettings" class="cookie-settings-btn">
          <i class="fas fa-cookie-bite"></i> Gestionar mis preferencias de cookies
        </button>
        <p class="last-updated">
          <i class="fas fa-calendar-alt"></i> Última actualización: 15 de julio de 2025
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
const openCookieSettings = () => {
  // Lógica para abrir configuración de cookies
  localStorage.removeItem('cookiePreferences');
  window.location.reload();
};
</script>

<style scoped>
/* Estilos base */
.privacy-container {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  line-height: 1.6;
}

.policy-section {
  margin-bottom: 3rem;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

h1 {
  color: #2c3e50;
  margin-bottom: 2rem;
  text-align: center;
}

h2 {
  color: #4CAF50;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

/* Tabla de cookies */
.cookie-types-table {
  margin: 1.5rem 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
}

.cookie-header, .cookie-row {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 0.75rem;
  align-items: center;
}

.cookie-header {
  background: #2c3e50;
  color: white;
  font-weight: bold;
}

.cookie-row:nth-child(even) {
  background: #f0f0f0;
}

/* Botones y controles */
.cookie-controls {
  margin-top: 2rem;
  text-align: center;
}

.full-policy-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 15px 0;
  padding: 12px 20px;
  background-color: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.full-policy-link:hover {
  background-color: #3e8e41;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.cookie-settings-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.cookie-settings-btn:hover {
  background: #3e8e41;
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.last-updated {
  margin-top: 1.5rem;
  color: #666;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

/* Iconos */
.fas {
  font-size: 0.9em;
}
</style>