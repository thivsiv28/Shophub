// When added to cart, it will display a message briefly indicating that this product has been
// added to cart.

const displayAddedToCartMessage = (message_id) => {
  const messages = document.querySelectorAll(".added-message");
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].getAttribute("data-messageId") === message_id) {
      messages[i].style.display = "block";
      const timer = setInterval(function () {
        messages[i].style.display = "none";
        clearInterval(timer);
      }, 2000);
    }
  }
};

const addToCart = async (event) => {
  if (event.target.hasAttribute("data-productId")) {
    const productId = event.target.getAttribute("data-productId");

    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ product_id: productId }),
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      alert("Failed to add product to cart");
    }
    displayAddedToCartMessage(productId);
  }
};

const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert("Failed to log out.");
  }
};

document
  .querySelector(".products-display")
  .addEventListener("click", addToCart);

document.querySelector("#logout-button").addEventListener("click", logout);
