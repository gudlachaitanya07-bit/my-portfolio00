
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    themeToggle.textContent =
        document.body.classList.contains("light") ? "☾" : "☀";
});

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navigationLinks.forEach(link => {
        link.style.color =
            link.getAttribute("href") === "#" + current
                ? "#ff3434"
                : "";
    });
});

