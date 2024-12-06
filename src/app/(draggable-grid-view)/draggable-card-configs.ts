import { DraggableCardConfig } from './draggable-card-configs.type';

export const draggableCardConfigs: DraggableCardConfig[] = [
    {
        id: 1,
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
        componentType: 'AboutMeCard',
        settings: { type: 'timeline', events: ['2020: Joined company', '2022: Promoted'] },
        color: '#98FB98',
        tags: ['About', 'Work'],
        link: '/timeline',
        icon: 'timeline',
        layouts: {
            all: { x: 0, y: 8, w: 4, h: 4 },
            about: { x: 6, y: 8, w: 6, h: 4 },
            work: { x: 0, y: 24, w: 12, h: 4 }
        },
        priority: {
            all: 6,
            about: 4,
            work: 6
        }
    },
    {
        id: 7,
        componentType: 'LocationCard',
        settings: { type: 'chat', messages: ['Hi!', 'Hello!', 'How are you?'] },
        color: '#FFC0CB',
        tags: ['About', 'Work'],
        link: '/chat',
        icon: 'chat',
        layouts: {
            all: { x: 4, y: 8, w: 4, h: 20 },
            about: { x: 0, y: 12, w: 12, h: 20 },
            work: { x: 0, y: 28, w: 12, h: 20 }
        },
        priority: {
            all: 7,
            about: 5,
            work: 7
        }
    },
    {
        id: 8,
        componentType: 'MovingBarCard',
        settings: { type: 'notifications', count: 3 },
        color: '#F0E68C',
        tags: ['Work'],
        link: '/notifications',
        icon: 'bell',
        layouts: {
            all: { x: 8, y: 8, w: 4, h: 4 },
            about: { x: 0, y: 16, w: 12, h: 4 },
            work: { x: 0, y: 32, w: 12, h: 2 }
        },
        priority: {
            all: 8,
            about: 6,
            work: 8
        }
    },
    {
        id: 9,
        componentType: 'ResumeCard',
        settings: { type: 'kanban', tasks: ['Task 1', 'Task 2', 'Task 3'] },
        color: '#FF6347',
        tags: ['Work'],
        link: '/tasks',
        icon: 'tasks',
        layouts: {
            all: { x: 0, y: 12, w: 6, h: 4 },
            about: { x: 6, y: 12, w: 6, h: 4 },
            work: { x: 0, y: 34, w: 12, h: 6 }
        },
        priority: {
            all: 9,
            about: 7,
            work: 9
        }
    },
    {
        id: 10,
        componentType: 'LocationCard',
        settings: { type: 'settings', options: ['Theme', 'Notifications'] },
        color: '#DDA0DD',
        tags: ['About'],
        link: '/settings',
        icon: 'settings',
        layouts: {
            all: { x: 6, y: 12, w: 6, h: 4 },
            about: { x: 0, y: 20, w: 12, h: 4 },
            work: { x: 0, y: 40, w: 12, h: 2 }
        },
        priority: {
            all: 10,
            about: 8,
            work: 10
        }
    }
];
