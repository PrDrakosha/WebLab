const thirdQ = document.querySelector('#thirdq'),
form = document.querySelector('.main');

form.addEventListener('submit', (event) => {
    if (thirdQ.value.trim() === "") {
        alert("Заполните поле");
        thirdQ.focus();
        event.preventDefault();
    }
    if (/[0-9]/.test(thirdQ.value)) {
        alert("В поле присутствуют цифры");
        thirdQ.focus();
        event.preventDefault();
    }
});