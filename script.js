function toggleMenu() {
    let menu = document.querySelector(".menu");
    let menuIcon = document.getElementById("menu-icon");

    menu.classList.toggle("active");

    // Toggle icon between ☰ and ✖
    if (menu.classList.contains("active")) {
        menuIcon.textContent = "✖"; // Show X icon
    } else {
        menuIcon.textContent = "☰"; // Show menu icon
    }
}


//Screen Loader
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    setTimeout(() => {
        loader.style.display = "none";
        content.style.display = "block";
    }, 1500); // 1.5 seconds before showing content
});


// Show button when user scrolls down
window.onscroll = function () {
    let button = document.getElementById("backToTop");
    if (document.documentElement.scrollTop > 300) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
};

// Scroll to top smoothly when clicked
document.getElementById("backToTop").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};




document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
});


// Portfolio Section Javascript
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-filter");

            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            portfolioItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

