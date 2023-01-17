const regEmail = /\S/;
const regFio = /\D/;
const regPhone = /^[+]\d/;
const email = document.querySelector('#email');
const pNumber = document.querySelector('#phone');
const fio = document.querySelector('#fio');
const btn = document.getElementById('submit');

btn.addEventListener('click', inputHandler);

function inputHandler(event) {

    if(! validateFio(fio)) {
        event.preventDefault();
    }
    if(! validatePhone(pNumber)) {
        event.preventDefault();
    }
    if(! validateEmail(email)) {
        event.preventDefault();
    }
}

function validateEmail(email)
{
    if (email.value.trim() === "") {
        alert("Заполните поле");
        email.focus();
        return false;
    }
    if (email.value !== "") {
        console.log(regEmail);
        if (! regEmail.test(email.value)) {
            alert("В поле присутствуют лишние символы");
            email.focus();
            return false;
        }
    }
    return true;
}

function validateFio(fio) {

    if (fio.value.trim() === "") {
        alert("Заполните поле");
        fio.focus();
        return false;
    }
    if(! regFio.test(fio.value)) {
        alert("В поле присутствуют лишние символы");
        fio.focus();
        return false;
    }
    if (((fio.value).split(" ").length - 1) != 2) {
        alert("Форма ФИО введена некорректно");
        fio.focus();
        return false;
    }
    return true;
}

function validatePhone(pNumber) {

    if (pNumber.value.trim() === "") {
        alert("Заполните поле");
        pNumber.focus();
        return false;
    }
    if(! regPhone.test(pNumber.value)) {
        alert("В поле присутствуют лишние символы");
        pNumber.focus();
        return false;
    }
    if(! (/^[+]3/.test(pNumber.value) || /^[+]7/.test(pNumber.value))) {
        alert("Номер телефона должен начинаться с +7 или +3");
        pNumber.focus();
        return false;
    }
    if(/\s/.test(pNumber.value)) {
        alert("Номер телефона не должен содержать пробелы");
        pNumber.focus();
        return false;
    }
    if((pNumber.value).length < 10 || (pNumber.value).length > 12) {
        alert("Длинна номера телефона должна быть от 9 до 11 цифр");
        pNumber.focus();
        return false;
    }
    return true;
}