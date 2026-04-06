import { Zap, Heart, Coffee, Smile, LandmarkIcon, Handshake, Building2, ListChecksIcon, ShieldHalf, NetworkIcon, SpeechIcon } from '@lucide/astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Zap;

export interface Feature {
	icon: LucideIcon;
	title: string;
	description: string;
}

export interface FeatureList {
	id: string;
	features: Feature[];
}

// Example feature lists
export const featureLists: Record<string, FeatureList> = {
	main: {
		id: 'main',
		features: [
			{
				icon: SpeechIcon,
				title: 'Multilingualism',
				description:
					'Ability to speak fluently, read and write in English, Chinese, Cantonese, Malay and Taiwanese. Therefore Strong communication ability to serve regional MNC.',
			},
			{
				icon: NetworkIcon,
				title: 'Carreer or Telco Grade Network Engineering',
				description:
					'More than 10 years of experinces in Carreer or Telecommunication Grade of Network Design, Implementation and Operations. Ability to produce High-Level, Low-Level Network Diagram, Technical Presentation or translate complex technical solutions into business requirement term.',
			},
			{
				icon: Building2,
				title: 'Strategic Business Growth',
				description:
					'Successfully established and scaled multi-million MYR cybersecurity business lines, improving project profit margins by over 150%',
			},
			{
				icon: Handshake,
				title: 'Operational Excellence',
				description:
					'Proven track record in leading high-performance teams across SOC operations, Service Level Management (SLA), and Critical Incident Oversight.',
			},
			{
				icon: ListChecksIcon,
				title: 'Architectural Resilience',
				description:
					'Deep expertise in Zero Trust Architecture, Cloud Security (Azure/AWS), and Network Micro-segmentation.',
			},
			{
				icon: LandmarkIcon,
				title: 'Governance & Compliance',
				description:
					'Navigating complex regulatory landscapes, including Malaysian BNM RMiT, ISO 27001, PCI DSS, and PDPA',
			},
			{
				icon: ShieldHalf,
				title: 'CyberSec Framework',
				description:
					'Understand, utilizing Framework such as MITRE ATT&CK, OWASP, NIST, CIS, SOC2 and etc',
			},
		],
	},
	secondary: {
		id: 'secondary',
		features: [
			{
				icon: Heart,
				title: 'Made with Love',
				description: 'Crafted with attention to detail',
			},
			{
				icon: Coffee,
				title: 'Always Fresh',
				description: 'Regular updates and improvements',
			},
			{
				icon: Smile,
				title: 'User Friendly',
				description: 'Intuitive and easy to use',
			},
		],
	},
};
