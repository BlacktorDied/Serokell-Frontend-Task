const form = document.getElementById('feedbackForm');

form.addEventListener('submit', function (event) {
event.preventDefault();

const formData = new FormData(form);
const data = {};
formData.forEach((value, key) => {
    data[key] = value;
});

console.log('Form data:', data);
});