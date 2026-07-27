import { location_dark } from '@/assets/images';
import {
    cssLogo,
    figmaLogo,
    gitLogo,
    githubLogo,
    gitlabLogo,
    htmlLogo,
    javascriptLogo,
    materialUiLogo,
    nextJsLogo,
    reactjsLogo,
    reduxLogo,
    sassLogo,
    tailwindCssLogo,
    typescriptLogo
} from '@/assets/images/tech-logos';
import IconDownload from '@/components/icons/src/download';
import IconEye from '@/components/icons/src/eye';

import type { GridCardConfig } from '../model/grid-card.types';

export const profileCards = [
    {
        id: 1,
        componentType: 'AboutMeCard',
        avatar: '/images/user_avatar.webp',
        fullName: 'Mehdi Salimi',
        description: `I’m a front-end developer with four years of experience, specializing in building responsive
                    dashboards and interactive websites. I work with modern tools like JavaScript, Next.js, React, and
                    Tailwind CSS to craft beautiful user interfaces. Collaboration, creativity, and attention to detail
                    are at the heart of my work. I’m passionate about improving user experiences and continuously
                    enhancing my skills to deliver top-quality results.`,
        layouts: {
            xs: {
                All: { x: 0, y: 1, w: 2, h: 11 },
                About: { x: 0, y: 0, w: 2, h: 11 },
                Work: { x: 0, y: 92, w: 2, h: 10 }
            },
            sm: {
                All: { x: 0, y: 1, w: 6, h: 9 },
                About: { x: 0, y: 0, w: 6, h: 10 },
                Work: { x: 0, y: 92, w: 6, h: 10 }
            },
            md: {
                All: { x: 0, y: 0, w: 5, h: 9 },
                About: { x: 0, y: 0, w: 5, h: 9 },
                Work: { x: 5, y: 45, w: 5, h: 10 }
            },
            lg: {
                All: { x: 0, y: 0, w: 5, h: 9 },
                About: { x: 0, y: 0, w: 5, h: 9 },
                Work: { x: 6, y: 51, w: 6, h: 8 }
            }
        }
    },
    {
        id: 2,
        componentType: 'WorkExperiences',
        yearsOfExperience: 4,
        experiences: [
            {
                title: 'Frontend Developer',
                company: 'Maltina',
                dates: 'Dec 2025 - present',
                opacity: 100,
                lineThrough: false
            },
            {
                title: 'Frontend Developer',
                company: 'Armaghan Talaie',
                dates: 'Mar 2025 - Nov 2025',
                opacity: 55,
                lineThrough: false
            },
            {
                title: 'Frontend Developer',
                company: 'Paya',
                dates: '2023 - 2025',
                opacity: 55,
                lineThrough: false
            },
            {
                title: 'Web Developer',
                company: 'Freelance',
                dates: '2022 - 2023',
                opacity: 55,
                lineThrough: false
            },
            {
                title: 'Frontend Developer',
                company: 'Kimia Mehr Bastan',
                dates: '2020 - 2021',
                opacity: 55,
                lineThrough: false
            }
        ],
        layouts: {
            xs: {
                All: { x: 0, y: 37, w: 2, h: 18 },
                About: { x: 0, y: 36, w: 2, h: 18 },
                Work: { x: 0, y: 6, w: 2, h: 18 }
            },
            sm: {
                All: { x: 0, y: 35, w: 6, h: 18 },
                About: { x: 0, y: 35, w: 6, h: 18 },
                Work: { x: 0, y: 6, w: 6, h: 18 }
            },
            md: {
                All: { x: 0, y: 16, w: 10, h: 12 },
                About: { x: 0, y: 17, w: 10, h: 12 },
                Work: { x: 0, y: 0, w: 5, h: 14 }
            },
            lg: {
                All: { x: 6, y: 9, w: 6, h: 12 },
                About: { x: 6, y: 17, w: 6, h: 12 },
                Work: { x: 0, y: 0, w: 6, h: 14 }
            }
        }
    },
    {
        id: 3,
        componentType: 'ResumeCard',
        resumePreviewIcon: IconEye,
        resumeDownloadIcon: IconDownload,
        resumePreviewUrl:
            'https://docs.google.com/gview?embedded=true&url=https://raw.githubusercontent.com/SalimiDev/SalimiDev/main/resume/MehdiSalimi-Frontend-Esfand-403.pdf',
        resumeDownloadUrl:
            'https://github.com/SalimiDev/SalimiDev/blob/main/resume/MehdiSalimi-Frontend-Esfand-403.pdf?raw=true',
        cvDate: '2025 CV',
        layouts: {
            xs: {
                All: { x: 0, y: 12, w: 2, h: 3 },
                About: { x: 0, y: 33.5, w: 2, h: 2.5 },
                Work: { x: 0, y: 3, w: 2, h: 3 }
            },
            sm: {
                All: { x: 0, y: 10, w: 6, h: 3 },
                About: { x: 0, y: 32.5, w: 6, h: 2.5 },
                Work: { x: 0, y: 3, w: 6, h: 3 }
            },
            md: {
                All: { x: 5, y: 2, w: 5, h: 3.5 },
                About: { x: 5, y: 9, w: 5, h: 3 },
                Work: { x: 5, y: 0, w: 5, h: 3 }
            },
            lg: {
                All: { x: 7.5, y: 2, w: 4.5, h: 3.5 },
                About: { x: 7, y: 11, w: 5, h: 3 },
                Work: { x: 6, y: 0, w: 6, h: 3 }
            }
        }
    },
    {
        id: 4,
        componentType: 'TechCard',
        technologies: [
            { techName: 'React', techLogo: reactjsLogo },
            { techName: 'Next.js', techLogo: nextJsLogo },
            { techName: 'JavaScript', techLogo: javascriptLogo },
            { techName: 'TypeScript', techLogo: typescriptLogo },
            { techName: 'Redux', techLogo: reduxLogo },
            { techName: 'Tailwind CSS', techLogo: tailwindCssLogo },
            { techName: 'Material UI', techLogo: materialUiLogo },
            { techName: 'Sass', techLogo: sassLogo },
            { techName: 'HTML', techLogo: htmlLogo },
            { techName: 'CSS', techLogo: cssLogo },
            { techName: 'Figma', techLogo: figmaLogo },
            { techName: 'Git', techLogo: gitLogo },
            { techName: 'GitHub', techLogo: githubLogo },
            { techName: 'GitLab', techLogo: gitlabLogo }
        ],
        layouts: {
            xs: {
                All: { x: 0, y: 30, w: 2, h: 7 },
                About: { x: 0, y: 23, w: 2, h: 7 },
                Work: { x: 0, y: 102, w: 2, h: 7 }
            },
            sm: {
                All: { x: 0, y: 28, w: 6, h: 7 },
                About: { x: 0, y: 22, w: 6, h: 7 },
                Work: { x: 0, y: 102, w: 6, h: 7 }
            },
            md: {
                All: { x: 0, y: 9, w: 4, h: 7 },
                About: { x: 0, y: 9, w: 5, h: 8 },
                Work: { x: 4, y: 55, w: 4, h: 8 }
            },
            lg: {
                All: { x: 1.5, y: 9, w: 4.5, h: 8 },
                About: { x: 0, y: 9, w: 7, h: 8 },
                Work: { x: 4, y: 61, w: 5, h: 8 }
            }
        }
    },
    {
        id: 5,
        componentType: 'MovingBarCard',
        layouts: {
            xs: {
                All: { x: 0, y: 0, w: 2, h: 1 },
                About: { x: 0, y: 30, w: 2, h: 1 },
                Work: { x: 0, y: 91, w: 2, h: 1 }
            },
            sm: {
                All: { x: 0, y: 0, w: 6, h: 1 },
                About: { x: 0, y: 29, w: 6, h: 1 },
                Work: { x: 0, y: 91, w: 6, h: 1 }
            },
            md: {
                All: { x: 5, y: 0, w: 5, h: 2 },
                About: { x: 5, y: 15, w: 5, h: 2 },
                Work: { x: 0, y: 53, w: 5, h: 2 }
            },
            lg: {
                All: { x: 5, y: 0, w: 7, h: 2 },
                About: { x: 7, y: 9, w: 5, h: 2 },
                Work: { x: 0, y: 59, w: 12, h: 2 }
            }
        }
    },
    {
        id: 6,
        componentType: 'LocationCard',
        locationImage: location_dark,
        layouts: {
            xs: {
                All: { x: 0, y: 18, w: 2, h: 4 },
                About: { x: 0, y: 11, w: 2, h: 4 },
                Work: { x: 0, y: 117, w: 2, h: 4 }
            },
            sm: {
                All: { x: 0, y: 16, w: 6, h: 4 },
                About: { x: 0, y: 10, w: 6, h: 4 },
                Work: { x: 0, y: 117, w: 6, h: 4 }
            },
            md: {
                All: { x: 8, y: 9, w: 2, h: 7 },
                About: { x: 7, y: 0, w: 3, h: 6 },
                Work: { x: 8, y: 55, w: 2, h: 8 }
            },
            lg: {
                All: { x: 5, y: 2, w: 2.5, h: 7 },
                About: { x: 9, y: 0, w: 3, h: 9 },
                Work: { x: 9, y: 61, w: 3, h: 8 }
            }
        }
    },
    {
        id: 7,
        componentType: 'ThemeToggleCard',
        layouts: {
            xs: {
                All: { x: 0, y: 15, w: 2, h: 3 },
                About: { x: 0, y: 31, w: 2, h: 2.5 },
                Work: { x: 0, y: 0, w: 2, h: 3 }
            },
            sm: {
                All: { x: 0, y: 13, w: 6, h: 3 },
                About: { x: 0, y: 30, w: 6, h: 2.5 },
                Work: { x: 0, y: 0, w: 6, h: 3 }
            },
            md: {
                All: { x: 5, y: 5.5, w: 5, h: 3.5 },
                About: { x: 5, y: 12, w: 5, h: 3 },
                Work: { x: 5, y: 3, w: 5, h: 3 }
            },
            lg: {
                All: { x: 7.5, y: 5.5, w: 4.5, h: 3.5 },
                About: { x: 7, y: 14, w: 5, h: 3 },
                Work: { x: 6, y: 3, w: 6, h: 3 }
            }
        }
    }
] satisfies GridCardConfig[];
