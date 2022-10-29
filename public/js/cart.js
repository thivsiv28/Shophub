const submitOrder = async (event) => {
  const response = await fetch("/api/orders/", {
    method: "POST",
  });

  if (response.ok) {
    alert("Your order was submitted!");
    document.location.replace("/api/departments");
  } else {
    alert("Failed to submit order!");
  }
};

document
  .querySelector("#submit-order-button")
  .addEventListener("click", submitOrder);

const removeProduct = async (event) => {
  if (event.target.hasAttribute("data-cartItemId")) {
    const id = event.target.getAttribute("data-cartItemId");

    const response = await fetch(`/api/cart/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      location.reload();
    } else {
      alert("Failed to remove product from cart");
    }
  }
};

document
  .querySelector(".cart-display")
  .addEventListener("click", removeProduct);

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

document.querySelector("#logout-button").addEventListener("click", logout);
