'use client';

import { useState } from 'react';

export const TopNavigation: React.FC = () => {
    const [isActive, setIsActive] = useState('');
    const menuItems: NavigationMenuItem[] = [
        { title: 'All', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Work', href: '/work' }
    ];

    return (
        <ul className='mr-12 flex gap-x-8'>
            {menuItems.map((item) => {
                return (
                    <li key={`navigation-${item.href}`}>
                        <button
                            onClick={() => setIsActive(item.title)}
                            className={`pb-2 transition-colors hover:text-primary ${
                                isActive === item.title && 'border-b-2 dark:border-primary/30 dark:text-primary'
                            }`}>
                            {item.title}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
