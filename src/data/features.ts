import {
	Zap,
	Heart,
	Coffee,
	Smile,
	LandmarkIcon,
	Handshake,
	Building2,
	ListChecksIcon,
	ShieldHalf,
	NetworkIcon,
	SpeechIcon,
} from '@lucide/astro';

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

export interface zhFeatureList {
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
				title: 'Carrier or Telco Grade Network Engineering',
				description:
					'More than 10 years of experinces in Carrier or Telecommunication Grade of Network Design, Implementation and Operations. Ability to produce High-Level, Low-Level Network Diagram, Technical Presentation or translate complex technical solutions into business requirement term.',
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

// Example feature lists
export const zhfeatureLists: Record<string, FeatureList> = {
	main: {
		id: 'main',
		features: [
			{
				icon: SpeechIcon,
				title: '多语言能力',
				description:
					'能够流利地使用英语、中文（普通话）、粤语、马来语和闽南语进行听说读写。具备强大的沟通能力，可为区域性跨国公司（MNC）提供优质服务。',
			},
			{
				icon: NetworkIcon,
				title: '运营商级网络工程',
				description:
					'拥有超过 10 年的运营商或电信级网络设计、实施及运营经验。能够编写高层设计（HLD）和底层设计（LLD）网络图、进行技术演示，并将复杂的技术方案转化为符合业务需求的术语。',
			},
			{
				icon: Building2,
				title: '战略业务增长',
				description:
					'成功建立并扩张了数百万令吉（MYR）规模的网络安全业务线，使项目利润率提升了 150% 以上。',
			},
			{
				icon: Handshake,
				title: '卓越运营',
				description:
					'在领导 SOC 运营、服务水平管理（SLA）及重大事件监督的高绩效团队方面拥有卓越纪录。',
			},
			{
				icon: ListChecksIcon,
				title: '架构韧性',
				description:
					'在零信任架构、云安全（Azure/AWS）及网络微隔离方面拥有深厚的专业知识。',
			},
			{
				icon: LandmarkIcon,
				title: '治理与合规',
				description:
					'熟练应对复杂的监管要求，包括马来西亚国家银行（BNM）的 RMiT 规范、ISO 27001、PCI DSS 及 PDPA 等。',
			},
			{
				icon: ShieldHalf,
				title: '网络安全框架',
				description:
					'深入理解并熟练运用各类安全框架，如 MITRE ATT&CK、OWASP、NIST、CIS、SOC2 等。',
			},
		],
	},
	secondary: {
		id: 'secondary',
		features: [
			{
				icon: Heart,
				title: '用心打造',
				description: '注重每一个细节，力求完美',
			},
			{
				icon: Coffee,
				title: '持续更新',
				description: '定期进行更新与优化',
			},
			{
				icon: Smile,
				title: '用户友好',
				description: '界面直观，简单易用',
			},
		],
	},
};