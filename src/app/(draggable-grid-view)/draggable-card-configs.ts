import { DraggableCardConfig } from './draggable-card-configs.type';

export const draggableCardConfigs: DraggableCardConfig[] = [
    {
        id: 1,
        componentType: 'AboutMeCard',
        settings: {
            type: 'bar',
            data: [1, 2, 3]
        },
        color: '#FFD700',
        tags: ['Works'],
        link: '/about-me',
        icon: 'user'
    },
    {
        id: 2,
        componentType: 'LocationCard',
        settings: {
            type: 'map',
            data: [1, 2, 3]
        },
        color: '#B2EE',
        tags: ['Works'],
        link: '/locations',
        icon: 'location-pin'
    },
    {
        id: 3,
        componentType: 'ResumeCard',
        settings: {
            columns: ['Name', 'Age'],
            data: [
                ['Alice', 25],
                ['Bob', 30]
            ]
        },
        color: '#87CEEB',
        tags: ['About'],
        link: '/resume',
        icon: 'file'
    }
];
