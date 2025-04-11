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

        // if (this.products.length > 0) {
        //   this.nextId = Math.max(...this.products.map((product) => product.id)) + 1;
        // }
      });
    },

    getSixProducts() {
      axios.get('http://localhost:3000/products').then((res) => {
        res.data.length = 6;
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
          title: this.title,
          description: this.description,
          price: parseFloat(this.price),
          weight: this.weight,
          warrantyInformation: this.warrantyPeriod,
          images: 'https://via.placeholder.com/150',
          availabilityStatus: 'In Stock',
          discountPercentage: 10,
          shippingInformation: 'Free shipping within 3-5 days',
          rating: 4,
        })
        .then((res) => {
          this.title = '';
          this.description = '';
          this.price = '';
          this.weight = '';
          this.warrantyPeriod = '';

          this.getAllProducts();
        });
    },
  },

  mounted() {
    this.getAllProducts();
  },
};
