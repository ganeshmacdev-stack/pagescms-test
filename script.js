document.addEventListener("DOMContentLoaded", function () {

    fetch("data.json")
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not load data.json");
            }

            return response.json();
        })

        .then(function (data) {

            document.getElementById("hero-title").textContent = data.hero.title;
            document.getElementById("hero-description").textContent = data.hero.description;

            document.getElementById("hero-button").textContent = data.hero.button_text;
            document.getElementById("hero-button").href = data.hero.button_url;

            // About
            // Services
            // Contact
            // Footer
            // ...your existing code...

        })

        .catch(function (error) {
            console.error("Error loading data.json:", error);
        });

});
