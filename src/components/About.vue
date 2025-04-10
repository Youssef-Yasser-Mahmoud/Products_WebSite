<template>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h1 class="display-4">About Our Store</h1>
      <p class="lead">Learn more about our mission and what makes our products special.</p>
    </div>

    <div class="row">
      <div class="col-md-6">
        <h3>Who We Are</h3>
        <p>
          We're a passionate team that curates high-quality products for customers who care about value and design.
          Whether you're looking for tech, fashion, or home essentials, our store brings you the best picks with great
          deals.
        </p>

        <h3 class="mt-4">Our Mission</h3>
        <p>
          We aim to make shopping simple, fun, and reliable. Every product on our platform is selected with care, and
          we’re always listening to customer feedback to grow and improve.
        </p>
      </div>
    </div>

    <div class="card mt-5 border-info">
      <div class="card-body text-center">
        <h4 class="card-title">Want to explore our collection?</h4>
        <router-link to="/products" class="btn btn-primary mt-3">View Products</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
};
</script>

<style scoped>
h1,
h3 {
  color: #343a40;
}
</style>
