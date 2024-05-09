import type {INavbarPageItems} from './Items';
export interface INavbarPage {
	title: string;
	items: INavbarPageItems[];
	models: number[];
	settingsTitle: string[];
}
