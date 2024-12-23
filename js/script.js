document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  fetch("assets/info.json")
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");

        productDiv.innerHTML = `
          <img src="assets/img/${product.image_name}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: €${product.price}</p>
        `;

        productList.appendChild(productDiv);
      });
    })
    .catch(error => {
      console.error("Error loading products:", error);
    });
});
