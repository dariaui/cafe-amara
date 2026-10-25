const hamburger = document.querySelector(".hamburger");
const navWrapper = document.getElementById("nav-wrapper");
const overlay = document.getElementById("overlay");

if (hamburger && navWrapper && overlay) {
    const menuLinks = navWrapper.querySelectorAll(".main-nav a, .cta-btn");
    const mobileMenu = window.matchMedia("(max-width: 992px)");

    function openMenu() {
        navWrapper.classList.add("open");
        hamburger.classList.add("open");
        overlay.classList.add("open");

        hamburger.setAttribute("aria-expanded", "true");
        hamburger.setAttribute("aria-label", "Navigation schließen");

        menuLinks[0]?.focus();
    }

    function closeMenu(returnFocus = false) {
        navWrapper.classList.remove("open");
        hamburger.classList.remove("open");
        overlay.classList.remove("open");

        hamburger.setAttribute("aria-expanded", "false");
        hamburger.setAttribute("aria-label", "Navigation öffnen");

        if (returnFocus && mobileMenu.matches) {
            hamburger.focus();
        }
    }

    hamburger.addEventListener("click", () => {
        const isOpen = hamburger.getAttribute("aria-expanded") === "true";

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    overlay.addEventListener("click", () => closeMenu(true));

    menuLinks.forEach((link) => {
        link.addEventListener("click", () => closeMenu());
    });

    document.addEventListener("keydown", (event) => {
        if (
            event.key === "Escape" &&
            hamburger.getAttribute("aria-expanded") === "true"
        ) {
            closeMenu(true);
        }
    });

    mobileMenu.addEventListener("change", (event) => {
        if (!event.matches) {
            closeMenu();
        }
    });
}
