



const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

   

    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.textContent = "☰";

        });

    });
}




document.querySelectorAll(".year").forEach(function (element) {

    element.textContent = new Date().getFullYear();

});




const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();
        const email = document.querySelector("#email").value.trim();
        const message = document.querySelector("#message").value.trim();

        const subject = encodeURIComponent(
            "Portfolio contact from " + name
        );

        const body = encodeURIComponent(
            "Hi Vijayakumari,\n\n" +
            message +
            "\n\nFrom: " + name +
            "\nEmail: " + email
        );

        window.location.href =
            "mailto:vijayakumarib245@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;

    });

}

