document.addEventListener("DOMContentLoaded", function () {

    fetch("data/site.json")
        .then(function (response) {

            if (!response.ok) {
                throw new Error("Could not load data/site.json");
            }

            return response.json();
        })

        .then(function (data) {

            document.getElementById("hero-title").textContent = data.hero.title;
            document.getElementById("hero-description").textContent = data.hero.description;

            document.getElementById("hero-button").textContent = data.hero.button_text;
            document.getElementById("hero-button").href = data.hero.button_url;

            // keep the rest of your existing code here

        })

        .catch(function (error) {
            console.error("Error loading site.json:", error);
        });

});
