'use client';

import useActiveMenuTab from '@/store/useActiveMenuTab';

export const TopNavigation: React.FC = () => {
    const { activeTab, setActiveTab } = useActiveMenuTab();

    const menuItems: NavigationMenuItem[] = [
        { title: 'All', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Work', href: '/work' }
    ];

    const activeIndex = menuItems.findIndex((item) => item.title === activeTab);

    return (
        <nav className='relative overflow-hidden rounded-3xl border bg-white/60 px-1 py-[4px] dark:bg-white/10'>
            <ul className='relative flex gap-1'>
                <li
                    className='absolute left-0 top-0 h-full w-[calc(100%/3)] rounded-3xl bg-base-25 transition-all duration-300 ease-out dark:bg-base-100'
                    style={{
                        transform: `translateX(${activeIndex * 100}%)`
                    }}
                />
                {menuItems.map((item) => (
                    <li
                        key={`navigation-${item.title}`}
                        className='relative z-10 w-24 flex-1 py-[5px] text-center dark:text-white'>
                        <button
                            onClick={() => setActiveTab(item.title)}
                            className={`transition-colors hover:text-base-50 dark:hover:text-base-25`}>
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
