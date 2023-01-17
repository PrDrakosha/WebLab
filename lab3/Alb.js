localStorage.setItem('history', 'album');
let fotos = [
		{url: 'https://sun9-60.userapi.com/impg/iTmU9ly_ad-8ACEtm8Zl8Qc8ePjkYR0RvmYc0A/e1parfYWeCc.jpg?size=1633x2160&quality=95&sign=af98b59eaab1cdc9f5f941f750579f1d&type=album', index: 0},
		{url: 'https://sun9-84.userapi.com/impg/f7ri31BsNPgkpjBn7iZRjOvWHVMNhxf_x08oiA/o4_x8K4GoE8.jpg?size=1682x2160&quality=95&sign=6923509ee35b4a67c2884e273515688c&type=album', index: 1},
		{url: 'https://sun9-12.userapi.com/impg/plzXNeEvOX2_x_4cLsNVooN9GMUY6BuLdMVhYg/Ld3nOBGs-Xk.jpg?size=2560x1920&quality=95&sign=4d4db8e55c73d6166277fb61b44d24fb&type=album', index: 2},
		{url: 'https://sun9-20.userapi.com/impg/-LTJx8Pl08E9ixHGP97zhXxGoKT4JgxY6cnaaw/CYErSDz4o48.jpg?size=2159x2160&quality=95&sign=e973914ad952d2b1923abd40700df82a&type=album', index: 3},
		{url: 'https://sun9-38.userapi.com/impg/vIo7R3QJEKwdsQppr4QFEINvAfq8BbJ28cnfHQ/1i18EhFNTHw.jpg?size=1887x2160&quality=95&sign=69e92db45869f0fcd1b2b5b9d8e770b9&type=album', index: 4},
		{url: 'https://sun9-31.userapi.com/impg/JY0j0MNQIWM-0hkfu-e7fUziC2EGGmOnekQreg/ioJaB0mpxVM.jpg?size=1703x1640&quality=95&sign=05e20eb78b15f4c43a81885de378e42f&type=album', index: 5},
		{url: 'https://sun9-15.userapi.com/impg/5WO_LGe-Tcs1QwDcbPCg3kj-4M47rJ_CaBBx7g/HxsvUn-SJ0M.jpg?size=1668x1668&quality=96&sign=6059cf809b52e0f1fdbcee9e897e8822&type=album', index: 6},
		{url: 'https://sun9-83.userapi.com/impg/dmLmBgNO-V-shMckVIiNwakcGD3tQjjTO9SpqQ/oj5dYo8hH-Y.jpg?size=2160x2160&quality=96&sign=97062c800d9cfe83550a9667edfeb9f3&type=album', index: 7},
		{url: 'https://sun9-42.userapi.com/impg/59mcI7TYCmCqfB9J6i3bS-RzjjoMBRKinClZOQ/Ge1yMJ9D9HI.jpg?size=2160x2160&quality=96&sign=87f15f24e3a59ae6f18118ff4120579c&type=album', index: 8},
		{url: 'https://sun9-39.userapi.com/impg/-q5mSf4wJW7HMs03-7MxeNYme1eYXdALrxcH5g/21VT8aj7pCk.jpg?size=2500x2063&quality=96&sign=84d8cbc857580d5bdbd65cee881de95d&type=album', index: 9},
		{url: 'https://sun9-54.userapi.com/impg/ZT__8E4nSGtQluXSrD5gmeBICiPDs8OoT3eUTQ/Uf2O83k6OUs.jpg?size=2160x2160&quality=96&sign=7ea51996c06f51478d4ef1888bd8641d&type=album', index: 10},
		{url: 'https://sun9-57.userapi.com/impg/gkgFEAp14syHWpFrM01iGanJMTIzToYMwQMGAA/7Lh_GdOQmKw.jpg?size=2500x1590&quality=96&sign=9b6f07a4708abe01b7597ab4f858536c&type=album', index: 11},
		{url: 'https://sun9-29.userapi.com/impg/tp5xjoTXyNXYlZHstN2OP2fIvKfgbMfnCTQqzg/TI9pR4ZiQDo.jpg?size=1500x1100&quality=96&sign=78d8bae54eb3e8ec81a8f348adbe75b0&type=album', index: 12},
		{url: 'https://sun9-32.userapi.com/impg/HesU7f3e_wxTM12m-tDC565cKWzS2yA2WTxViA/5_rrPIEQJ2k.jpg?size=840x579&quality=96&sign=2086ac52066922d4451cb8dc6bdf566e&type=album', index: 13},
		{url: 'https://sun9-63.userapi.com/impg/amVLq0yvONhxfF8knUCrOxbX7DNrf4g2dwY6og/mLag3LwFu9I.jpg?size=1747x2160&quality=95&sign=8125b9af4d7fd88b5a562029b2a28f71&type=album', index: 14}
]
let titles = [
	{title: 'Ху Тао фан арт'},
	{title: 'Тигнари фан арт'},
	{title: 'Оригинальный арт'},
	{title: 'Бутылочка'},
	{title: 'Оригинальный арт'},
	{title: 'Оригинальный арт'},
	{title: 'Оригинальный арт'},
	{title: 'Дракониха'},
	{title: 'Кроссовер'},
	{title: 'Оригинальный арт'},
	{title: 'Янь Фэй фанарт'},
	{title: 'Оригинальный арт'},
	{title: 'Стадик'},
	{title: 'Оригинальный арт'},
	{title: 'Аяка фанарт'}
	]

