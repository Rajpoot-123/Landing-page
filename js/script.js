// =====================
// JavaScript Connected
// =====================

console.log("JavaScript Connected");

// =====================
// Navbar Toggle
// =====================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

// =====================
// Client Logo Slider
// =====================

const logoTrack = document.getElementById("logoTrack");

if (logoTrack) {

    let currentSlide = 0;

    function logoSlider() {

        // Sirf mobile me chalega
        if (window.innerWidth <= 768) {

            currentSlide++;

            if (currentSlide > 1) {
                currentSlide = 0;
            }

            logoTrack.style.transform =
                `translateX(-${currentSlide * 50}%)`;

        } else {

            // Desktop pe slider reset
            currentSlide = 0;
            logoTrack.style.transform = "translateX(0)";
        }

    }

    // Har 2.5 second baad
    setInterval(logoSlider, 2500);

}