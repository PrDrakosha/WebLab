const regEmail = /@/;
const regDot = /\./;
const regSpace = /\s/
const regFio = /\D/;
const regPhone = /^[+]\d/,
regSymb = /(\!|\"|\'|\#|\$|\%|\^|\&|\*|\(|\)|\||\+|\=|\\|\/|\?|\;|\:|\<|\>|\,|\~|\`)/;
/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
const form = document.querySelector('#contact')
const email = document.querySelector('#email');
const pNumber = document.querySelector('#phone');
const fio = document.querySelector('#fio');
const btn = document.getElementById('submit');

btn.addEventListener('click', inputHandler);

function inputHandler(event) {

    // if (!validateFio(fio)) {
    //     event.preventDefault();
    // }
    // if (!validatePhone(pNumber)) {
    //     event.preventDefault();
    // }
    if (!validateEmail(email)) {
        event.preventDefault();
    }
}

function validateEmail(email) {
    if (email.value.trim() === "") {
        alert("Заполните поле");
        email.focus();
        return false;
    }
    if (email.value !== "") {
        console.log(regSpace.test(email.value));
        if (regSymb.test((email.value)) || (!regDot.test(email.value)) || (!regEmail.test(email.value)) || (regSpace.test(email.value))) {
            alert("Email");
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
    if (!regFio.test(fio.value)) {
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
    if (!regPhone.test(pNumber.value)) {
        alert("В поле присутствуют лишние символы");
        pNumber.focus();
        return false;
    }
    if (!(/^[+]3/.test(pNumber.value) || /^[+]7/.test(pNumber.value))) {
        alert("Номер телефона должен начинаться с +7 или +3");
        pNumber.focus();
        return false;
    }
    if (/\s/.test(pNumber.value)) {
        alert("Номер телефона не должен содержать пробелы");
        pNumber.focus();
        return false;
    }
    if ((pNumber.value).length < 10 || (pNumber.value).length > 12) {
        alert("Длинна номера телефона должна быть от 9 до 11 цифр");
        pNumber.focus();
        return false;
    }
    return true;
}

const dropdown = document.querySelector('#birthDate');
const content = document.querySelector('#calendar');

if (dropdown && content) {
    dropdown.addEventListener('click', (event) => {
        content.hidden = false;
        event.stopPropagation();
    })

    content.addEventListener('click', event => event.stopPropagation());

    window.addEventListener('click', () => {
        content.hidden = true
    })
}
