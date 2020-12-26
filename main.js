// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.dropdown-content a');
for (const navLink of navLinks) {
    navLink.addEventListener("click", scrollToNavLink);
}

function scrollToNavLink(e) {
    e.preventDefault();
    const href = this.getAttribute("href");

    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    });
}

// Up bottom scrolling
const arrowButton = document.getElementById("up");
arrowButton.addEventListener("click", function () {
    document.getElementById("dropdown").scrollIntoView({
        behavior: 'smooth'
    })
});

// Add in fade in animations for elements
AOS.init({
    easing: 'ease',
    duration: 1200,
    once: true
})