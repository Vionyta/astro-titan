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
	//{ name: 'Theme Info', link: '/theme-info' },
	//{ name: 'Our Team', link: '/team' },
	{ name: 'Company', link: '/company' },
	{ name: 'My Certificates', link: '/cert' },
	{ name: 'Projects', link: '/projects' },
];

export const footerMenu: MenuItem[] = [
	{ name: 'Company Detail', link: '/company' },
	{ name: 'My Certificates', link: '/cert' },
	{ name: 'My Projects', link: '/projects' },
];

//export const legalMenu: MenuItem[] = [
//	{ name: 'Privacy Policy', link: '/legal/privacy-policy' },
//	{ name: 'Terms of Service', link: '/legal/terms-of-service' },
//];
