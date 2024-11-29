'use client';

import useActiveMenuTab from '@/store/useActiveMenuTab';

export const TopNavigation: React.FC = () => {
    const { activeTab, setActiveTab } = useActiveMenuTab();

    const menuItems: NavigationMenuItem[] = [
        { title: 'all', href: '/' },
        { title: 'about', href: '/about' },
        { title: 'work', href: '/work' }
    ];

    return (
        <ul className='mr-12 flex gap-x-8'>
            {menuItems.map((item) => {
                return (
                    <li key={`navigation-${item.title}`}>
                        <button
                            onClick={() => setActiveTab(item.title)}
                            className={`pb-2 transition-colors hover:text-primary ${
                                activeTab === item.title && 'border-b-2 dark:border-primary/30 dark:text-primary'
                            }`}>
                            {item.title}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
