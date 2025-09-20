
const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}



// Get all the add-to-cart icons.
const addToCartButtons = document.querySelectorAll('.pro a .cart');

// Get the quantity counter elements.
const quantityCounters = document.querySelectorAll('.quantity');

// Retrieve cart data from local storage or initialize an empty array.
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to update the cart quantity display.
function updateCartQuantity() {
    let totalQuantity = 0;
    cartItems.forEach(item => {
        totalQuantity += item.quantity;
    });
    quantityCounters.forEach(counter => {
        counter.textContent = totalQuantity;
    });
}

// Function to save cart data to local storage.
function saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

// Function to add a product to the cart.
function addToCart(event) {
    // Prevent the default link behavior.
    event.preventDefault();

    // Get the product element.
    const productElement = event.target.closest('.pro');

    // Extract product details.
    const productImg = productElement.querySelector('img').src;
    const productName = productElement.querySelector('.des h5').textContent;
    const productPrice = parseFloat(productElement.querySelector('.des h4').textContent.replace('$', ''));

    // Check if the item is already in the cart.
    const existingItem = cartItems.find(item => item.name === productName);

    if (existingItem) {
        // If it exists, just increment the quantity.
        existingItem.quantity += 1;
    } else {
        // If it's a new item, add it to the cart array.
        const newItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            img: productImg,
            quantity: 1
        };
        cartItems.push(newItem);
    }

    // Update the UI and local storage.
    updateCartQuantity();
    saveCart();
    alert(`${productName} has been added to the cart!`);
}

// Attach the `addToCart` function to each cart icon.
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Initial update of the cart quantity when the page loads.
updateCartQuantity();



// Function to display cart items on the cart page
function displayCartItems() {
    const cartTableBody = document.getElementById('cart-table-body');
    cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let subtotal = 0;

    cartTableBody.innerHTML = '';

    if (cartItems.length === 0) {
        cartTableBody.innerHTML = `<tr><td colspan="6" style="text-align: center; padding: 20px;">Your cart is empty.</td></tr>`;
    } else {
        cartItems.forEach(item => {
            const itemSubtotal = item.price * item.quantity;
            subtotal += itemSubtotal;

            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td><a href="#"><i class="far fa-times-circle remove-item" data-id="${item.id}"></i></a></td>
                <td><img src="${item.img}" alt="${item.name}"></td>
                <td>${item.name}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><input type="number" value="${item.quantity}" min="1" class="item-quantity" data-id="${item.id}"></td>
                <td>$${itemSubtotal.toFixed(2)}</td>
            `;
            cartTableBody.appendChild(newRow);
        });
    }

    // Update the subtotal and total display
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
}

// Function to handle removing an item from the cart
function removeItem(event) {
    if (event.target.classList.contains('remove-item')) {
        const itemId = parseInt(event.target.dataset.id);
        console.log('praseInt', itemId)
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Filter out the item with the matching ID
        cartItems = cartItems.filter(item => item.id !== itemId);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Re-display the cart items
        displayCartItems();
        // Also update the quantity in the header
        updateCartQuantity();
    }
}

// Function to update the quantity of an item
function updateQuantity(event) {
    if (event.target.classList.contains('item-quantity')) {
        const itemId = parseInt(event.target.dataset.id);
        const newQuantity = parseInt(event.target.value);
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Find the item and update its quantity
        const itemToUpdate = cartItems.find(item => item.id === itemId);
        if (itemToUpdate) {
            itemToUpdate.quantity = newQuantity;
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        }

        // Re-display the cart items and update the header quantity
        displayCartItems();
        updateCartQuantity();
    }
}


// Add event listeners
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
    // This listener is for the remove and quantity update events
    document.getElementById('cart-table-body').addEventListener('click', removeItem);
    document.getElementById('cart-table-body').addEventListener('change', updateQuantity);
});


// Single Product

const mainImg = document.getElementById('MainImg');
const smallImg = document.querySelectorAll('small-img');
const imgContainer = document.querySelector('.single-pro-img')

function changeImg(image){
    if(image.target.classList.contains('small-img')){
        mainImg.src = image.target.src
    }
}

imgContainer.addEventListener('click',changeImg);



