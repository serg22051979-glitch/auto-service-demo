const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    message.textContent =
        "Спасибо, " + name + "! Ваша заявка принята 🚗";

    form.reset();
});
