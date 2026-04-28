let cart = [];

function addToCart(name) {
  cart.push(name);
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cartItems");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  document.getElementById("cartCount").textContent = cart.length;
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("active");
}

function checkout() {
  let message = "Hi, I want to order:%0A";

  cart.forEach(item => {
    message += "- " + item + "%0A";
  });

  message += "%0APlease share price details.";

  window.open("https://wa.me/919606922836?text=" + message);
}