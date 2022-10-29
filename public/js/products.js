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
