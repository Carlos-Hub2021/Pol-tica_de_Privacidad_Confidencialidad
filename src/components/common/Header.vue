<template>
  <header class="header">
    
    <router-link to="/" class="logo" 
    >Rancho el Bien Amado</router-link>
    <nav>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background: #4CAF50;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
}
nav a {
  color: white;
  margin-left: 1rem;
  text-decoration: none;
}
</style>