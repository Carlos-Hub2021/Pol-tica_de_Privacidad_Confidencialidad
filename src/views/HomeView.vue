<template>
  <div class="home-view">
    <section class="hero">
      <h1>Bienvenido a Rancho el Bien Amado</h1>
      <p class="subtitle">Productos 100% naturales directamente del campo a tu mesa</p>
      <router-link to="/productos" class="cta-button">Ver Catálogo</router-link>
    </section>
    
    <section class="features">
      <div class="feature-card">
        <h3>Calidad Premium</h3>
        <p>Productos seleccionados cuidadosamente</p>
      </div>
      <div class="feature-card">
        <h3>Envio Rápido</h3>
        <p>Recibe tus productos en 24-48h</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home-view {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  padding: 4rem 1rem;
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('@/assets/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  color: white;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #3e8e41;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.feature-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.feature-card h3 {
  color: #4CAF50;
  margin-bottom: 0.5rem;
}
</style>