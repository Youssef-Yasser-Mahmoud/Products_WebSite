import { createRouter, createWebHistory } from 'vue-router';

// for Lazy Loading
const Home = () => import('./components/Home.vue');
const Products = () => import('./components/Products.vue');
const About = () => import('./components/About.vue');
const newProduct = () => import('./components/newProduct.vue');
const ErrorPage = () => import('./components/ErrorPage.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/addProduct',
    name: 'newProduct',
    component: newProduct,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'ErrorPage',
    component: ErrorPage,
    meta: {
      hideNavBar: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
