inputId = document.querySelector("#historyInput");
function setCookie(name, value, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";" + counter + ";path=/" ;
  }
  
  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

let counterIndex   = 1;
let counterAbout   = 1;
let counterAlbum   = 1;
let counterContact = 1;
let counterMyInt   = 1;
let counterStudies = 1;
let counterTest    = 1;

document.addEventListener('DOMContentLoaded', (event) => {
    if (inputId.value == "index") {
        if (getCookie(inputId.value) != undefined) {
            counterIndex+=1;
            setCookie(inputId.value, counterIndex, 36525);
        }
    }
    else if (inputId.value == "aboutme") {
        if (getCookie(inputId.value) != undefined) {
            counterAbout+=1;
            setCookie(inputId.value, counterAbout, 36525);
        }
    }
    else if (inputId.value == "album") {
        if (getCookie(inputId.value) != undefined) {
            counterAlbum+=1;
            setCookie(inputId.value, counterAlbum, 36525);
        }
    }
    else if (inputId.value == "contact") {
        if (getCookie(inputId.value) != undefined) {
            counterContact+=1;
           setCookie(inputId.value, counterContact, 36525);
        }
    }
    else if (inputId.value == "myinterests") {
        if (getCookie(inputId.value) != undefined) {
            counterMyInt+=1;
            setCookie(inputId.value, counterMyInt, 36525);
        }
    }
    else if (inputId.value == "studies") {
        if (getCookie(inputId.value) != undefined) {
            counterStudies+=1;
            setCookie(inputId.value, counterStudies, 36525);
        }
    }
    else if (inputId.value == "test") {
        if (getCookie(inputId.value) != undefined) {
            counterTest+=1;
            setCookie(inputId.value, counterTest, 36525);
        }
    }
    else{
        setCookie(inputId.value, 1, 36525);
    };
});