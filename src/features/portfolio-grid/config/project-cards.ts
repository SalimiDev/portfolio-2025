import { admin_dash, business_inteligence, hillter_hotel, tesla_clone } from '@/assets/images';
import IconGithub from '@/components/icons/src/github';

import type { GridCardConfig } from '../model/grid-card.types';

export const projectCards = [
    {
        id: 12,
        componentType: 'ProjectCard',
        companyName: 'Freelance',
        companyLogo: IconGithub,
        projectImage: hillter_hotel,
        projectName: 'Hillter Hotel',
        projectUrl: 'https://salimidev.github.io/Hotel-ReactJsApp',
        projectTech: ['Next.js', 'TypeScript', 'Tailwind-CSS'],
        layouts: {
            xs: {
                All: { x: 0, y: 51, w: 2, h: 12 },
                About: { x: 0, y: 49, w: 2, h: 12 },
                Work: { x: 0, y: 19, w: 2, h: 12 }
            },
            sm: {
                All: { x: 0, y: 47, w: 6, h: 12 },
                About: { x: 0, y: 48, w: 6, h: 12 },
                Work: { x: 0, y: 19, w: 6, h: 12 }
            },
            md: {
                All: { x: 0, y: 26, w: 5, h: 12 },
                About: { x: 0, y: 28, w: 5, h: 13 },
                Work: { x: 5, y: 6, w: 5, h: 13 }
            },
            lg: {
                All: { x: 0, y: 21, w: 6, h: 15 },
                About: { x: 0, y: 17, w: 6, h: 15 },
                Work: { x: 6, y: 6, w: 6, h: 15 }
            }
        }
    },
    {
        id: 13,
        componentType: 'ProjectCard',
        companyName: 'Freelance',
        companyLogo: IconGithub,
        projectImage: tesla_clone,
        projectName: 'Tesla Clone',
        projectUrl: 'https://salimidev.github.io/TESLA-CLONE',
        projectTech: ['React.js', 'Redux', 'styled-components'],
        layouts: {
            xs: {
                All: { x: 6, y: 63, w: 2, h: 12 },
                About: { x: 0, y: 61, w: 2, h: 12 },
                Work: { x: 0, y: 31, w: 2, h: 12 }
            },
            sm: {
                All: { x: 6, y: 59, w: 6, h: 12 },
                About: { x: 0, y: 60, w: 6, h: 12 },
                Work: { x: 0, y: 31, w: 6, h: 12 }
            },
            md: {
                All: { x: 5, y: 26, w: 5, h: 12 },
                About: { x: 5, y: 28, w: 5, h: 13 },
                Work: { x: 0, y: 14, w: 5, h: 13 }
            },
            lg: {
                All: { x: 6, y: 21, w: 6, h: 15 },
                About: { x: 6, y: 29, w: 6, h: 15 },
                Work: { x: 0, y: 14, w: 6, h: 15 }
            }
        }
    },
    {
        id: 14,
        componentType: 'ProjectCard',
        companyName: 'Freelance',
        companyLogo: IconGithub,
        projectImage: admin_dash,
        projectName: 'Admin Dashboard',
        projectUrl: 'https://salimidev.github.io/react-admin-dashboard/',
        projectTech: ['React.js', 'Nivo charts', 'Tailwind-CSS', 'Formik'],
        layouts: {
            xs: {
                All: { x: 0, y: 75, w: 2, h: 12 },
                About: { x: 0, y: 73, w: 2, h: 12 },
                Work: { x: 0, y: 43, w: 2, h: 12 }
            },
            sm: {
                All: { x: 0, y: 71, w: 6, h: 12 },
                About: { x: 0, y: 72, w: 6, h: 12 },
                Work: { x: 0, y: 43, w: 6, h: 12 }
            },
            md: {
                All: { x: 0, y: 38, w: 5, h: 12 },
                About: { x: 0, y: 41, w: 5, h: 13 },
                Work: { x: 5, y: 19, w: 5, h: 13 }
            },
            lg: {
                All: { x: 0, y: 36, w: 6, h: 15 },
                About: { x: 0, y: 32, w: 6, h: 15 },
                Work: { x: 6, y: 21, w: 6, h: 15 }
            }
        }
    },
    {
        id: 15,
        componentType: 'ProjectCard',
        companyName: 'PAYA',
        companyLogo: IconGithub,
        projectImage: business_inteligence,
        projectName: 'Business intelligence (BI)',
        projectUrl: '',
        projectTech: ['React.js', 'PrimeReact', 'Highcharts', 'Tailwind-CSS'],
        layouts: {
            xs: {
                All: { x: 0, y: 87, w: 2, h: 12 },
                About: { x: 0, y: 85, w: 2, h: 12 },
                Work: { x: 0, y: 55, w: 2, h: 12 }
            },
            sm: {
                All: { x: 0, y: 83, w: 6, h: 12 },
                About: { x: 0, y: 84, w: 6, h: 12 },
                Work: { x: 0, y: 55, w: 6, h: 12 }
            },
            md: {
                All: { x: 5, y: 38, w: 5, h: 12 },
                About: { x: 5, y: 41, w: 5, h: 13 },
                Work: { x: 0, y: 27, w: 5, h: 13 }
            },
            lg: {
                All: { x: 6, y: 36, w: 6, h: 15 },
                About: { x: 6, y: 44, w: 6, h: 15 },
                Work: { x: 0, y: 29, w: 6, h: 15 }
            }
        }
    }
] satisfies GridCardConfig[];

