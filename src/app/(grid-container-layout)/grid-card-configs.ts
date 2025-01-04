import { hillter_hotel, location } from '@/assets/images';
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

import { IconDownload, IconEmail, IconEye, IconGithub, IconInstagram, IconLinkedin } from '../_components/icons/icons';
import { GridCardConfig } from './grid-card-configs.type';

export const gridCardConfigs: GridCardConfig[] = [
    {
        id: 1,
        componentType: 'LocationCard',
        location: 'string',
        locationImage: location,
        settings: { type: 'profile', data: { name: 'John Doe', age: 30 } },
        color: '',
        tags: ['About'],
        icon: 'user',
        layouts: {
            xs: {
                All: { x: 5, y: 16, w: 2.5, h: 4 },
                About: { x: 0, y: 10, w: 2, h: 4 },
                Work: { x: 0, y: 69, w: 2, h: 4 }
            },
            sm: {
                All: { x: 5, y: 16, w: 6, h: 4 },
                About: { x: 0, y: 10, w: 6, h: 4 },
                Work: { x: 0, y: 69, w: 6, h: 4 }
            },
            md: {
                All: { x: 10, y: 8, w: 2, h: 7 },
                About: { x: 10, y: 0, w: 3, h: 6 },
                Work: { x: 8, y: 30, w: 2, h: 8 }
            },
            lg: {
                All: { x: 5, y: 2, w: 2.5, h: 7 },
                About: { x: 10, y: 0, w: 3, h: 9 },
                Work: { x: 9, y: 30, w: 3, h: 8 }
            }
        },
        priority: {
            All: 5,
            About: 1,
            Work: 2
        }
    },
    {
        id: 2,
        componentType: 'ResumeCard',
        resumePreviewIcon: IconEye,
        resumeDownloadIcon: IconDownload,
        resumePreviewUrl: 'ddd',
        resumeDownloadUrl: 'ppp',
        CVDate: '2025 CV',
        settings: { type: 'bar', data: [5, 10, 15] },
        color: '',
        tags: ['Work'],
        icon: 'chart',
        layouts: {
            xs: {
                All: { x: 8, y: 11, w: 4.5, h: 2.5 },
                About: { x: 0, y: 32.5, w: 2, h: 2.5 },
                Work: { x: 0, y: 0, w: 2, h: 3 }
            },
            sm: {
                All: { x: 8, y: 10, w: 6, h: 3 },
                About: { x: 0, y: 32.5, w: 6, h: 2.5 },
                Work: { x: 0, y: 0, w: 6, h: 3 }
            },
            md: {
                All: { x: 8, y: 2, w: 5, h: 3 },
                About: { x: 5, y: 9, w: 5, h: 3 },
                Work: { x: 5, y: 0, w: 5, h: 3 }
            },
            lg: {
                All: { x: 7.5, y: 2, w: 4.5, h: 3.5 },
                About: { x: 7, y: 11, w: 5, h: 3 },
                Work: { x: 6, y: 0, w: 6, h: 3 }
            }
        },
        priority: {
            All: 4,
            About: 4,
            Work: 2
        }
    },
    {
        id: 3,
        componentType: 'AboutMeCard',
        avatar: '/images/mehdi_salimi.jpg',
        fullName: 'Mehdi Salimi',
        settings: { type: 'map', location: 'New York' },
        description: `I’m a front-end developer with three years of experience, specializing in building responsive
                    dashboards and interactive websites. I work with modern tools like JavaScript, Next.js, React, and
                    Tailwind CSS to craft beautiful user interfaces. Collaboration, creativity, and attention to detail
                    are at the heart of my work. I’m passionate about improving user experiences and continuously
                    enhancing my skills to deliver top-quality results.`,
        color: '',
        tags: ['Work'],
        icon: 'location-pin',
        layouts: {
            xs: {
                All: { x: 0, y: 1, w: 5, h: 10 },
                About: { x: 0, y: 0, w: 2, h: 10 },
                Work: { x: 0, y: 44, w: 2, h: 10 }
            },
            sm: {
                All: { x: 0, y: 1, w: 6, h: 9 },
                About: { x: 0, y: 0, w: 6, h: 10 },
                Work: { x: 0, y: 44, w: 6, h: 10 }
            },
            md: {
                All: { x: 0, y: 0, w: 5, h: 8 },
                About: { x: 0, y: 0, w: 5, h: 9 },
                Work: { x: 5, y: 20, w: 5, h: 10 }
            },
            lg: {
                All: { x: 0, y: 0, w: 5, h: 9 },
                About: { x: 0, y: 0, w: 5, h: 9 },
                Work: { x: 6, y: 20, w: 6, h: 10 }
            }
        },
        priority: {
            All: 2,
            About: 1,
            Work: 3
        }
    },
    {
        id: 4,
        componentType: 'WorkExperiences',
        yearsOfExperience: 4,
        experiences: [
            {
                title: 'Frontend Developer',
                company: 'Paya',
                dates: '2023 - Present',
                opacity: 100,
                lineThrough: false
            },
            {
                title: 'Web Developer',
                company: 'Freelance',
                dates: '2021 - 2023',
                opacity: 55,
                lineThrough: true
            },
            {
                title: 'Frontend Developer',
                company: 'Protein Gostar Sina',
                dates: '2020 - 2021',
                opacity: 55,
                lineThrough: true
            }
        ],
        settings: {
            columns: ['Skill', 'Level'],
            data: [
                ['React', 'Expert'],
                ['CSS', 'Advanced']
            ]
        },
        color: '',
        tags: ['Abo2ut'],
        icon: 'file',
        layouts: {
            xs: {
                All: { x: 7, y: 35, w: 2, h: 14 },
                About: { x: 0, y: 35, w: 2, h: 13 },
                Work: { x: 0, y: 3, w: 2, h: 13 }
            },
            sm: {
                All: { x: 7, y: 35, w: 6, h: 12 },
                About: { x: 0, y: 35, w: 6, h: 13 },
                Work: { x: 0, y: 3, w: 6, h: 13 }
            },
            md: {
                All: { x: 0, y: 15, w: 10, h: 10 },
                About: { x: 10, y: 17, w: 10, h: 11 },
                Work: { x: 0, y: 0, w: 5, h: 14 }
            },
            lg: {
                All: { x: 6, y: 9, w: 6, h: 12 },
                About: { x: 6, y: 17, w: 6, h: 12 },
                Work: { x: 0, y: 0, w: 6, h: 14 }
            }
        },
        priority: {
            All: 9,
            About: 2,
            Work: 5
        }
    },
    {
        id: 5,
        moveSpeed: 10,
        componentType: 'MovingBarCard',
        settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
        color: '',
        tags: ['Work'],
        icon: 'project',
        layouts: {
            xs: {
                All: { x: 0, y: 0, w: 4, h: 1 },
                About: { x: 0, y: 29, w: 2, h: 1 },
                Work: { x: 0, y: 40, w: 2, h: 1 }
            },
            sm: {
                All: { x: 0, y: 0, w: 6, h: 1 },
                About: { x: 0, y: 29, w: 6, h: 1 },
                Work: { x: 0, y: 40, w: 6, h: 1 }
            },
            md: {
                All: { x: 5, y: 0, w: 5, h: 2 },
                About: { x: 5, y: 15, w: 5, h: 2 },
                Work: { x: 0, y: 28, w: 5, h: 2 }
            },
            lg: {
                All: { x: 5, y: 0, w: 7, h: 2 },
                About: { x: 7, y: 9, w: 5, h: 2 },
                Work: { x: 0, y: 28, w: 6, h: 2 }
            }
        },
        priority: {
            All: 1,
            About: 3,
            Work: 4
        }
    },
    {
        id: 6,
        componentType: 'ProjectCard',
        companyName: 'Freelance',
        companyLogo: IconGithub,
        projectImage: hillter_hotel,
        projectName: 'Hillter Hotel',
        projectDescription: 'string',
        projectUrl: 'https://en.wikipedia.org/wiki/Yahoo',
        projectTech: ['Next.js', 'TypeScript', 'Tailwind-CSS'],
        settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
        color: '',
        tags: ['Work'],
        icon: 'project',
        layouts: {
            xs: {
                All: { x: 0, y: 49, w: 6, h: 12 },
                About: { x: 0, y: 48, w: 2, h: 12 },
                Work: { x: 0, y: 16, w: 2, h: 12 }
            },
            sm: {
                All: { x: 0, y: 47, w: 6, h: 12 },
                About: { x: 0, y: 48, w: 6, h: 12 },
                Work: { x: 0, y: 16, w: 6, h: 12 }
            },
            md: {
                All: { x: 0, y: 25, w: 5, h: 12 },
                About: { x: 0, y: 28, w: 5, h: 14 },
                Work: { x: 5, y: 6, w: 5, h: 14 }
            },
            lg: {
                All: { x: 0, y: 21, w: 6, h: 16 },
                About: { x: 0, y: 17, w: 6, h: 16 },
                Work: { x: 6, y: 6, w: 6, h: 14 }
            }
        },
        priority: {
            All: 10,
            About: 4,
            Work: 6
        }
    },
    {
        id: 7,
        componentType: 'ProjectCard',
        companyName: 'Freelance',
        companyLogo: IconGithub,
        projectImage: hillter_hotel,
        projectName: 'Hillter Hotel',
        projectDescription: 'string',
        projectUrl: 'https://en.wikipedia.org/wiki/Yahoo',
        projectTech: ['Next.js', 'TypeScript', 'Tailwind-CSS'],
        settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
        color: '',
        tags: ['Work'],
        icon: 'project',
        layouts: {
            xs: {
                All: { x: 6, y: 61, w: 6, h: 12 },
                About: { x: 0, y: 60, w: 2, h: 12 },
                Work: { x: 0, y: 28, w: 2, h: 12 }
            },
            sm: {
                All: { x: 6, y: 59, w: 6, h: 12 },
                About: { x: 0, y: 60, w: 6, h: 12 },
                Work: { x: 0, y: 28, w: 6, h: 12 }
            },
            md: {
                All: { x: 5, y: 25, w: 5, h: 12 },
                About: { x: 5, y: 28, w: 5, h: 14 },
                Work: { x: 0, y: 14, w: 5, h: 14 }
            },
            lg: {
                All: { x: 6, y: 20.4, w: 6, h: 16 },
                About: { x: 6, y: 29, w: 6, h: 16 },
                Work: { x: 0, y: 14, w: 6, h: 14 }
            }
        },
        priority: {
            All: 10,
            About: 4,
            Work: 6
        }
    },
    {
        id: 8,
        componentType: 'TechCard',
        settings: { type: 'notifications', count: 3 },
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
        color: '',
        tags: ['tech'],
        icon: 'bell',
        layouts: {
            xs: {
                All: { x: 1.5, y: 28, w: 4.5, h: 7 },
                About: { x: 0, y: 22, w: 2, h: 7 },
                Work: { x: 0, y: 54, w: 2, h: 7 }
            },
            sm: {
                All: { x: 1.5, y: 28, w: 6, h: 7 },
                About: { x: 0, y: 22, w: 6, h: 7 },
                Work: { x: 0, y: 54, w: 6, h: 7 }
            },
            md: {
                All: { x: 0, y: 8, w: 4, h: 7 },
                About: { x: 0, y: 9, w: 5, h: 8 },
                Work: { x: 4, y: 30, w: 4, h: 8 }
            },
            lg: {
                All: { x: 1.5, y: 9, w: 4.5, h: 8 },
                About: { x: 0, y: 9, w: 7, h: 8 },
                Work: { x: 4, y: 30, w: 5, h: 8 }
            }
        },
        priority: {
            All: 8,
            About: 6,
            Work: 8
        }
    },
    {
        id: 9,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Email',
        platformIcon: IconEmail,
        color: '',
        tags: ['social'],
        platformUrl: 'mailto:salimi.devop@gmail.com',
        icon: 'bell',
        layouts: {
            xs: {
                All: { x: 0, y: 24, w: 1, h: 4 },
                About: { x: 0, y: 18, w: 1, h: 4 },
                Work: { x: 0, y: 65, w: 1, h: 4 }
            },
            sm: {
                All: { x: 0, y: 24, w: 3, h: 4 },
                About: { x: 0, y: 18, w: 3, h: 4 },
                Work: { x: 0, y: 65, w: 3, h: 4 }
            },
            md: {
                All: { x: 4, y: 11.5, w: 2, h: 3.5 },
                About: { x: 8, y: 5, w: 3, h: 3 },
                Work: { x: 0, y: 34, w: 2, h: 4 }
            },
            lg: {
                All: { x: 0, y: 13, w: 1.5, h: 4 },
                About: { x: 5, y: 4.5, w: 2, h: 4.5 },
                Work: { x: 0, y: 34, w: 2, h: 4 }
            }
        },
        priority: {
            All: 7,
            About: 7,
            Work: 9
        }
    },
    {
        id: 10,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Linkedin',
        platformIcon: IconLinkedin,
        color: '',
        tags: ['social'],
        platformUrl: 'https://www.linkedin.com/in/salimidevop/',
        icon: 'bell',
        layouts: {
            xs: {
                All: { x: 0, y: 20, w: 1, h: 4 },
                About: { x: 0, y: 14, w: 1, h: 4 },
                Work: { x: 0, y: 61, w: 1, h: 4 }
            },
            sm: {
                All: { x: 0, y: 20, w: 3, h: 4 },
                About: { x: 0, y: 14, w: 3, h: 4 },
                Work: { x: 0, y: 61, w: 3, h: 4 }
            },
            md: {
                All: { x: 4, y: 8, w: 2, h: 3.5 },
                About: { x: 5, y: 0, w: 2, h: 3 },
                Work: { x: 0, y: 30, w: 2, h: 4 }
            },
            lg: {
                All: { x: 0, y: 9, w: 1.5, h: 4 },
                About: { x: 5, y: 0, w: 2, h: 4.5 },
                Work: { x: 0, y: 30, w: 2, h: 4 }
            }
        },
        priority: {
            All: 6,
            About: 7,
            Work: 9
        }
    },
    {
        id: 11,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'GitHub',
        platformIcon: IconGithub,
        color: '',
        tags: ['social'],
        platformUrl: 'https://github.com/SalimiDev',
        icon: 'bell',
        layouts: {
            xs: {
                All: { x: 1, y: 20, w: 1, h: 4 },
                About: { x: 1, y: 14, w: 1, h: 4 },
                Work: { x: 1, y: 61, w: 1, h: 4 }
            },
            sm: {
                All: { x: 3, y: 20, w: 3, h: 4 },
                About: { x: 3, y: 14, w: 3, h: 4 },
                Work: { x: 3, y: 61, w: 3, h: 4 }
            },
            md: {
                All: { x: 6, y: 8, w: 2, h: 3.5 },
                About: { x: 5, y: 3, w: 2, h: 3 },
                Work: { x: 2, y: 30, w: 2, h: 4 }
            },
            lg: {
                All: { x: 1.5, y: 16.4, w: 4.5, h: 4 },
                About: { x: 7, y: 0, w: 2, h: 4.5 },
                Work: { x: 2, y: 30, w: 2, h: 4 }
            }
        },
        priority: {
            All: 6,
            About: 7,
            Work: 9
        }
    },
    {
        id: 12,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Instagram',
        platformIcon: IconInstagram,
        color: '',
        tags: ['social'],
        platformUrl: 'https://www.instagram.com/mehdi_salimi92/',
        icon: 'bell',
        layouts: {
            xs: {
                All: { x: 1, y: 24, w: 1, h: 4 },
                About: { x: 1, y: 18, w: 1, h: 4 },
                Work: { x: 1, y: 65, w: 1, h: 4 }
            },
            sm: {
                All: { x: 3, y: 24, w: 3, h: 4 },
                About: { x: 3, y: 18, w: 3, h: 4 },
                Work: { x: 3, y: 65, w: 3, h: 4 }
            },
            md: {
                All: { x: 6, y: 11.5, w: 2, h: 3.5 },
                About: { x: 5, y: 6, w: 2, h: 3 },
                Work: { x: 2, y: 34, w: 2, h: 4 }
            },
            lg: {
                All: { x: 0, y: 17, w: 1.5, h: 4 },
                About: { x: 7, y: 4.5, w: 2, h: 4.5 },
                Work: { x: 2, y: 34, w: 2, h: 4 }
            }
        },
        priority: {
            All: 7,
            About: 7,
            Work: 9
        }
    },
    {
        id: 13,
        componentType: 'ThemeToggleCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Instagram',
        color: '',
        tags: ['social'],
        icon: 'bell',
        layouts: {
            xs: {
                All: { x: 0, y: 13.5, w: 4.5, h: 2.5 },
                About: { x: 7, y: 30, w: 5, h: 2.5 },
                Work: { x: 0, y: 41, w: 2, h: 3 }
            },
            sm: {
                All: { x: 0, y: 13, w: 6, h: 3 },
                About: { x: 0, y: 30, w: 6, h: 2.5 },
                Work: { x: 0, y: 41, w: 6, h: 3 }
            },
            md: {
                All: { x: 5, y: 5, w: 5, h: 3 },
                About: { x: 5, y: 12, w: 5, h: 3 },
                Work: { x: 5, y: 3, w: 5, h: 3 }
            },
            lg: {
                All: { x: 7.5, y: 5.5, w: 4.5, h: 3.5 },
                About: { x: 7, y: 14, w: 5, h: 3 },
                Work: { x: 6, y: 3, w: 6, h: 3 }
            }
        },
        priority: {
            All: 3,
            About: 7,
            Work: 9
        }
    }
];
