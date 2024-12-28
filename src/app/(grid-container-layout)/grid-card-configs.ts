import { emailIcon, githubIcon, instagramIcon, linkedinIcon } from '@/assets/images/social-icons';
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

import { GridCardConfig } from './grid-card-configs.type';

// export const gridCardConfigs: GridCardConfig[] = [
//     {
//         id: 1,
//         componentType: 'LocationCard',
//         location: 'string',
//         settings: { type: 'profile', data: { name: 'John Doe', age: 30 } },
//         color: '',
//         tags: ['About'],
//         link: '/profile',
//         icon: 'user',
//         layouts: {
//             all: { x: 5, y: 2, w: 2.5, h: 6.7 },
//             about: { x: 10, y: 0, w: 3, h: 8.4 },
//             work: { x: 12, y: 30, w: 3, h: 8.4 }
//         },
//         priority: {
//             all: 2,
//             about: 1,
//             work: 2
//         }
//     },
//     {
//         id: 2,
//         componentType: 'ResumeCard',
//         downloadIcon: 'string',
//         eyeIcon: 'string',
//         settings: { type: 'bar', data: [5, 10, 15] },
//         color: '',
//         tags: ['Work'],
//         link: '/statistics',
//         icon: 'chart',
//         layouts: {
//             all: { x: 8, y: 2, w: 4.5, h: 3.3 },
//             about: { x: 7, y: 10.4, w: 5, h: 3 },
//             work: { x: 6, y: 0, w: 6, h: 3 }
//         },
//         priority: {
//             all: 3,
//             about: 4,
//             work: 2
//         }
//     },
//     {
//         id: 3,
//         componentType: 'AboutMeCard',
//         avatar: 'string',
//         settings: { type: 'map', location: 'New York' },
//         color: '',
//         tags: ['Work'],
//         link: '/map',
//         icon: 'location-pin',
//         layouts: {
//             all: { x: 0, y: 0, w: 5, h: 8.4 },
//             about: { x: 0, y: 0, w: 5, h: 8.4 },
//             work: { x: 6, y: 22, w: 6, h: 8.4 }
//         },
//         priority: {
//             all: 1,
//             about: 1,
//             work: 3
//         }
//     },
//     {
//         id: 4,
//         componentType: 'WorkExperiences',
//         content: [
//             {
//                 title: 'Frontend Developer',
//                 company: 'Paya',
//                 dates: '2023 - Present',
//                 opacity: 100,
//                 lineThrough: false
//             },
//             {
//                 title: 'Web Developer',
//                 company: 'Freelance',
//                 dates: '2021 - 2023',
//                 opacity: 55,
//                 lineThrough: true
//             },
//             {
//                 title: 'Frontend Developer',
//                 company: 'Protein Gostar Sina',
//                 dates: '2020 - 2021',
//                 opacity: 55,
//                 lineThrough: true
//             }
//         ],
//         // test: 'string',
//         settings: {
//             columns: ['Skill', 'Level'],
//             data: [
//                 ['React', 'Expert'],
//                 ['CSS', 'Advanced']
//             ]
//         },
//         color: '',
//         // color: '#ADD8E6',
//         tags: ['About'],
//         link: '/resume',
//         icon: 'file',
//         layouts: {
//             all: { x: 7, y: 10, w: 6, h: 12 },
//             about: { x: 6, y: 16.1, w: 6, h: 12 },
//             work: { x: 0, y: 0, w: 6, h: 12 }
//         },
//         priority: {
//             all: 10,
//             about: 2,
//             work: 5
//         }
//     },
//     {
//         id: 5,
//         moveSpeed: 10,
//         componentType: 'MovingBarCard',
//         settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
//         color: '',
//         tags: ['Work'],
//         link: '/projects',
//         icon: 'project',
//         layouts: {
//             all: { x: 5, y: 0, w: 7, h: 1.6 },
//             about: { x: 7, y: 8.4, w: 5, h: 1.7 },
//             work: { x: 0, y: 58, w: 12, h: 2 }
//         },
//         priority: {
//             all: 5,
//             about: 3,
//             work: 4
//         }
//     },
//     {
//         id: 6,
//         componentType: 'ProjectCard',
//         companyName: 'string',
//         companyLogo: 'string',
//         projectImage: 'string',
//         projectName: 'Hillter Hotel',
//         projectDescription: 'string',
//         projectLink: 'string',
//         projectTags: ['scsc'],
//         settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
//         color: '',
//         tags: ['Work'],
//         link: '/projects',
//         icon: 'project',
//         layouts: {
//             all: { x: 0, y: 20.4, w: 6, h: 16 },
//             about: { x: 0, y: 16.1, w: 6, h: 16 },
//             work: { x: 6, y: 6, w: 6, h: 14 }
//         },
//         priority: {
//             all: 6,
//             about: 4,
//             work: 6
//         }
//     },
//     {
//         id: 7,
//         componentType: 'ProjectCard',
//         companyName: 'string',
//         companyLogo: 'string',
//         projectImage: 'string',
//         projectName: 'Hillter Hotel',
//         projectDescription: 'string',
//         projectLink: 'string',
//         projectTags: ['scsc'],
//         settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
//         color: '',
//         tags: ['Work'],
//         link: '/projects',
//         icon: 'project',
//         layouts: {
//             all: { x: 6, y: 20.4, w: 6, h: 16 },
//             about: { x: 6, y: 28.1, w: 6, h: 16 },
//             work: { x: 0, y: 12, w: 6, h: 16.4 }
//         },
//         priority: {
//             all: 6,
//             about: 4,
//             work: 6
//         }
//     },
//     {
//         id: 8,
//         componentType: 'TechCard',
//         settings: { type: 'notifications', count: 3 },
//         technologies: [
//             { techName: 'React', techLogo: reactjsLogo },
//             { techName: 'Next.js', techLogo: nextJsLogo },
//             { techName: 'JavaScript', techLogo: javascriptLogo },
//             { techName: 'TypeScript', techLogo: typescriptLogo },
//             { techName: 'Redux', techLogo: reduxLogo },
//             { techName: 'Tailwind CSS', techLogo: tailwindCssLogo },
//             { techName: 'Material UI', techLogo: materialUiLogo },
//             { techName: 'Sass', techLogo: sassLogo },
//             { techName: 'HTML', techLogo: htmlLogo },
//             { techName: 'CSS', techLogo: cssLogo },
//             { techName: 'Figma', techLogo: figmaLogo },
//             { techName: 'Git', techLogo: gitLogo },
//             { techName: 'GitHub', techLogo: githubLogo },
//             { techName: 'GitLab', techLogo: gitlabLogo }
//         ],
//         color: '',
//         tags: ['tech'],
//         link: '/notifications',
//         icon: 'bell',
//         layouts: {
//             all: { x: 1.5, y: 8.4, w: 4.5, h: 8 },
//             about: { x: 0, y: 8.4, w: 7, h: 7.7 },
//             work: { x: 4, y: 30, w: 5, h: 8.4 }
//         },
//         priority: {
//             all: 8,
//             about: 6,
//             work: 8
//         }
//     },
//     {
//         id: 9,
//         componentType: 'SocialCard',
//         settings: { type: 'notifications', count: 3 },
//         platform: 'Email',
//         platformIcon: emailIcon,
//         color: '',
//         tags: ['social'],
//         link: 'mailto:salimi.devop@gmail.com',
//         icon: 'bell',
//         layouts: {
//             all: { x: 0, y: 16.4, w: 1.5, h: 4 },
//             about: { x: 5, y: 1, w: 2, h: 4.2 },
//             work: { x: 0, y: 55, w: 2, h: 4.2 }
//         },
//         priority: {
//             all: 9,
//             about: 7,
//             work: 9
//         }
//     },
//     {
//         id: 10,
//         componentType: 'SocialCard',
//         settings: { type: 'notifications', count: 3 },
//         platform: 'Linkedin',
//         platformIcon: linkedinIcon,
//         color: '',
//         tags: ['social'],
//         link: 'https://www.linkedin.com/in/salimidevop/',
//         icon: 'bell',
//         layouts: {
//             all: { x: 0, y: 8.4, w: 1.5, h: 4 },
//             about: { x: 7, y: 0, w: 2, h: 4.2 },
//             work: { x: 0, y: 51, w: 2, h: 4.2 }
//         },
//         priority: {
//             all: 9,
//             about: 7,
//             work: 9
//         }
//     },
//     {
//         id: 11,
//         componentType: 'SocialCard',
//         settings: { type: 'notifications', count: 3 },
//         platform: 'GitHub',
//         platformIcon: githubIcon,
//         color: '',
//         tags: ['social'],
//         link: 'https://github.com/SalimiDev',
//         icon: 'bell',
//         layouts: {
//             all: { x: 1.5, y: 16.4, w: 4.5, h: 4 },
//             about: { x: 5, y: 0, w: 2, h: 4.2 },
//             work: { x: 2, y: 51, w: 2, h: 4.2 }
//         },
//         priority: {
//             all: 9,
//             about: 7,
//             work: 9
//         }
//     },
//     {
//         id: 12,
//         componentType: 'SocialCard',
//         settings: { type: 'notifications', count: 3 },
//         platform: 'Instagram',
//         platformIcon: instagramIcon,
//         color: '',
//         tags: ['social'],
//         link: 'https://www.instagram.com/mehdi_salimi92/',
//         icon: 'bell',
//         layouts: {
//             all: { x: 0, y: 12.4, w: 1.5, h: 4 },
//             about: { x: 7, y: 1, w: 2, h: 4.2 },
//             work: { x: 2, y: 55, w: 2, h: 4.2 }
//         },
//         priority: {
//             all: 9,
//             about: 7,
//             work: 9
//         }
//     },
//     {
//         id: 13,
//         componentType: 'ThemeToggleCard',
//         settings: { type: 'notifications', count: 3 },
//         platform: 'Instagram',
//         platformIcon: instagramIcon,
//         color: '',
//         tags: ['social'],
//         link: 'https://www.instagram.com/mehdi_salimi92/',
//         icon: 'bell',
//         layouts: {
//             all: { x: 8, y: 2, w: 4.5, h: 3.3 },
//             about: { x: 7, y: 15, w: 5, h: 3 },
//             work: { x: 6, y: 3, w: 6, h: 3 }
//         },
//         priority: {
//             all: 9,
//             about: 7,
//             work: 9
//         }
//     }
// ];

