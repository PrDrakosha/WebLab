const thirdQ = querySelector('#thirdq');

function validateField(thirdQ)
{
    if (thirdQ.value.trim() === "") {
        alert("Заполните поле");
        thirdQ.focus();
        return false;
    }
    if (! /\D/.test(thirdQ.value)) {
        alert("В поле присутствуют цифры");
        thirdQ.focus();
        return false;
    }
    return true;
}