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

export const zhheaderMenu: MenuItem[] = [
	{ name: '工作经历', link: '/zh/company' },
	{ name: '项目', link: '/zh/projects' },
	{ name: '证书', link: '/zh/cert' },
];

export const footerMenu: MenuItem[] = [
	{ name: 'Company', link: '/company' },
	{ name: 'My Certificates', link: '/cert' },
	{ name: 'My Projects', link: '/projects' },
];

export const zhfooterMenu: MenuItem[] = [
	{ name: '工作经历', link: '/zh/company' },
	{ name: '项目', link: '/zh/projects' },
	{ name: '证书', link: '/zh/cert' },
];