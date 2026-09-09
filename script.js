const form = document.getElementById("bookingForm");
const message = document.getElementById("message");
const selectedService = document.getElementById("selectedService");
const serviceCards = document.querySelectorAll(".service-card");

form.addEventListener("submit", function(event) {
    event.preventDefault();
const selectedDate = document.getElementById("date").value;
const chosenDate = new Date(selectedDate + "T00:00:00");

if (chosenDate.getDay() === 0) {
    alert("По воскресеньям автосервис не работает. Выберите другую дату.");
    return;
}
    const name = document.getElementById("name").value;
    const date = document.getElementById("date").value;

    const service = selectedService.textContent.replace("Вы выбрали: ", "");

const formattedDate = new Date(date + "T00:00:00").toLocaleDateString("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric"
});

    message.innerHTML =
    "<strong>Спасибо, " + name + "!</strong><br>" +
    "Услуга: " + service + "<br>" +
    "Дата: " + date + "<br>" +
    "Заявка принята, мы с Вами свяжемся как можно быстрее 🚗";

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
const dateInput = document.getElementById("date");
dateInput.addEventListener("change", function () {
    const selectedDate = new Date(this.value + "T00:00:00");

    if (selectedDate.getDay() === 0) {
        alert("По воскресеньям автосервис не работает. Выберите другую дату.");
        this.value = "";
    }
});
const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;
flatpickr("#date", {
    minDate: "today",

    disable: [
        function(date) {
            return date.getDay() === 0;
        }
    ],

    dateFormat: "Y-m-d"
});
