<template>
  <div class="products-view">
    <h1>Nuestros Productos</h1>
    <div class="product-grid">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/components/products/ProductCard.vue';

const products = ref([
  { id: 1, name: "Miel Natural", price: "$120", image: "public/a1.jpg" },
  { id: 2, name: "Huevos de Pastoreo", price: "$80", image: "public/a2.jpg" },
  { id: 3, name: "Cordero", price: "$250/kg", image: "public/a3.jpg" },
]);
</script>

<style scoped>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
</style>