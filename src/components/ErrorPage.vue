<template>
  <div class="error-page">
    <div class="container text-center">
      <h1 class="display-1 text-danger">Oops!</h1>
      <h2 class="mb-4">Something went wrong...</h2>
      <p class="lead">
        The page you are looking for could not be found or there was an error loading the content.
      </p>
      <p class="mb-4">Please check the URL or try again later.</p>
      <router-link to="/" class="btn btn-primary">Go to Home</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
};
</script>

<style scoped>
.error-page {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8d7da;
  color: #721c24;
}

.container {
  max-width: 600px;
  text-align: center;
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 2.5rem;
}

.lead {
  font-size: 1.2rem;
}

.btn {
  margin-top: 20px;
}
</style>
