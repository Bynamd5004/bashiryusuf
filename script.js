// ======================================
// PORTFOLIO WEBSITE JAVASCRIPT
// ======================================

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    menuBtn.innerHTML = mobileMenu.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});

// ======================================
// STICKY HEADER
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background = "rgba(15,23,42,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        header.style.background = "rgba(15,23,42,.80)";
        header.style.boxShadow = "none";

    }

});

// ======================================
// BACK TO TOP
// ======================================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    }

    else {

        backToTop.classList.remove("show");

    }

});

// ======================================
// COUNTER ANIMATION
// ======================================

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let count = 0;

            const speed = target / 80;

            const update = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(update);

                }

                else {

                    counter.innerText = target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

}, {

    threshold: .5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

// ======================================
// SCROLL REVEAL
// ======================================

const reveals = document.querySelectorAll(

"section, .service-card, .project-card, .certificate-card, .testimonial-card, .info-box"

);

const revealObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(40px)";

    item.style.transition = ".8s ease";

    revealObserver.observe(item);

});

// ======================================
// ACTIVE NAVIGATION
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(

".nav-links a, .mobile-menu a"

);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

// ======================================
// CONTACT FORM
// ======================================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const inputs = form.querySelectorAll(

            "input, textarea"

        );

        let valid = true;

        inputs.forEach(input => {

            if (input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            }

            else {

                input.style.border = "none";

            }

        });

        if (valid) {

            alert("Thank you! Your message has been sent.");

            form.reset();

        }

    });

}

// ======================================
// TYPING EFFECT
// ======================================

const title = document.querySelector(".hero-text h2");

if (title) {

const words = [

"Front-End Developer",

"UI Designer",

"Web Designer",

"Creative Coder"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function type() {

const current = words[wordIndex];

if (!deleting) {

title.textContent = current.substring(0, charIndex++);

if (charIndex > current.length) {

deleting = true;

setTimeout(type, 1200);

return;

}

}

else {

title.textContent = current.substring(0, charIndex--);

if (charIndex < 0) {

deleting = false;

wordIndex++;

if (wordIndex >= words.length) {

wordIndex = 0;

}

}

}

setTimeout(type, deleting ? 60 : 120);

}

type();

}

// ======================================
// CURRENT YEAR
// ======================================

const year = new Date().getFullYear();

const footerText = document.querySelector(".footer-bottom p");

if (footerText) {

    footerText.innerHTML =
        `© ${year} Bashir Yusuf. All Rights Reserved.`;

}

console.log("Portfolio Loaded Successfully 🚀");