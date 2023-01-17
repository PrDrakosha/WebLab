localStorage.setItem('history', 'contact');
let form = document.querySelector('#contact'),
    submit = document.querySelector('#submit'),
    formInputs = document.querySelectorAll('input'),
    fio = document.querySelector('.input-fio'),
    birthDate = document.querySelector('.input-birthdate'),
    male = document.querySelector('#male'),
    female = document.querySelector('#female'),
    email = document.querySelector('.input-email'),
    phone = document.querySelector('.input-phone'),
    errorInp = document.querySelector('.errorInp'),
    errorFio1 = document.querySelector('#errorFio1'),
    errorFio2 = document.querySelector('#errorFio2')
    errorDate = document.querySelector('#errorDate'),
    errorSex = document.querySelector('#errorSex'),
    errorEmail = document.querySelector('#errorEmail'),
    errorPhone1 = document.querySelector('#errorPhone1'),
    errorPhone2 = document.querySelector('#errorPhone2'),
    errorPhone3 = document.querySelector('#errorPhone3'),
    errorPhone4 = document.querySelector('#errorPhone4');

const regSpace = /\s/,
    regSymb = /(\!|\"|\'|\#|\$|\%|\^|\&|\*|\(|\)|\||\+|\=|\\|\/|\?|\;|\:|\<|\>|\,|\~|\`)/,
    regEmail = /@/,
    regDot = /\./,
    regFio = /\D/,
    regPhone = /^[+]\d/,
    regDate = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/[0-9]{4}$/
    dropdown = document.querySelector('#birthDate'),
    content = document.querySelector('#calendar');

function validateFio(fio) {
    if (!regFio.test(fio.value)) {
        if (fio.classList.contains('invalid')){
            if (fio.classList.contains('correct')) {
                fio.classList.remove('correct');
            };
            errorFio1.hidden = false;
            return false;    
        }
        else {
        if (fio.classList.contains('correct')) {
            fio.classList.remove('correct');
        };
        fio.classList.add('invalid');
        errorFio1.hidden = false;
        return false;
        };
    };
    if (((fio.value).split(" ").length - 1) != 2) {
       if (fio.classList.contains('invalid')) {
        if (fio.classList.contains('correct')) {
            fio.classList.remove('correct');
        };
        errorFio2.hidden = false;
        return false;
       };
       if (fio.classList.contains('correct')) {
            fio.classList.remove('correct');
        };
        fio.classList.add('invalid');
        errorFio2.hidden = false;
        return false;
    };

    if (fio.classList.contains('invalid')) {
        fio.classList.remove('invalid');
    };
    fio.classList.add('correct');
    errorFio1.hidden = true;
    errorFio2.hidden = true;
    return true;
};

function validateDate(date) {
    if (date.value !== '') {
        if (!regDate.test(date.value)) {
            if (date.classList.contains('correct')) {
                date.classList.remove('correct');
            };
            if(date.classList.contains('invalid')) {
                errorDate.hidden = false;
                return false;
            }
            date.classList.add('invalid');
            errorDate.hidden = false;
            return false;
        }
        if (date.classList.contains('invalid')) {
            date.classList.remove('invalid');
        };
        date.classList.add('correct');
        errorDate.hidden = true;
        return true;
    }
};

function validateSex(male, female) {
    if (!male.checked && !female.checked) {
        errorSex.hidden = false;
        return false;
    }
    errorSex.hidden = true;
    return true;
};

function validateEmail(email) {
    if (email.value !== "") {
        if (regSymb.test((email.value)) || (!regDot.test(email.value)) || (!regEmail.test(email.value)) || (regSpace.test(email.value))) {
            if (email.classList.contains('invalid')) {
                if (email.classList.contains('correct')) {
                    email.classList.remove('correct');
                };
                errorEmail.hidden = false;
                return false;
            }
            else {
            if (email.classList.contains('correct')) {
                email.classList.remove('correct');
            }; 
            email.classList.add('invalid');
            errorEmail.hidden = false;
            return false;
            };
        };
        if (email.classList.contains('invalid')) {
            email.classList.remove('invalid');
        };
        email.classList.add('correct');
        errorEmail.hidden = true;
        return true;
    };

};

function validatePhone(pNumber) {
    if (!regPhone.test(pNumber.value)) {
        if (pNumber.classList.contains('invalid')) {
            if (pNumber.classList.contains('correct')) {
                pNumber.classList.remove('correct');
            };
            errorPhone1.hidden = false;
            return false;    
        };
        if (pNumber.classList.contains('correct')) {
            pNumber.classList.remove('correct');
        };
        pNumber.classList.add('invalid');
        errorPhone1.hidden = false;
        return false;
    };
    if (!(/^[+]3/.test(pNumber.value) || /^[+]7/.test(pNumber.value))) {
        if (pNumber.classList.contains('invalid')) {
            if (pNumber.classList.contains('correct')) {
                pNumber.classList.remove('correct');
            };
            errorPhone2.hidden = false;
            return false;    
        };
        if (pNumber.classList.contains('correct')) {
            pNumber.classList.remove('correct');
        };
        pNumber.classList.add('invalid');
        errorPhone2.hidden = false;
        return false;
    };
    if (/\s/.test(pNumber.value)) {
        if (pNumber.classList.contains('invalid')) {
            if (pNumber.classList.contains('correct')) {
                pNumber.classList.remove('correct');
            };
            errorPhone3.hidden = false;
            return false;    
        };
        if (pNumber.classList.contains('correct')) {
            pNumber.classList.remove('correct');
        };
        pNumber.classList.add('invalid');
        errorPhone3.hidden = false;
        return false;
    };
    if ((pNumber.value).length < 10 || (pNumber.value).length > 12) {
        if (pNumber.classList.contains('invalid')) {
            if (pNumber.classList.contains('correct')) {
                pNumber.classList.remove('correct');
            };
            errorPhone4.hidden = false;
            return false;    
        };
        if (pNumber.classList.contains('correct')) {
            pNumber.classList.remove('correct');
        };
        pNumber.classList.add('invalid');
        errorPhone4.hidden = false;
        return false;
    };

    if (pNumber.classList.contains('invalid')) {
        pNumber.classList.remove('invalid');
    };
    pNumber.classList.add('correct');
    errorPhone1.hidden = true;
    errorPhone2.hidden = true;
    errorPhone3.hidden = true;
    errorPhone4.hidden = true;
    return true;
};


form.onsubmit = function () {
    alert('Sent!')
    return false;
};

fio.onblur = function() {
    if (this.value == '') {
        if (this.classList.contains('correct')) {
            this.classList.remove('correct');
        }
        if (this.classList.contains('invalid')) {
            return false;
        }; 
        this.classList.add('invalid');
    }; 
    validateFio(fio);
};

fio.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
    };
};

