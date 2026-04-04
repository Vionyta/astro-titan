// For Main page timeline
export interface ExperienceItem {
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	scope: string;
	responsibility: string[];
}

export const experience: ExperienceItem[] = [
	{
		company: 'OGX Network Sdn Bhd (Contract)',
		role: 'Associate Director of Solutioning & Services',
		startDate: 'Feb 2024',
		endDate: 'Feb 2025 (Contract End)',
		scope: 'Management/Technical',
		responsibility: [
			'Provided strategic oversight for solution architecture, delivery governance, and post-sales services, reporting to IT Security Director.',
			'Defined and standardized business flows for solutioning, onboarding, and technical support.',
			'Client included Malaysian government agencies, Finance Service Institute and Large Utilities.',
			'Oversaw professional service engagements (SIEM, endpoint, network security), optimizing resource use and profitability.',
			'Collaborated with vendor partners (Tenable, Forcepoint, Sangfor) on GTM approaches for public sector markets.',
			'Planned company Security and IT blueprint.',
		],
	},
	{
		company: 'Barracuda Networks',
		role: 'Senior Sales Engineer',
		startDate: 'Sep 2021',
		endDate: 'Oct 2023',
		scope: 'Regional SEA - Technical Sales',
		responsibility: [
			'Served as regional presales technical authority (ASEAN+KR)',
			"Barracuda's cybersecurity pillars: Email Protection, Network Security (SASE, ZTNA, NGFW), Data Protection (Backup), Application Security (WAF).",
			'Email Protection inclusive on-prem ESG, SaaS based, ATP, Email Awareness training.',
			'Web Application Protection with On-prem WAF, Cloud WAF, with API Security, ATP based on requirement and ability to support multi-cloud strategy.',
			"Network Security with Barracuda's Next Generation Firewall, ZTNA proxy, SASE, SD-WAN, Web Filteration All-in-one.",
			'Backup inclusive on-prem server appliance, or Cloud-to-Cloud Backup for M365. Delivered technical workshops and strategic threat briefings to CIO/CISO/SOC stakeholders across ASEAN.',
			'Provided technical sales support (PoC, demos, proposals, BOMs) and regional technical enablement for partners.',
		],
	},
	{
		company: 'Ensign InfoSecurity',
		role: 'Systems Integration Director',
		startDate: 'Aug 2019',
		endDate: 'Sep 2021',
		scope: 'Management',
		responsibility: [
			'Spearheaded creation and expansion of 4 operational divisions (14 personnel): 1) Project Management Office, 2) Pre-Sales Solutioning/Architecture, 3) Network Security Engineering, 4) Network Security Support.',
			'Built Systems Integration (SI) business line from ground up (service offerings, playbooks, delivery models, KPIs, P&L accountability).',
			'Oversaw end-to-end delivery of strategic cybersecurity programs (Govt, Critical Infrastructure, Private Sector) using vendors like FireEye (Trellix), Imperva, Menlo, illumio, Tenable, Gigamon, Darktrace, Netskope.',
			'Standardized project governance, risk reporting, and client escalation procedures.',
			'Managed resource allocation, hiring, coaching, and performance.',
		],
	},
	{
		company: 'Extreme Broadband Sdn Bhd',
		role: 'Head of System and Security',
		startDate: 'Aug 2018',
		endDate: 'Aug 2019',
		scope: 'Management',
		responsibility: [
			'Led 5 cross-functional technical divisions (24 personnel): NOC, Data Center Network, System Security & Solutioning, Project Management, NOC L2.',
			'Defined and implemented IT security governance aligned with ISO/IEC 27001 standards (internal audits, risk assessment, incident management).',
			'Directed national infrastructure planning: IP transit, BGP policy/security (filtering, RPKI readiness), peering, data center/cloud security, business continuity.',
			'Oversaw CAPEX/OPEX management for NOC, peering, and leased lines.',
			'Provided technical leadership, mentorship, and security awareness training across teams.',
		],
	},
	{
		company: 'Convergence Network / Innovix',
		role: 'Presales Engineer',
		startDate: 'Feb 2017',
		endDate: 'Aug 2018',
		scope: 'Technical Sales',
		responsibility: [
			'Provided technical leadership throughout sales cycle for cybersecurity solutions (vArmour, Infoblox, SUSE Linux).',
			'Conducted solution presentations, customized demos using virtualized testbeds, and technical deep dives.',
			'Created technical proposals, architecture diagrams, and integration guides tailored to client needs.',
			'Executed PoC/Proof-of-Value (POV) deployments and provided technical support to partners.',
		],
	},
	{
		company: 'Exclusive Network Sdn Bhd',
		role: 'Presales Engineer',
		startDate: 'Sep 2016',
		endDate: 'Feb 2017',
		scope: 'Technical Sales',
		responsibility: [
			'Provided presales and post-sales technical consultation for cybersecurity portfolio including Gigamon (Visibility), Infoblox (DDI/DNS Security), Wireless Backhaul (Mimosa)',
			'Translated business/security requirements into technical solution designs for enterprise, telco client.',
			'Conducted solution workshops, Proof-of-Concept (PoC) deployments, and technical deep-dives.',
			'Authored technical proposals, documentation, and Bill of Materials (BoMs).',
		],
	},
	{
		company: 'TIME dotCom Bhd',
		role: 'Senior Engineer',
		startDate: 'May 2013',
		endDate: 'Sep 2016',
		scope: 'Core Network / Service Engineer',
		responsibility: [
			'Engineered, planned, deployed, managed and secured core broadband infrastructure services (DNS, DHCP, AAA RADIUS/TACACS+, OpenLDAP, MySQL, BRAS) using primarily open-source platforms (FreeBSD, CentOS, Ubuntu) serving hundred thousands of users.',
			'Implemented and maintained hardened configurations for OS (SELinux) and applications (native OS firewall port, hide Application signature) to reduce vendor reliance and strengthen security posture.',
			'Developed access control policies, AAA integration, and service entitlement enforcement.',
			'Established baseline logging, monitoring (Cacti, SNMP), event correlation, and alerting for core systems to enable early threat detection.',
			'Provided Level 4 operational support (24x7 standby) for core services and applications.',
		],
	},
	{
		company: 'Packet One Network Sdn Bhd',
		role: 'WiMAX Core Engineer',
		startDate: 'Sep 2009',
		endDate: 'Apr 2013',
		scope: 'Telco and Network Core Engineer',
		responsibility: [
			'Oversaw core network dimensioning and utilization projection for 3 years.',
			'Defined system health checks/alerts for Network Operation Center (NOC), and managed Level 2 operational support and change requests.',
			'Engineered, implemented, and maintained national WiMAX core infrastructure (ASN GW, AAA RADIUS, DNS, DHCP, Home Agent, CGNAT, Cisco SCE/PCEF, PCRF).',
			'Led design and implementation of subscriber management infrastructure, dynamic service provisioning, access control, and policy enforcement.',
			'Developed hardened authentication mechanisms integrating with OSS/BSS systems.',
			'Performed network analysis (user behavior, FUP) and traffic management policy definition to optimize bandwidth usage and offload base station congestion by controlling bandwidth hungry protocol such as P2P, Video Streaming etc during peak hour.',
			'Conducted system evaluation, integration (e.g., ASN GW with SBC for VoIP), IOT/PoC testing, and project management for Core network expansion and technology selection (LTE/WiMAX).',
		],
	},
	{
		company: 'Tele Dynamic Sdn Bhd',
		role: 'Service Engineer',
		startDate: 'May 2005',
		endDate: 'Sep 2009',
		scope: 'Service Engineer',
		responsibility: [
			'Delivered on-site technical support, system diagnostics, and preventative maintenance for enterprise digital printing systems integrated within LAN environments.',
			"Developed and delivered the company's first in-house technical training program for new products and junior engineers.",
			'Supported field escalations for multi-function colour printers (Toshiba).',
			'Collaborated with vendor/customer IT on hardware compatibility, driver conflicts, colour matching/tuning (CMYK) and network communication failures.',
		],
	},
];
