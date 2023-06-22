const products = [
    {
      name: 'olive green Oversized Tees',
      price: 9.99,
      image: '2.jpg'
    },
    {
      name: 'Crazy Brown Oversized Tees',
      price: 4.99,
      image: '1.jpg'
    },
    {
        name: 'Pinky Orange Oversized Tees',
        price: 2.99,
        image: '3.jpg'
      },
  ];
  
  
  function displayProducts() {
    const productsContainer = document.getElementById('products');
  
    products.forEach((product) => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');
  
      const productImage = document.createElement('img');
      productImage.src = product.image;
      productImage.alt = product.name;
      productCard.appendChild(productImage);
  
      const productName = document.createElement('h3');
      productName.textContent = product.name;
      productCard.appendChild(productName);
  
      const productPrice = document.createElement('p');
      productPrice.textContent = '$' + product.price;
      productCard.appendChild(productPrice);
  
      const addToCartButton = document.createElement('button');
      addToCartButton.textContent = 'Add to Cart';
      addToCartButton.addEventListener('click', () => {
        addToCart(product);
      });
      productCard.appendChild(addToCartButton);
  
      productsContainer.appendChild(productCard);
    });
  }
  
  function addToCart(product) {
    const cart = document.getElementById('cart');
  
    const cartItem = document.createElement('div');
    cartItem.textContent = product.name + ' - $' + product.price;
  
    cart.appendChild(cartItem);
  }
  
  window.addEventListener('DOMContentLoaded', displayProducts);
//////////////////////////////////////////////////////////////////////////-------------------
/////////-//////////-////---------------------/------------------------
  const cartItems = [];

function displayCart() {
  const cartContainer = document.getElementById('cart-items');
  cartContainer.innerHTML = '';

  cartItems.forEach((item) => {
    const cartItem = document.createElement('li');
    cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartContainer.appendChild(cartItem);
  });

  const total = calculateTotal();
  const totalElement = document.getElementById('total');
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function addToCart(product) {
    cartItems.push(product);
    displayCart();
  
    // Animate the product image when added to the cart
    const productImage = document.querySelector(`img[alt="${product.name}"]`);
    productImage.classList.add('product-added');
    setTimeout(() => {
      productImage.classList.remove('product-added');
    }, 1000);
  }
  

function calculateTotal() {
  let total = 0;
  cartItems.forEach((item) => {
    total += item.price;
  });
  return total;
}

function checkout() {
  if (cartItems.length === 0) {
    alert('Your cart is empty. Add some products before checking out.');
  } else {
    // Here you can implement the payment functionality
    // You can use an API or simulate a payment process
    // For the sake of simplicity, let's just display a success message
    alert('Payment successful. Thank you for your purchase!');
    cartItems.length = 0; // Clear the cart
    displayCart(); // Update the cart display
  }
}

const checkoutButton = document.getElementById('checkout-btn');
checkoutButton.addEventListener('click', checkout);
//---///////////----------------------------------------------------------------------------////----------------
