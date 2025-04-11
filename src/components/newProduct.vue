<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Add New Product</h2>
    <form class="row g-3" @submit.prevent="addProduct">
      <div class="col-md-6">
        <label for="validationDefault01" class="form-label"><strong>Title</strong></label>
        <input
          type="text"
          v-model="title"
          class="form-control"
          id="validationDefault01"
          placeholder="Enter product title..."
          required
        />
      </div>

      <div class="col-md-6">
        <label for="validationDefault02" class="form-label"><strong>Description</strong></label>
        <input
          type="text"
          v-model="description"
          class="form-control"
          id="validationDefault02"
          placeholder="Enter product description..."
          required
        />
      </div>

      <div class="col-md-6">
        <label for="validationDefault02" class="form-label"><strong>Price</strong></label>
        <input type="number" v-model="price" class="form-control" id="validationDefault02" placeholder="$20" required />
      </div>

      <div class="col-md-6">
        <label for="validationDefault02" class="form-label"><strong>Warranty Period</strong></label>
        <input
          type="number"
          v-model="warrantyPeriod"
          class="form-control"
          id="validationDefault02"
          placeholder="1 year"
          required
        />
      </div>

      <div class="col-md-6">
        <label for="validationDefault02" class="form-label"><strong>Weight in grams</strong></label>
        <input type="number" v-model="weight" class="form-control" id="validationDefault02" placeholder="5" required />
      </div>

      <div class="col-12">
        <button class="btn btn-primary w-100" type="submit">Add Product</button>
      </div>
    </form>
  </div>
</template>

<script>
import CRUD_Operations from '../../public/mixins/CRUD_Operations';
export default {
  name: 'newProduct',
  mixins: [CRUD_Operations],
  data() {
    return {
      title: '',
      description: '',
      price: '',
      weight: '',
      warrantyPeriod: '',
    };
  },
};
</script>

<style scoped>
/* Center the form and give spacing */
.container {
  max-width: 600px;
  margin: auto;
}

.form-label {
  font-weight: bold;
}

.btn {
  font-weight: bold;
}

.form-control {
  border-radius: 8px;
}

h2 {
  font-family: 'Arial', sans-serif;
  color: #333;
}

/* For larger screen devices */
@media (min-width: 768px) {
  .form-control {
    font-size: 1.1rem;
  }
}
</style>
