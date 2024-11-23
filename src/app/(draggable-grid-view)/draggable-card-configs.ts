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
        icon: 'user',
        layout: {
            x: 7,
            y: 0,
            w: 5,
            h: 4
        }
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
        icon: 'location-pin',
        layout: {
            x: 8,
            y: 0,
            w: 2,
            h: 4
        }
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
        icon: 'file',
        layout: {
            x: 0,
            y: 3,
            w: 5,
            h: 4
        }
    },
    {
        id: 4,
        componentType: 'MovingBarCard',
        settings: {
            columns: ['Name', 'Age'],
            data: [
                ['Alice', 25],
                ['Bob', 30]
            ]
        },
        color: '#2b58fc',
        tags: ['About'],
        link: '/resume',
        icon: 'file',
        layout: {
            x: 1,
            y: 4,
            w: 3,
            h: 4
        }
    }
];
