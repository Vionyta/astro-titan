import type { ImageMetadata } from 'astro';

// List of Logo of Certification and vendors
// Replace these imports with your actual logo files
import logo1 from '../assets/images/logos/01_MMU_BE.png';
import logo2 from '../assets/images/logos/isc2_cissp.png';
import logo3 from '../assets/images/logos/astro.jpg';
import logo4 from '../assets/images/logos/CrowdStrike.png';
import logo5 from '../assets/images/logos/Barracuda.png';
import logo6 from '../assets/images/logos/forcepoint_square.png';
import logo7 from '../assets/images/logos/illumio.png';
import logo8 from '../assets/images/logos/menlo.png';
import logo9 from '../assets/images/logos/darktrace.png';
import logo10 from '../assets/images/logos/CCNA.png';
import logo11 from '../assets/images/logos/gigamon.png';
import logo12 from '../assets/images/logos/LogRhythm.png';
import logo13 from '../assets/images/logos/Fireeye.jpg';
import logo14 from '../assets/images/logos/netskope.png';
import logo15 from '../assets/images/logos/tenable.io.png';
import logo16 from '../assets/images/logos/tenable.nessus.png';
import logo17 from '../assets/images/logos/fortinet.png';
import logo18 from '../assets/images/logos/infoblox.png';
import logo19 from '../assets/images/logos/ubuntu.png';
import logo20 from '../assets/images/logos/redhat.png';
import logo21 from '../assets/images/logos/centoes.png';
import logo22 from '../assets/images/logos/cloudflare.png';
import logo23 from '../assets/images/logos/freebsd.jpg';
import logo24 from '../assets/images/logos/googlecloud.png';
import logo25 from '../assets/images/logos/azure.png';
import logo26 from '../assets/images/logos/IPv6Forum.jpg';
import logo27 from '../assets/images/logos/Junos.jpg';
import logo28 from '../assets/images/logos/alibaba.png';
import logo29 from '../assets/images/logos/sangfor.png';
import logo30 from '../assets/images/logos/vmware.png';
import logo31 from '../assets/images/logos/Windows.png';

export interface Logo {
	src: ImageMetadata;
	alt: string; // Accrediator
}

export interface LogoList {
	id: string;
	logos: Logo[];
}

// Example logo lists with imported images
export const logoLists: Record<string, LogoList> = {
	main: {
		id: 'main',
		logos: [
			{
				src: logo1,
				alt: 'Partner 1',
			},
			{
				src: logo2,
				alt: 'Partner 2',
			},
			{
				src: logo3,
				alt: 'Partner 3',
			},
			{
				src: logo4,
				alt: 'Partner 4',
			},
			{
				src: logo5,
				alt: 'Partner 5',
			},
			{
				src: logo6,
				alt: 'Partner 6',
			},
			{
				src: logo7,
				alt: 'Partner 7',
			},
			{
				src: logo8,
				alt: 'Partner 8',
			},
			{
				src: logo9,
				alt: 'Partner 9',
			},
			{
				src: logo10,
				alt: 'Partner 10',
			},
			{
				src: logo11,
				alt: 'Partner 11',
			},
			{
				src: logo12,
				alt: 'Partner 12',
			},
			{
				src: logo13,
				alt: 'Partner 13',
			},
			{
				src: logo14,
				alt: 'Partner 14',
			},
			{
				src: logo15,
				alt: 'Partner 15',
			},
			{
				src: logo16,
				alt: 'Partner 16',
			},
			{
				src: logo17,
				alt: 'Partner 17',
			},
			{
				src: logo18,
				alt: 'Partner 18',
			},
			{
				src: logo19,
				alt: 'Partner 19',
			},
			{
				src: logo20,
				alt: 'Partner 20',
			},
			{
				src: logo21,
				alt: 'Partner 21',
			},
			{
				src: logo22,
				alt: 'Partner 22',
			},
			{
				src: logo23,
				alt: 'Partner 23',
			},
			{
				src: logo24,
				alt: 'Partner 24',
			},
			{
				src: logo25,
				alt: 'Partner 25',
			},
			{
				src: logo26,
				alt: 'Partner 26',
			},
			{
				src: logo27,
				alt: 'Partner 27',
			},
			{
				src: logo28,
				alt: 'Partner 28',
			},
			{
				src: logo29,
				alt: 'Partner 29',
			},
			{
				src: logo30,
				alt: 'Partner 30',
			},
			{
				src: logo31,
				alt: 'Partner 31',
			},
		],
	},
};
