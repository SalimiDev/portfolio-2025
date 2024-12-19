import { GridCardConfig } from './grid-card-configs.type';

export const gridCardConfigs: GridCardConfig[] = [
    {
        id: 1,
        location: 'string',
        componentType: 'LocationCard',
        settings: { type: 'profile', data: { name: 'John Doe', age: 30 } },
        color: '',
        tags: ['About'],
        link: '/profile',
        icon: 'user',
        layouts: {
            all: { x: 0, y: 0, w: 2, h: 7 },
            about: { x: 0, y: 0, w: 2, h: 7 },
            work: { x: 0, y: 0, w: 2, h: 7 }
        },
        priority: {
            all: 1,
            about: 1,
            work: 2
        }
    },
    {
        id: 2,
        downloadIcon: 'string',
        eyeIcon: 'string',
        componentType: 'ResumeCard',
        settings: { type: 'bar', data: [5, 10, 15] },
        color: '',
        tags: ['Work'],
        link: '/statistics',
        icon: 'chart',
        layouts: {
            all: { x: 4, y: 0, w: 4, h: 3 },
            about: { x: 6, y: 0, w: 6, h: 3 },
            work: { x: 0, y: 2, w: 12, h: 3 }
        },
        priority: {
            all: 3,
            about: 4,
            work: 2
        }
    },
    {
        id: 3,
        avatar: 'string',
        componentType: 'AboutMeCard',
        settings: { type: 'map', location: 'New York' },
        color: '',
        tags: ['Work'],
        link: '/map',
        icon: 'location-pin',
        layouts: {
            all: { x: 8, y: 0, w: 4, h: 7 },
            about: { x: 0, y: 4, w: 12, h: 7 },
            work: { x: 0, y: 6, w: 12, h: 7 }
        },
        priority: {
            all: 2,
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
            all: { x: 0, y: 4, w: 6, h: 12 },
            about: { x: 6, y: 4, w: 6, h: 12 },
            work: { x: 0, y: 12, w: 12, h: 12 }
        },
        priority: {
            all: 4,
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
            all: { x: 6, y: 4, w: 6, h: 2 },
            about: { x: 0, y: 8, w: 12, h: 2 },
            work: { x: 0, y: 18, w: 12, h: 2 }
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
            all: { x: 0, y: 8, w: 3.5, h: 18 },
            about: { x: 6, y: 8, w: 4, h: 18 },
            work: { x: 0, y: 24, w: 5, h: 14 }
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
            all: { x: 0, y: 8, w: 4, h: 20 },
            about: { x: 6, y: 8, w: 4, h: 20 },
            work: { x: 5, y: 24, w: 5, h: 14 }
        },
        priority: {
            all: 6,
            about: 4,
            work: 6
        }
    }
];
