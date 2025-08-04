<template>
  <div v-if="showBanner" class="cookie-banner">
    <div class="cookie-content">
      <p>
        🍪 Utilizamos cookies esenciales y analíticas para mejorar tu experiencia. 
        Consulta nuestra <router-link to="/privacidad" @click="closeBanner">Política de Privacidad</router-link>.
      </p>
      <div class="cookie-actions">
        <button @click="acceptCookies" class="accept-btn">Aceptar todas</button>
        <button @click="rejectCookies" class="reject-btn">Rechazar no esenciales</button>
        <button @click="openSettings" class="settings-btn">Personalizar</button>
      </div>
    </div>
    
    <div v-if="showSettings" class="cookie-settings">
      <h3>Preferencias de Cookies</h3>
      <div class="cookie-types">
        <label>
          <input type="checkbox" v-model="essentialCookies" disabled checked>
          Cookies Esenciales
          <span class="required">(Obligatorias)</span>
        </label>
        <label>
          <input type="checkbox" v-model="analyticsCookies">
          Cookies Analíticas
        </label>
        <label>
          <input type="checkbox" v-model="marketingCookies">
          Cookies de Marketing
        </label>
      </div>
      <button @click="savePreferences" class="save-btn">Guardar preferencias</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showBanner = ref(false);
const showSettings = ref(false);
const essentialCookies = ref(true);
const analyticsCookies = ref(false);
const marketingCookies = ref(false);

onMounted(() => {
  if (!localStorage.getItem('cookiePreferences')) {
    showBanner.value = true;
  }
});

const acceptCookies = () => {
  savePreferences(true, true, true);
  showBanner.value = false;
};

const rejectCookies = () => {
  savePreferences(true, false, false);
  showBanner.value = false;
};

const openSettings = () => {
  showSettings.value = true;
};

const savePreferences = (essential, analytics, marketing) => {
  const preferences = {
    essential,
    analytics,
    marketing,
    date: new Date().toISOString()
  };
  localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
  showBanner.value = false;
  showSettings.value = false;
  
  // Aquí implementarías la lógica para cargar/eliminar scripts de cookies
  console.log('Preferencias guardadas:', preferences);
};

const closeBanner = () => {
  showBanner.value = false;
};
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2c3e50;
  color: white;
  padding: 1rem;
  z-index: 1000;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.2);
}

.cookie-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
}

.cookie-content p {
  margin: 0;
  flex: 1;
  min-width: 300px;
}

.cookie-content a {
  color: #4CAF50;
  text-decoration: underline;
}

.cookie-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
}

.accept-btn {
  background: #4CAF50;
  color: white;
}

.reject-btn {
  background: #f44336;
  color: white;
}

.settings-btn {
  background: #2196F3;
  color: white;
}

.cookie-settings {
  max-width: 1200px;
  margin: 1rem auto 0;
  padding: 1rem;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
}

.cookie-types {
  margin: 1rem 0;
}

.cookie-types label {
  display: block;
  margin-bottom: 0.5rem;
  cursor: pointer;
}

.required {
  color: #aaa;
  font-size: 0.8rem;
}

.save-btn {
  background: #FF9800;
  color: white;
}
</style>