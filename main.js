// Add in fade in animations for elements
AOS.init({
    easing: 'ease',
    duration: 800,
    once: true
})

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.navigation a');
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
    document.getElementById("top").scrollIntoView({
        behavior: 'smooth'
    })
});

// Add different state to submit button
let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", submitActive);
function submitActive() {
    submitButton.classList.toggle("is_active");
    setTimeout(function() {
        submitButton.classList.toggle("is_active");
    }, 1000)
}