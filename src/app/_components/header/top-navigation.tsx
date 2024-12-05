'use client';

import useActiveMenuTab from '@/store/useActiveMenuTab';

export const TopNavigation: React.FC = () => {
    const { activeTab, setActiveTab } = useActiveMenuTab();

    const menuItems: NavigationMenuItem[] = [
        { title: 'all', href: '/' },
        { title: 'about', href: '/about' },
        { title: 'work', href: '/work' }
    ];

    const activeIndex = menuItems.findIndex((item) => item.title === activeTab);

    return (
        <nav className='relative overflow-hidden rounded-3xl border bg-white/60 px-1 py-[4px] dark:bg-white/10'>
            <ul className='relative flex gap-1'>
                <div
                    className='absolute left-0 top-0 h-full w-[calc(100%/3)] rounded-3xl bg-[#21262d] transition-all duration-300 ease-out'
                    style={{
                        transform: `translateX(${activeIndex * 100}%)`
                    }}
                />
                {menuItems.map((item) => (
                    <li
                        key={`navigation-${item.title}`}
                        className='relative z-10 w-24 flex-1 py-[5px] text-center text-white'>
                        <button
                            onClick={() => setActiveTab(item.title)}
                            className={`transition-colors hover:text-[#616e7f] ${
                                activeTab === item.title ? 'text-white' : ''
                            }`}>
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

//bg-white/60 p-1 dark:bg-white/10
//dark:bg-[rgba(9,9,11,.15)]
