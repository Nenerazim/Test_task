import type {INavbarPage} from '@app/Interfaces/NavbarPage';

export const MockNavbarPage: INavbarPage = {
	title: 'Проведение ТО и мелкий ремонт',
	items: [
		{
			title: 'Общее',
			href: '/'
		},
		{
			title: 'Товары',
			href: '/product'
		},
		{
			title: 'Доп. расходы',
			href: '/add-expenses'
		}
	],
	models: [0, 0, 0, 0, 0, 0, 0],
	settingsTitle: ['Наименование еденицы', 'Цена', 'Кол-во', 'Название товара', 'Итого']
};
