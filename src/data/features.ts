import { Zap, Shield, Heart, Coffee, Smile, Type, TabletSmartphone, CodeXml } from 'lucide-astro';

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
                icon: Zap,
                title: 'Strategic Business Growth',
                description: 'Successfully established and scaled multi-million MYR cybersecurity business lines, improving project profit margins by over 150%'
            },
            {
                icon: Shield,
                title: 'Operational Excellence',
                description: 'Proven track record in leading high-performance teams across SOC operations, Service Level Management (SLA), and Critical Incident Oversight.'
            },
            {
                icon: TabletSmartphone,
                title: 'Architectural Resilience',
                description: 'Deep expertise in Zero Trust Architecture, Cloud Security (Azure/AWS), and Network Micro-segmentation.'
            },
            {
                icon: Smile,
                title: 'Governance & Compliance',
                description: 'Navigating complex regulatory landscapes, including Malaysian BNM RMiT, ISO 27001, and PDPA'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Heart,
                title: 'Made with Love',
                description: 'Crafted with attention to detail'
            },
            {
                icon: Coffee,
                title: 'Always Fresh',
                description: 'Regular updates and improvements'
            },
            {
                icon: Smile,
                title: 'User Friendly',
                description: 'Intuitive and easy to use'
            }
        ]
    }
};
