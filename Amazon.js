document.addEventListener("DOMContentLoaded", function () {
    // Search Bar Functionality
    const searchInput = document.querySelector(".search-input");
    const searchIcon = document.querySelector(".search-icon");

    searchIcon.addEventListener("click", function () {
        alert("Searching for: " + searchInput.value);
    });

    searchInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            alert("Searching for: " + searchInput.value);
        }
    });

    // Sign-in Click Event
    document.querySelector(".nav-signin").addEventListener("click", function () {
        alert("Redirecting to Sign-in Page...");
    });

    // Cart Counter
    let cartCount = 0;
    const cartIcon = document.querySelector(".nav-cart");

    cartIcon.addEventListener("click", function () {
        cartCount++;
        cartIcon.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Cart (${cartCount})`;
    });

    // "See More" Click Action
    const seeMoreLinks = document.querySelectorAll(".box-content p");
    
    seeMoreLinks.forEach(link => {
        link.addEventListener("click", function () {
            alert("More details coming soon...");
        });
    });

    // Back to Top Smooth Scroll
    document.querySelector(".foot-panel1").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
