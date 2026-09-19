document.addEventListener("DOMContentLoaded", function () {

    fetch("data.json")
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not load data.json");
            }

            return response.json();
        })

        .then(function (data) {

            /* =========================
               HERO
            ========================= */

            document.getElementById("hero-title").textContent =
                data.hero.title;

            document.getElementById("hero-description").textContent =
                data.hero.description;

            document.getElementById("hero-button").textContent =
                data.hero.button_text;

            document.getElementById("hero-button").href =
                data.hero.button_url;


            /* =========================
               HERO IMAGE
            ========================= */

            document.querySelector(".hero").style.backgroundImage =
                "url('" + data.hero.image + "')";


            /* =========================
               ABOUT
            ========================= */

            document.getElementById("about-title").textContent =
                data.about.title;

            document.getElementById("about-content").innerHTML =
                data.about.content.replace(/\n/g, "<br><br>");

            document.getElementById("about-button").textContent =
                data.about.button_text;

            document.getElementById("about-button").href =
                data.about.button_url;

            document.getElementById("about-image").src =
                data.about.image;


            /* =========================
               SERVICES
            ========================= */

            document.getElementById("services-title").textContent =
                data.services.title;

            document.getElementById("services-description").textContent =
                data.services.description;


            document.getElementById("service-1-title").textContent =
                data.services.service_1.title;

            document.getElementById("service-1-description").textContent =
                data.services.service_1.description;

            document.getElementById("service-1-link").href =
                data.services.service_1.link;


            document.getElementById("service-2-title").textContent =
                data.services.service_2.title;

            document.getElementById("service-2-description").textContent =
                data.services.service_2.description;

            document.getElementById("service-2-link").href =
                data.services.service_2.link;


            document.getElementById("service-3-title").textContent =
                data.services.service_3.title;

            document.getElementById("service-3-description").textContent =
                data.services.service_3.description;

            document.getElementById("service-3-link").href =
                data.services.service_3.link;


            /* =========================
               CONTACT
            ========================= */

            document.getElementById("contact-title").textContent =
                data.contact.title;

            document.getElementById("contact-description").textContent =
                data.contact.description;


            document.getElementById("contact-phone").textContent =
                data.contact.phone;

            document.getElementById("contact-phone").href =
                "tel:" + data.contact.phone;


            document.getElementById("contact-email").textContent =
                data.contact.email;

            document.getElementById("contact-email").href =
                "mailto:" + data.contact.email;


            document.getElementById("contact-address").textContent =
                data.contact.address;


            document.getElementById("contact-map").src =
                data.contact.map;


            /* =========================
               FOOTER
            ========================= */

            document.getElementById("footer-company").textContent =
                data.footer.company_name;

            document.getElementById("footer-description").textContent =
                data.footer.description;

            document.getElementById("footer-phone").textContent =
                data.footer.phone;

            document.getElementById("footer-email").textContent =
                data.footer.email;

            document.getElementById("footer-address").textContent =
                data.footer.address;

            document.getElementById("footer-copyright").textContent =
                data.footer.copyright;


            /* =========================
               PAGE TITLE
            ========================= */

            document.title = data.hero.title;


            console.log("Website content loaded successfully.");

        })

        .catch(function (error) {

            console.error("Error loading data.json:", error);

        });

});
