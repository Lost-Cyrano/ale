document.addEventListener("DOMContentLoaded", () => {
  const productCarousel = document.getElementById("product-carousel");

  fetch("assets/info.json")
    .then(response => response.json())
    .then(products => {
      products.forEach(product => {
        const slide = document.createElement("div");
        slide.classList.add("swiper-slide");
        slide.innerHTML = `
          <div class="product">
            <img src="assets/img/${product.image_name}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: €${product.price}</p>
          </div>
        `;
        productCarousel.appendChild(slide);
      });

      // Initialize Swiper.js
      new Swiper('.swiper-container', {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
      });
    })
    .catch(error => console.error("Error loading products:", error));
});
