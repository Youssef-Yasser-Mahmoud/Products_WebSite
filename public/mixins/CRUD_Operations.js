import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      fiveProducts: [],
    };
  },
  methods: {
    getAllProducts() {
      axios.get('http://localhost:3000/products').then((res) => (this.products = res.data));
    },
    getFiveProducts() {
      axios.get('http://localhost:3000/products').then((res) => {
        res.data.length = 5;
        this.fiveProducts = res.data;
      });
    },
    deleteProduct(id) {
      axios.delete(`http://localhost:3000/products/${id}`).then(() => this.getAllProducts());
    },
  },
};
