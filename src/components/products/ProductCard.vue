<template>
  <div class="product-card">
    <img :src="product.image" :alt="product.name" class="product-image">
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price }}</p>
      <button @click="$emit('add-to-cart')">Añadir al carrito</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.product-card {
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}
.product-info {
  padding: 1rem;
}
.price {
  font-weight: bold;
  color: #4CAF50;
  margin: 0.5rem 0;
}
button {
  width: 100%;
  padding: 0.5rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background: #3e8e41;
}
</style>