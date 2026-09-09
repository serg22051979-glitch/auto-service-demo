const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.textContent =
        "Спасибо, " + name + "! Ваша заявка принята 🚗";

    form.reset();
});
const serviceCards = document.querySelectorAll(".service-card");
const selectedService = document.getElementById("selectedService");

serviceCards.forEach(function(card) {
    card.addEventListener("click", function() {

        const serviceName = card.querySelector("h3").textContent;

        selectedService.textContent =
            "Вы выбрали: " + serviceName;

        document.getElementById("contacts").scrollIntoView({
            behavior: "smooth"
        });
    });
});
