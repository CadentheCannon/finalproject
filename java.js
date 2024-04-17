// script.js
const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 }
];

function renderProducts() {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>$${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productContainer.appendChild(productElement);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const cartItems = document.getElementById('cart-items');
  const cartItem = document.createElement('li');
  cartItem.textContent = `${product.name} - $${product.price}`;
  cartItems.appendChild(cartItem);
}

function checkout() {
  alert('Thank you for your purchase!');
}

renderProducts();
