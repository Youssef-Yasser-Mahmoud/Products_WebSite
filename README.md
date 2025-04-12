# Vue CRUD Products App 🛍️

A simple product management web app built with Vue.js ___**`(Options API)`**___ using **`mixins`** for reusable logic and **`Bootstrap`** for styling. The app includes features like **`adding`**, **`viewing`**, and **`deleting`** products, with data handled by a mock backend powered by **`JSON Server`**.

## 🔧 Tech Stack

- ⚙️ **Vue 3** (Options API)
- 🧭 **Vue Router**
- 📦 **Axios** for HTTP requests
- 🎨 **Bootstrap 5** for UI styling
- 🗂️ **json-server** for fake RESTful backend

## 🚀 Features

- ✅ Add new products (with title, description, and price)
- 📄 View all products in a styled table
- 🔍 View detailed info for a single product
- ❌ Delete a product by ID
- 🔁 Automatically refresh product list after any operation

## 📁 Project Structure Highlights

- `src/components/Products.vue` – Displays all products
- `src/components/SingleProduct.vue` – Shows individual product details
- `src/components/newProduct.vue` – Form to add a new product
- `mixins/CRUD_Operations.js` – Contains all reusable logic for CRUD operations
- `public/db.json` – Mock database for storing product data

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```
### 2. Run JSON Server
Make sure db.json exists in your root directory or public/ folder:
```bash
npx json-server --watch public/db.json --port 3000
```
### 3. Start the Vue app
```bash
npm run dev
```
The app will be running at **http://localhost:5173** and will interact with the **`JSON server`** running at http://localhost:3000.

---

📌 Notes
Products added through the UI are saved in db.json.

The app uses Vue's Options API (not Composition API).

Be sure to keep both Vue and JSON Server running simultaneously.


