const imagesPerRow = 3;
const tableContainer = document.querySelector('.table-container');
const table = document.createElement('table');

const slider = document.querySelector('.slider'),
sliderContainer = document.querySelector('.slider__container'),
closeButton = document.querySelector('.slider__close'),
//  leftButton = document.querySelector('.slider__btn_left'),
//  rightButton = document.querySelector('.slider__btn_right'),
picContainer = document.querySelector('.slider__picture');

let row,
photoIndex,
photo,
ptitle,
cell,
img,
imgFull,
imgNew,
title;


for(let rowIndex = 0; rowIndex < fotos.length / imagesPerRow; rowIndex++)
{
	row = document.createElement('tr');

	for(let cellIndex = 0; cellIndex < imagesPerRow; cellIndex++)
	{
		photoIndex = rowIndex * imagesPerRow + cellIndex;
		photo = fotos[photoIndex];
		ptitle = titles[photoIndex];

		cell = document.createElement('td');
		img = document.createElement('img');
		img.className = 'imgSmall';
		imgNew = document.createElement('img');
		imgNew.className = 'imgFull';
		title = document.createElement('span');
		img.src = photo.url;
		title.innerHTML = ptitle.title;

		img.addEventListener("click", (imgFull) =>{
			imgFull.preventDefault();
			imgF = document.createElement('img');
			imgF.className = 'imgFull';
			imgF.src = imgFull.currentTarget.src;
			slider.classList.add('active');
			slider.hidden = false;
			imgF.style.objectFit = "contain";
			picContainer.append(imgF);
		});

		// leftButton.addEventListener("click", (event) => {
		// 	event.preventDefault();
		// 	ind = fotos.find(obj => obj.url === imgF.src);
		// 	changePicture("left", ind.index, imgF);
		// });

		// rightButton.addEventListener("click", (event) => {
		// 	event.preventDefault();
		// 	ind = fotos.find(obj => obj.url === imgF.src);
		// 	changePicture("right", ind.index, imgF);
		// });

		closeButton.addEventListener("click", (event) => {
			event.preventDefault();
			picContainer.innerHTML = "";
			slider.classList.remove('active');
			slider.hidden = true;
		});

		cell.appendChild(img);
		cell.appendChild(title);

		row.appendChild(cell);
	}

	table.appendChild(row);
};

tableContainer.appendChild(table);


function changePicture(direction, index, image) {
	if (direction === "left") {
		if (photoIndex > 0) {
			imgNew.src = fotos[index-1].url;
			imgNew.style.objectFit = "contain";
			image.replaceWith(imgNew);
			image = imgNew;
		}
		else {
			imgNew.src = fotos[fotos.length].url;
			imgNew.style.objectFit = "contain";
			image.replaceWith(imgNew);
			image = imgNew;
		}
	}
	else if (direction === "right") {
		if (photoIndex < fotos.length-1) {
			imgNew.src = fotos[index+1].url;
			imgNew.style.objectFit = "contain";
			image.replaceWith(imgNew);
			image = imgNew;
		}
		else {
			imgNew.src = fotos[0].url;
			imgNew.style.objectFit = "contain";
			image.replaceWith(imgNew);
			image = imgNew;
		}
	}

}
