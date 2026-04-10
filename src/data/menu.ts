// src/data/menu.ts

export interface MenuItem {
	name: string;
	link: string;
	showArrow?: boolean;
	children?: {
		name: string;
		link: string;
	}[];
}

export const headerMenu: MenuItem[] = [
	{ name: 'Company', link: '/company' },
	{ name: 'My Certificates', link: '/cert' },
	{ name: 'Projects', link: '/projects' },
];

export const footerMenu: MenuItem[] = [
	{ name: 'Company Detail', link: '/company' },
	{ name: 'My Certificates', link: '/cert' },
	{ name: 'My Projects', link: '/projects' },
];

