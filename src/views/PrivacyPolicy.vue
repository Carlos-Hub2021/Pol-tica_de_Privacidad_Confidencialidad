<template>
  <div class="privacy-container">
    <h1>Política de Privacidad y Confidencialidad</h1>
    <p class="update-date">Rancho el Bien Amado S.A. de C.V. | Última actualización: 15/03/2024</p>

    <!-- Visor PDF mejorado -->
    <div class="pdf-container">
      <object 
        v-if="!showFallback"
        :data="pdfPath" 
        type="application/pdf"
        width="100%" 
        height="800px"
        @error="handlePdfError"
        class="pdf-object"
      >
        <p>No se puede mostrar el PDF. <a :href="pdfPath" download>Descargar PDF</a></p>
      </object>
      
      <div v-if="showFallback" class="fallback-message">
        <p>No se puede visualizar el PDF directamente.</p>
        <button @click="downloadPDF" class="download-btn">
          <i class="fas fa-download"></i> Descargar PDF completo
        </button>
      </div>
    </div>

    <div class="actions">
      <button @click="downloadPDF" class="action-btn download">
        <i class="fas fa-download"></i> Descargar
      </button>
      <router-link to="/" class="action-btn back">
        <i class="fas fa-arrow-left"></i> Volver
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const pdfPath = '/politica-privacidad.pdf';
const showFallback = ref(false);

const handlePdfError = () => {
  showFallback.value = true;
};

const downloadPDF = () => {
  const link = document.createElement('a');
  link.href = pdfPath;
  link.download = 'politica-privacidad-rancho-bien-amado.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
.privacy-container {
  max-width: 1000px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: Arial, sans-serif;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 0.5rem;
}

.update-date {
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
}

.pdf-container {
  margin: 2rem 0;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  min-height: 800px;
  position: relative;
}

.pdf-object {
  width: 100%;
  height: 100%;
  min-height: 800px;
  border: none;
}

.fallback-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 8px;
  width: 80%;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.action-btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.action-btn.download {
  background: #4CAF50;
  color: white;
}

.action-btn.back {
  background: #f5f5f5;
  color: #333;
}

.action-btn:hover {
  opacity: 0.9;
}
</style>