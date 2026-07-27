import IconEmail from '@/components/icons/src/email';
import IconGithub from '@/components/icons/src/github';
import IconInstagram from '@/components/icons/src/instagram';
import IconLinkedin from '@/components/icons/src/linkedin';

import type { GridCardConfig } from '../model/grid-card.types';

export const socialCards = [
    {
        id: 8,
        componentType: 'SocialCard',
        platform: 'Linkedin',
        platformIcon: IconLinkedin,
        platformUrl: 'https://www.linkedin.com/in/salimidevop/',
        layouts: {
            xs: {
                All: { x: 0, y: 22, w: 1, h: 4 },
                About: { x: 0, y: 15, w: 1, h: 4 },
                Work: { x: 0, y: 109, w: 1, h: 4 }
            },
            sm: {
                All: { x: 0, y: 20, w: 3, h: 4 },
                About: { x: 0, y: 14, w: 3, h: 4 },
                Work: { x: 0, y: 109, w: 3, h: 4 }
            },
            md: {
                All: { x: 4, y: 9, w: 2, h: 3.5 },
                About: { x: 5, y: 0, w: 2, h: 3 },
                Work: { x: 0, y: 55, w: 2, h: 4 }
            },
            lg: {
                All: { x: 0, y: 9, w: 1.5, h: 4 },
                About: { x: 5, y: 0, w: 2, h: 4.5 },
                Work: { x: 0, y: 61, w: 2, h: 4 }
            }
        }
    },
    {
        id: 9,
        componentType: 'SocialCard',
        platform: 'GitHub',
        platformIcon: IconGithub,
        platformUrl: 'https://github.com/SalimiDev',
        layouts: {
            xs: {
                All: { x: 1, y: 22, w: 1, h: 4 },
                About: { x: 1, y: 15, w: 1, h: 4 },
                Work: { x: 1, y: 109, w: 1, h: 4 }
            },
            sm: {
                All: { x: 3, y: 20, w: 3, h: 4 },
                About: { x: 3, y: 14, w: 3, h: 4 },
                Work: { x: 3, y: 109, w: 3, h: 4 }
            },
            md: {
                All: { x: 6, y: 9, w: 2, h: 3.5 },
                About: { x: 5, y: 3, w: 2, h: 3 },
                Work: { x: 2, y: 55, w: 2, h: 4 }
            },
            lg: {
                All: { x: 1.5, y: 16.4, w: 4.5, h: 4 },
                About: { x: 7, y: 0, w: 2, h: 4.5 },
                Work: { x: 2, y: 61, w: 2, h: 4 }
            }
        }
    },
    {
        id: 10,
        componentType: 'SocialCard',
        platform: 'Email',
        platformIcon: IconEmail,
        platformUrl: 'mailto:salimi.devop@gmail.com',
        layouts: {
            xs: {
                All: { x: 0, y: 26, w: 1, h: 4 },
                About: { x: 0, y: 19, w: 1, h: 4 },
                Work: { x: 0, y: 113, w: 1, h: 4 }
            },
            sm: {
                All: { x: 0, y: 24, w: 3, h: 4 },
                About: { x: 0, y: 18, w: 3, h: 4 },
                Work: { x: 0, y: 113, w: 3, h: 4 }
            },
            md: {
                All: { x: 4, y: 12.5, w: 2, h: 3.5 },
                About: { x: 7, y: 5, w: 3, h: 3 },
                Work: { x: 0, y: 59, w: 2, h: 4 }
            },
            lg: {
                All: { x: 0, y: 13, w: 1.5, h: 4 },
                About: { x: 5, y: 4.5, w: 2, h: 4.5 },
                Work: { x: 0, y: 61, w: 2, h: 4 }
            }
        }
    },
    {
        id: 11,
        componentType: 'SocialCard',
        platform: 'Instagram',
        platformIcon: IconInstagram,
        platformUrl: 'https://www.instagram.com/mehdi_salimi92/',
        layouts: {
            xs: {
                All: { x: 1, y: 26, w: 1, h: 4 },
                About: { x: 1, y: 19, w: 1, h: 4 },
                Work: { x: 1, y: 113, w: 1, h: 4 }
            },
            sm: {
                All: { x: 3, y: 24, w: 3, h: 4 },
                About: { x: 3, y: 18, w: 3, h: 4 },
                Work: { x: 3, y: 113, w: 3, h: 4 }
            },
            md: {
                All: { x: 6, y: 12.5, w: 2, h: 3.5 },
                About: { x: 5, y: 6, w: 2, h: 3 },
                Work: { x: 2, y: 59, w: 2, h: 4 }
            },
            lg: {
                All: { x: 0, y: 17, w: 1.5, h: 4 },
                About: { x: 7, y: 4.5, w: 2, h: 4.5 },
                Work: { x: 2, y: 61, w: 2, h: 4 }
            }
        }
    }
] satisfies GridCardConfig[];
