<template>
  <div class="container my-4">
    <h2 class="text-center mb-4">All Products</h2>

    <table class="table table-bordered table-striped table-hover">
      <thead class="table-dark text-center">
        <tr>
          <th style="width: 5%">#</th>
          <th style="width: 20%">Title</th>
          <th class="d-none d-md-table-cell" style="width: 30%">Description</th>
          <th style="width: 10%">Price</th>
          <th style="width: 15%">Image</th>
          <th style="width: 10%">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.title }}</td>
          <td class="d-none d-md-table-cell">{{ product.description }}</td>
          <td>${{ product.price }}</td>
          <td>
            <img :src="product.images" alt="image" class="img-fluid rounded" style="max-height: 50px" />
          </td>
          <td>
            <button class="btn btn-danger btn-sm" @click="deleteProduct(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import CRUD_Operations from '../../public/mixins/CRUD_Operations';

export default {
  name: 'Products',
  mixins: [CRUD_Operations],
  mounted() {
    this.getAllProducts();
  },
};
</script>

<style scoped>
table {
  font-size: 14px;
}

td,
th {
  vertical-align: middle;
}
</style>
