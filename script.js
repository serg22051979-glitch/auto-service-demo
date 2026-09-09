const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const selectedService = document.getElementById("selectedService");
const serviceCards = document.querySelectorAll(".service-card");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const service = selectedService.textContent.replace("Вы выбрали: ", "");

    message.textContent =
        "Спасибо, " + name +
        "! Запись на услугу «" + service +
        "» принята на " + date +
        " в " + time + " 🚗";

    form.reset();
});

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