export const gridCardConfigs: GridCardConfig[] = [
    {
        id: 1,
        componentType: 'LocationCard',
        location: 'string',
        settings: { type: 'profile', data: { name: 'John Doe', age: 30 } },
        color: '',
        tags: ['About'],
        link: '/profile',
        icon: 'user',
        layouts: {
            sm: {
                all: { x: 5, y: 2, w: 2.5, h: 6.7 },
                about: { x: 10, y: 0, w: 3, h: 8.4 },
                work: { x: 12, y: 30, w: 3, h: 8.4 }
            },
            md: {
                all: { x: 5, y: 2, w: 2.5, h: 6.7 },
                about: { x: 10, y: 0, w: 3, h: 8.4 },
                work: { x: 12, y: 30, w: 3, h: 8.4 }
            },
            lg: {
                all: { x: 5, y: 2, w: 2.5, h: 6.7 },
                about: { x: 10, y: 0, w: 3, h: 8.4 },
                work: { x: 12, y: 30, w: 3, h: 8.4 }
            }
        },
        priority: {
            all: 2,
            about: 1,
            work: 2
        }
    },
    {
        id: 2,
        componentType: 'ResumeCard',
        downloadIcon: 'string',
        eyeIcon: 'string',
        settings: { type: 'bar', data: [5, 10, 15] },
        color: '',
        tags: ['Work'],
        link: '/statistics',
        icon: 'chart',
        layouts: {
            lg: {
                all: { x: 8, y: 2, w: 4.5, h: 3.3 },
                about: { x: 7, y: 10.4, w: 5, h: 3 },
                work: { x: 6, y: 0, w: 6, h: 3 }
            }
        },
        priority: {
            all: 3,
            about: 4,
            work: 2
        }
    },
    {
        id: 3,
        componentType: 'AboutMeCard',
        avatar: 'string',
        settings: { type: 'map', location: 'New York' },
        color: '',
        tags: ['Work'],
        link: '/map',
        icon: 'location-pin',
        layouts: {
            lg: {
                all: { x: 0, y: 0, w: 5, h: 8.4 },
                about: { x: 0, y: 0, w: 5, h: 8.4 },
                work: { x: 6, y: 22, w: 6, h: 8.4 }
            }
        },
        priority: {
            all: 1,
            about: 1,
            work: 3
        }
    },
    {
        id: 4,
        componentType: 'WorkExperiences',
        content: [
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
        // test: 'string',
        settings: {
            columns: ['Skill', 'Level'],
            data: [
                ['React', 'Expert'],
                ['CSS', 'Advanced']
            ]
        },
        color: '',
        // color: '#ADD8E6',
        tags: ['About'],
        link: '/resume',
        icon: 'file',
        layouts: {
            lg: {
                all: { x: 7, y: 10, w: 6, h: 12 },
                about: { x: 6, y: 16.1, w: 6, h: 12 },
                work: { x: 0, y: 0, w: 6, h: 12 }
            }
        },
        priority: {
            all: 10,
            about: 2,
            work: 5
        }
    },
    {
        id: 5,
        moveSpeed: 10,
        componentType: 'MovingBarCard',
        settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
        color: '',
        tags: ['Work'],
        link: '/projects',
        icon: 'project',
        layouts: {
            lg: {
                all: { x: 5, y: 0, w: 7, h: 1.6 },
                about: { x: 7, y: 8.4, w: 5, h: 1.7 },
                work: { x: 0, y: 58, w: 12, h: 2 }
            }
        },
        priority: {
            all: 5,
            about: 3,
            work: 4
        }
    },
    {
        id: 6,
        componentType: 'ProjectCard',
        companyName: 'string',
        companyLogo: 'string',
        projectImage: 'string',
        projectName: 'Hillter Hotel',
        projectDescription: 'string',
        projectLink: 'string',
        projectTags: ['scsc'],
        settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
        color: '',
        tags: ['Work'],
        link: '/projects',
        icon: 'project',
        layouts: {
            lg: {
                all: { x: 0, y: 20.4, w: 6, h: 16 },
                about: { x: 0, y: 16.1, w: 6, h: 16 },
                work: { x: 6, y: 6, w: 6, h: 14 }
            }
        },
        priority: {
            all: 6,
            about: 4,
            work: 6
        }
    },
    {
        id: 7,
        componentType: 'ProjectCard',
        companyName: 'string',
        companyLogo: 'string',
        projectImage: 'string',
        projectName: 'Hillter Hotel',
        projectDescription: 'string',
        projectLink: 'string',
        projectTags: ['scsc'],
        settings: { type: 'list', data: ['Project A', 'Project B', 'Project C'] },
        color: '',
        tags: ['Work'],
        link: '/projects',
        icon: 'project',
        layouts: {
            lg: {
                all: { x: 6, y: 20.4, w: 6, h: 16 },
                about: { x: 6, y: 28.1, w: 6, h: 16 },
                work: { x: 0, y: 12, w: 6, h: 16.4 }
            }
        },
        priority: {
            all: 6,
            about: 4,
            work: 6
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
        link: '/notifications',
        icon: 'bell',
        layouts: {
            lg: {
                all: { x: 1.5, y: 8.4, w: 4.5, h: 8 },
                about: { x: 0, y: 8.4, w: 7, h: 7.7 },
                work: { x: 4, y: 30, w: 5, h: 8.4 }
            }
        },
        priority: {
            all: 8,
            about: 6,
            work: 8
        }
    },
    {
        id: 9,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Email',
        platformIcon: emailIcon,
        color: '',
        tags: ['social'],
        link: 'mailto:salimi.devop@gmail.com',
        icon: 'bell',
        layouts: {
            lg: {
                all: { x: 0, y: 16.4, w: 1.5, h: 4 },
                about: { x: 5, y: 1, w: 2, h: 4.2 },
                work: { x: 0, y: 55, w: 2, h: 4.2 }
            }
        },
        priority: {
            all: 9,
            about: 7,
            work: 9
        }
    },
    {
        id: 10,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Linkedin',
        platformIcon: linkedinIcon,
        color: '',
        tags: ['social'],
        link: 'https://www.linkedin.com/in/salimidevop/',
        icon: 'bell',
        layouts: {
            lg: {
                all: { x: 0, y: 8.4, w: 1.5, h: 4 },
                about: { x: 7, y: 0, w: 2, h: 4.2 },
                work: { x: 0, y: 51, w: 2, h: 4.2 }
            }
        },
        priority: {
            all: 9,
            about: 7,
            work: 9
        }
    },
    {
        id: 11,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'GitHub',
        platformIcon: githubIcon,
        color: '',
        tags: ['social'],
        link: 'https://github.com/SalimiDev',
        icon: 'bell',
        layouts: {
            lg: {
                all: { x: 1.5, y: 16.4, w: 4.5, h: 4 },
                about: { x: 5, y: 0, w: 2, h: 4.2 },
                work: { x: 2, y: 51, w: 2, h: 4.2 }
            }
        },
        priority: {
            all: 9,
            about: 7,
            work: 9
        }
    },
    {
        id: 12,
        componentType: 'SocialCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Instagram',
        platformIcon: instagramIcon,
        color: '',
        tags: ['social'],
        link: 'https://www.instagram.com/mehdi_salimi92/',
        icon: 'bell',
        layouts: {
            lg: {
                all: { x: 0, y: 12.4, w: 1.5, h: 4 },
                about: { x: 7, y: 1, w: 2, h: 4.2 },
                work: { x: 2, y: 55, w: 2, h: 4.2 }
            }
        },
        priority: {
            all: 9,
            about: 7,
            work: 9
        }
    },
    {
        id: 13,
        componentType: 'ThemeToggleCard',
        settings: { type: 'notifications', count: 3 },
        platform: 'Instagram',
        platformIcon: instagramIcon,
        color: '',
        tags: ['social'],
        link: 'https://www.instagram.com/mehdi_salimi92/',
        icon: 'bell',
        layouts: {
            lg: {
                all: { x: 8, y: 2, w: 4.5, h: 3.3 },
                about: { x: 7, y: 15, w: 5, h: 3 },
                work: { x: 6, y: 3, w: 6, h: 3 }
            }
        },
        priority: {
            all: 9,
            about: 7,
            work: 9
        }
    }
];
