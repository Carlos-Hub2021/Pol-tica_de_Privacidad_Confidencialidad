<template>
  <div class="contact-view">
    <h1>Contacto</h1>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="name" placeholder="Nombre" required>
      <input type="email" v-model="email" placeholder="Correo" required>
      <textarea v-model="message" placeholder="Mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');

const submitForm = () => {
  alert(`Gracias, ${name.value}. Tu mensaje ha sido enviado.`);
  // Resetear formulario
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<style scoped>
.contact-view {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
input, textarea {
  padding: 0.5rem;
}
button {
  background: #4CAF50;
  color: white;
  padding: 0.5rem;
  border: none;
}
</style>