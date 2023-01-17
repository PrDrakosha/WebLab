const containerSelector = '#lists-container';

const interests = [
	{
		headerId: 'hobby',
		title: 'Моё хобби',
		items: [
			'Рисование',
			'Пение',
			'Настольные игры'
		]
	},
	{
		headerId: 'books',
		title: 'Мои любимые книги',
		items: [
			'Роберт Шекли "Абсолютное оружие"',
			'Сага о Ведьмаке',
			'Гарри Гаррисон "Специалист по этике"',
			'Антуан де-сент Экзюпери "Маленький Принц"'
		]
	},
	{
		headerId: 'music',
		title: 'Моя любимая музыка',
		items: [
			'Rock',
			'DSBM',
			'slowcore',
			'synthwave',
			'EDM',
			'noise',
			'jazz',
			'gabba',
			'uptempo',
			'maidcore',
			'grindcore',
			'pop',
			'classic',
			'death metal'
		]
	},
	{
		headerId: 'films',
		title: 'Мои любимые фильмы',
		items: [
			'Ослеплённый желаниями',
			'Невероятная жизнь Уолтера Митти',
			'500 дней лета',
			'Твин Пикс',
			'Паприка',
			'Хеллсинг OVA',
			'Судьба: Начало'
		]
	},
	{
		headerId: 'games',
		title: 'Мои любимые игры',
		items: [
			'Dark Souls',
			'Bloodborne',
			'Salts and Sanctuary',
			'Skyrim',
			'Gothic',
			'Oblivion',
			'Fallout: New Vegas',
			'Metro',
			'S.T.A.L.K.E.R.',
			'Slay the Spire',
			'Deponia',
			'The Whispered World',
			'The Witcher',
			'Elden Ring'
		]
	}
];

const listsContainer = document.querySelector(containerSelector);
drawLists(interests, listsContainer);

function drawList(list, container) {
	const listContainer = document.createElement('div');

	const header = document.createElement('header');
	header.id = `#${list.headerId}`;

	const title = document.createElement('h2');
	title.innerHTML = list.title;

	header.appendChild(title);
	listContainer.appendChild(header);

	const listElement = document.createElement('ul');
	list.items.forEach(item => {
		const listItem = document.createElement('li');
		listItem.innerHTML = item;
		listElement.appendChild(listItem);
	});

	listContainer.appendChild(listElement);
	container.appendChild(listContainer);
}

function drawLists(lists, container){
	lists.forEach(list => drawList(list, container));
}