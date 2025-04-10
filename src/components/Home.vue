<template>
  <div class="home-page">
    <!-- Hero Section -->
    <header class="bg-primary text-white text-center py-5">
      <h1>Welcome to Product Shop</h1>
      <p>Your one-stop shop for amazing products!</p>
    </header>

    <!-- Products Section -->
    <section id="products" class="container my-5">
      <h2 class="text-center mb-4">Most Trend Products</h2>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in fiveProducts" :key="product.id">
          <div class="card">
            <img :src="product.images" class="card-img-top" alt="Product Image" />
            <div class="card-body">
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>
              <p class="text-success">$ {{ product.price }}</p>
              <router-link :to="'/products/' + product.id" class="btn btn-primary">View Details</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-light py-5">
      <div class="container">
        <h2 class="text-center mb-4">About Us</h2>
        <p class="text-center">
          We are passionate about providing the best products at the best prices. From electronics to home goods, we
          have something for everyone!
        </p>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-4">
      <p>&copy; 2025 Product Shop. All Rights Reserved.</p>
    </footer>
  </div>
</template>

<script>
import CRUD_Operations from '../../public/mixins/CRUD_Operations';

export default {
  name: 'Home',
  mixins: [CRUD_Operations],
  data() {
    return {};
  },
  mounted() {
    this.getFiveProducts();
  },
};
</script>

<style scoped>
.home-page {
  font-family: Arial, sans-serif;
}

header {
  background-color: #007bff;
  color: white;
}

footer {
  background-color: #343a40;
  color: white;
}
</style>
