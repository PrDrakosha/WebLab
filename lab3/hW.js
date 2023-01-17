const cookieExpirationDays = 30;

function setCookie(name, value, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

document.addEventListener('DOMContentLoaded', (event) => {
  const pageAlias = document.querySelector('#historyInput')?.value;
  if (!pageAlias) return;

  const viewsCount = parseInt(getCookie(pageAlias) ?? '0') + 1;
  setCookie(pageAlias, viewsCount, cookieExpirationDays);
});