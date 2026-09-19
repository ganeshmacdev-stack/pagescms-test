fetch("data.json")
    .then(response => response.json())
    .then(data => {

        document.getElementById("hero-title").textContent =
            data.hero.title;

        document.getElementById("hero-description").textContent =
            data.hero.description;

        document.getElementById("hero-image").src =
            data.hero.image;

    });
