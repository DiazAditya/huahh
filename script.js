const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.boxShadow = "0 15px 35px rgba(37,99,235,.4)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.boxShadow = "0 5px 15px rgba(0,0,0,.1)";

    });

});