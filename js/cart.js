/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
renderCart();

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
[x]
function clearCart() {
  const cartRows = document.getElementById('cart-rows');
  cartRows.innerHTML = '';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  const cartRows = document.getElementById('cart-rows');
  cart.items.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = ` <td>${item.name}</td> <td>${item.price}</td> <td>${item.quantity}</td> <td>${item.price * item.quantity}</td> <td><a href="#" class="delete">X</a></td>`;
    cartRows.appendChild(row);
  }
  );
}

// TODO: Find the table body
[x]

// TODO: Iterate over the items in the cart
[x]
// TODO: Create a TR
[x]
// TODO: Create a TD for the delete link, quantity,  and the item
[x]
// TODO: Add the TR to the TBODY and each of the TD's to the TR
[x]


// TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
function removeItemFromCart(event) {
  if (event.target.className === 'delete') {
    const name = event.target.parentElement.parentElement.firstElementChild.textContent;
    cart.removeItem(name);
    cart.saveToLocalStorage();
    renderCart();
  }
}



// TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
[x]
// TODO: Save the cart back to local storage
[x]
// TODO: Re-draw the cart table
[x]

// This will initialize the page and draw the cart on screen
renderCart();
