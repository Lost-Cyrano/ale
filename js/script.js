document.addEventListener("DOMContentLoaded", () => {
  const scheduleTable = document.getElementById("market-schedule");

  // Mock data for markets
  const markets = [
    { date: "2024-01-15", location: "Main Street Market", notes: "10 AM - 4 PM" },
    { date: "2024-01-22", location: "Town Square", notes: "9 AM - 5 PM" },
  ];

  markets.forEach(market => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${market.date}</td>
      <td>${market.location}</td>
      <td>${market.notes}</td>
    `;
    scheduleTable.appendChild(row);
    
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
