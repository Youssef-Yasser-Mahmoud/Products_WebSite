import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      fiveProducts: [],
      title: '',
      description: '',
      price: '',
      nextId: 1,
      product: {},
      id: '',
    };
  },
  methods: {
    getAllProducts() {
      axios.get('http://localhost:3000/products').then((res) => {
        this.products = res.data;

        if (this.products.length > 0) {
          this.nextId = Math.max(...this.products.map((product) => product.id)) + 1;
        }
      });
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

    getId() {
      this.id = this.$route.params.id;
    },

    getProduct(id) {
      axios.get(`http://localhost:3000/products/${id}`).then((res) => {
        this.product = res.data;
      });
    },

    addProduct() {
      axios
        .post('http://localhost:3000/products', {
          id: this.nextId,
          title: this.title,
          description: this.description,
          price: parseFloat(this.price),
        })
        .then((res) => {
          this.title = '';
          this.description = '';
          this.price = '';

          this.nextId++;

          this.getAllProducts();
        });
    },
  },

  // mounted() {
  //   this.getAllProducts();
  // },
};
