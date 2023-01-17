inputId = document.querySelector("#historyInput");

function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";" + ";path=/" ;
  }
  
  function getCookie(name, pos) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[pos]) : undefined;
  }
  

let counter;

document.addEventListener('DOMContentLoaded', (event) => {
    if (getCookie(inputId.value, 1) != undefined) {
        counter = parseInt(getCookie(inputId.value, 2)) + 1;
        setCookie(inputId.value, counter, 36525);
    } else {
        setCookie(inputId.value, 1, 36525);
    };
});