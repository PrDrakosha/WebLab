cookieTable = document.querySelector(".cookieTable");
let cookieIndex   = document.querySelector('.index_cookie'),
    cookieAboutMe = document.querySelector('.aboutme_cookie'),
    cookieAlbum   = document.querySelector('.album_cookie'),
    cookieContact = document.querySelector('.contact_cookie'),
    cookieStudies = document.querySelector('.studies_cookie'),
    cookieMyInt   = document.querySelector('.myint_cookie'),
    cookieTest    = document.querySelector('.test_cookie'),
    lSIndex   = document.querySelector('.index_ls'),
    lSAboutMe = document.querySelector('.aboutme_ls'),
    lSAlbum   = document.querySelector('.album_ls'),
    lSContact = document.querySelector('.contact_ls'),
    lSStudies = document.querySelector('.studies_ls'),
    lSMyInt   = document.querySelector('.myint_ls'),
    lSTest    = document.querySelector('.test_ls');

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

cookieIndex.innerHTML   = readCookie('index') ?? 0;
cookieAboutMe.innerHTML = readCookie('aboutme') ?? 0;
cookieAlbum.innerHTML   = readCookie('album') ?? 0;
cookieContact.innerHTML = readCookie('contact') ?? 0;
cookieStudies.innerHTML = readCookie('studies') ?? 0;
cookieMyInt.innerHTML   = readCookie('myinterests') ?? 0;
cookieTest.innerHTML    = readCookie('test') ?? 0;

lSIndex.innerHTML   = localStorage.getItem('index') ?? 0;
lSAboutMe.innerHTML = localStorage.getItem('aboutme') ?? 0;
lSAlbum.innerHTML   = localStorage.getItem('album') ?? 0;
lSContact.innerHTML = localStorage.getItem('contact') ?? 0;
lSStudies.innerHTML = localStorage.getItem('studies') ?? 0;
lSMyInt.innerHTML   = localStorage.getItem('myinterests') ?? 0;
lSTest.innerHTML    = localStorage.getItem('test') ?? 0;