birthDate.onblur = function() {
    if (this.value == '') {
        if (this.classList.contains('correct')){
            this.classList.remove('correct');
        };
        if (this.classList.contains('invalid')) {
            return false;
        }; 
        this.classList.add('invalid')   
    };
    validateDate(birthDate);
};

birthDate.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
    };
};

male.onfocus = function() {
    errorSex.hidden = true;
};

female.onfocus = function() {
    errorSex.hidden = true;
};


email.onblur = function() {
    if (this.value == '') {
        if (this.classList.contains('correct')) {
            this.classList.remove('correct');
        }
        if (this.classList.contains('invalid')) {
            return false;
        }; 
        this.classList.add('invalid');
    }; 
    validateEmail(email);
};

email.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
    };
    validateSex(male, female);
};

phone.onblur = function() {
    if (this.value == '') {
        if (this.classList.contains('correct')) {
            this.classList.remove('correct');
        }
        if (this.classList.contains('invalid')) {
            return false;
        }; 
        this.classList.add('invalid');
    }; 
    validatePhone(phone);
};

phone.onfocus = function() {
    if (this.classList.contains('invalid')) {
        this.classList.remove('invalid');
    };
};

// let onBlur = function () {
//     if (this.value == '') {
//         this.classList.add('invalid');
//     }; 
// };

// let onFocus = function () {
//     if (this.classList.contains('invalid')) {
//         this.classList.remove('invalid');
//     }
// };


if (dropdown && content) {
    dropdown.addEventListener('click', (event) => {
        content.hidden = false;
        event.stopPropagation();
    });

    content.addEventListener('click', event => event.stopPropagation());

    window.addEventListener('click', () => {
        content.hidden = true
        if ((fio.value == '') || (birthDate.value == '') || (email.value == '') || (phone.value == '')) {
            errorInp.hidden = false;
        }
        else {
            errorInp.hidden = true;
        };
        validateDate(birthDate);
        console.log((errorInp.hidden && errorFio1.hidden && errorFio2.hidden && errorDate.hidden && errorSex.hidden && errorEmail.hidden && errorPhone1.hidden && errorPhone2.hidden && errorPhone3.hidden && errorPhone4.hidden));
        if (errorInp.hidden && errorFio1.hidden && errorFio2.hidden && errorDate.hidden && errorSex.hidden && errorEmail.hidden && errorPhone1.hidden && errorPhone2.hidden && errorPhone3.hidden && errorPhone4.hidden) {
            submit.disabled = false;
        };
    })
};

// for (item of formInputs) {
//     item.addEventListener('focus', onFocus, false);
//     item.addEventListener('blur', onBlur, false);
// };