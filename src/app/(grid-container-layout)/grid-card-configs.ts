import {
    Station_Setup,
    Station_money,
    admin_dash,
    business_inteligence,
    hillter_hotel,
    location_dark,
    tesla_clone
} from '@/assets/images';
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
        componentType: 'AboutMeCard',
        avatar: '/images/mehdi_salimi.jpg',
        fullName: 'Mehdi Salimi',
        description: `I’m a front-end developer with three years of experience, specializing in building responsive
                    dashboards and interactive websites. I work with modern tools like JavaScript, Next.js, React, and
                    Tailwind CSS to craft beautiful user interfaces. Collaboration, creativity, and attention to detail
                    are at the heart of my work. I’m passionate about improving user experiences and continuously
                    enhancing my skills to deliver top-quality results.`,
        color: '',
        layouts: {
            xs: {
                All: { x: 0, y: 1, w: 5, h: 11 },
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

        color: '',
        layouts: {
            xs: {
                All: { x: 7, y: 37, w: 2, h: 14 },
                About: { x: 0, y: 36, w: 2, h: 13 },
                Work: { x: 0, y: 6, w: 2, h: 13 }
            },
            sm: {
                All: { x: 7, y: 35, w: 6, h: 12 },
                About: { x: 0, y: 35, w: 6, h: 13 },
                Work: { x: 0, y: 6, w: 6, h: 13 }
            },
            md: {
                All: { x: 0, y: 16, w: 10, h: 10 },
                About: { x: 10, y: 17, w: 10, h: 11 },
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
            'https://docs.google.com/gview?embedded=true&url=https://raw.githubusercontent.com/SalimiDev/SalimiDev/main/resume/Mehdi_Salimi-Frontend_Resume-Bahman-403_eng.pdf',
        resumeDownloadUrl:
            'https://github.com/SalimiDev/SalimiDev/blob/main/resume/Mehdi_Salimi-Frontend_Resume-Bahman-403_eng.pdf?raw=true',
        CVDate: '2025 CV',
        color: '',
        layouts: {
            xs: {
                All: { x: 8, y: 12, w: 2, h: 3 },
                About: { x: 0, y: 33.5, w: 2, h: 2.5 },
                Work: { x: 0, y: 3, w: 2, h: 3 }
            },
            sm: {
                All: { x: 8, y: 10, w: 6, h: 3 },
                About: { x: 0, y: 32.5, w: 6, h: 2.5 },
                Work: { x: 0, y: 3, w: 6, h: 3 }
            },
            md: {
                All: { x: 8, y: 2, w: 5, h: 3.5 },
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
        color: '',
        layouts: {
            xs: {
                All: { x: 1.5, y: 30, w: 4.5, h: 7 },
                About: { x: 0, y: 23, w: 2, h: 7 },
                Work: { x: 0, y: 102, w: 2, h: 7 }
            },
            sm: {
                All: { x: 1.5, y: 28, w: 6, h: 7 },
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
        moveSpeed: 10,
        componentType: 'MovingBarCard',
        color: '',
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
        location: 'string',
        locationImage: location_dark,
        color: '',
        layouts: {
            xs: {
                All: { x: 5, y: 18, w: 2, h: 4 },
                About: { x: 0, y: 11, w: 2, h: 4 },
                Work: { x: 0, y: 117, w: 2, h: 4 }
            },
            sm: {
                All: { x: 5, y: 16, w: 6, h: 4 },
                About: { x: 0, y: 10, w: 6, h: 4 },
                Work: { x: 0, y: 117, w: 6, h: 4 }
            },
            md: {
                All: { x: 10, y: 9, w: 2, h: 7 },
                About: { x: 10, y: 0, w: 3, h: 6 },
                Work: { x: 8, y: 55, w: 2, h: 8 }
            },
            lg: {
                All: { x: 5, y: 2, w: 2.5, h: 7 },
                About: { x: 10, y: 0, w: 3, h: 9 },
                Work: { x: 9, y: 61, w: 3, h: 8 }
            }
        }
    },
    {
        id: 7,
        componentType: 'ThemeToggleCard',
        platform: 'Instagram',
        color: '',
        layouts: {
            xs: {
                All: { x: 0, y: 15, w: 2, h: 3 },
                About: { x: 7, y: 31, w: 5, h: 2.5 },
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
    },
    {
        id: 8,
        componentType: 'SocialCard',
        platform: 'Linkedin',
        platformIcon: IconLinkedin,
        color: '',
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
        color: '',
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
        color: '',
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
                About: { x: 8, y: 5, w: 3, h: 3 },
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
        color: '',
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
    },
    {
        id: 12,
        componentType: 'ProjectCard',
        companyName: 'Freelance',
        companyLogo: IconGithub,
        projectImage: hillter_hotel,
        projectName: 'Hillter Hotel',
        projectDescription: 'string',
        projectUrl: 'https://salimidev.github.io/Hotel-ReactJsApp',
        projectTech: ['Next.js', 'TypeScript', 'Tailwind-CSS'],
        color: '',
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
        projectDescription: 'string',
        projectUrl: 'https://salimidev.github.io/TESLA-CLONE',
        projectTech: ['React.js', 'Redux', 'styled-components'],
        color: '',
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
        projectDescription: 'string',
        projectUrl: 'https://salimidev.github.io/react-admin-dashboard/',
        projectTech: ['React.js', 'Nivo charts', 'Tailwind-CSS', 'Formik'],
        color: '',
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
        projectDescription: 'string',
        projectUrl: '',
        projectTech: ['React.js', 'PrimeReact', 'Highcharts', 'Tailwind-CSS'],
        color: '',
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
    // {
    //     id: 16,
    //     componentType: 'ProjectCard',
    //     companyName: 'Freelance',
    //     companyLogo: IconGithub,
    //     projectImage: Station_Setup,
    //     projectName: 'Station Setup',
    //     projectDescription: 'string',
    //     projectUrl: 'https://salimidev.github.io/TESLA-CLONE',
    //     projectTech: ['React.js', 'Nivo charts', 'Tailwind-CSS', 'Formik'],
    //     color: '',
    //     layouts: {
    //         xs: {
    //             All: { x: 0, y: 99, w: 2, h: 12 },
    //             About: { x: 0, y: 97, w: 2, h: 12 },
    //             Work: { x: 0, y: 67, w: 2, h: 12 }
    //         },
    //         sm: {
    //             All: { x: 0, y: 95, w: 6, h: 12 },
    //             About: { x: 0, y: 96, w: 6, h: 12 },
    //             Work: { x: 0, y: 67, w: 6, h: 12 }
    //         },
    //         md: {
    //             All: { x: 0, y: 50, w: 5, h: 12 },
    //             About: { x: 0, y: 54, w: 5, h: 13 },
    //             Work: { x: 5, y: 32, w: 5, h: 13 }
    //         },
    //         lg: {
    //             All: { x: 0, y: 51, w: 6, h: 15 },
    //             About: { x: 0, y: 47, w: 6, h: 15 },
    //             Work: { x: 6, y: 36, w: 6, h: 15 }
    //         }
    //     }
    // },
    // {
    //     id: 17,
    //     componentType: 'ProjectCard',
    //     companyName: 'Freelance',
    //     companyLogo: IconGithub,
    //     projectImage: Station_money,
    //     projectName: 'Station Money',
    //     projectDescription: 'string',
    //     projectUrl: 'https://salimidev.github.io/TESLA-CLONE',
    //     projectTech: ['React.js', 'Nivo charts', 'Tailwind-CSS', 'Formik'],
    //     color: '',
    //     layouts: {
    //         xs: {
    //             All: { x: 0, y: 111, w: 2, h: 12 },
    //             About: { x: 0, y: 109, w: 2, h: 12 },
    //             Work: { x: 0, y: 79, w: 2, h: 12 }
    //         },
    //         sm: {
    //             All: { x: 0, y: 107, w: 6, h: 12 },
    //             About: { x: 0, y: 108, w: 6, h: 12 },
    //             Work: { x: 0, y: 79, w: 6, h: 12 }
    //         },
    //         md: {
    //             All: { x: 5, y: 50, w: 5, h: 12 },
    //             About: { x: 5, y: 54, w: 5, h: 13 },
    //             Work: { x: 0, y: 40, w: 5, h: 13 }
    //         },
    //         lg: {
    //             All: { x: 6, y: 51, w: 6, h: 15 },
    //             About: { x: 6, y: 59, w: 6, h: 15 },
    //             Work: { x: 0, y: 44, w: 6, h: 15 }
    //         }
    //     }
    // }
];
