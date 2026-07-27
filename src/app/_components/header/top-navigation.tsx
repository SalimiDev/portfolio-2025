'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { getNavigationTitle, navigationItems } from '@/features/portfolio-grid/model/navigation';

export const TopNavigation: React.FC = () => {
    const pathname = usePathname();
    const activeTab = getNavigationTitle(pathname);

    const activeIndex = navigationItems.findIndex((item) => item.title === activeTab);

    return (
        <nav
            aria-label='Portfolio sections'
            className='relative overflow-hidden rounded-3xl border border-base-25 bg-white/60 p-1 shadow-2xl dark:bg-white/10'>
            <ul className='relative flex gap-1'>
                <li
                    aria-hidden='true'
                    className='absolute top-0 left-0 h-full w-[calc(100%/3)] rounded-3xl bg-base-25 transition-all duration-300 ease-out dark:bg-base-100'
                    style={{
                        transform: `translateX(${activeIndex * 100}%)`
                    }}
                />
                {navigationItems.map((item) => (
                    <li
                        key={`navigation-${item.title}`}
                        className='relative z-10 w-24 flex-1 py-[5px] text-center dark:text-white'>
                        <Link
                            href={item.href}
                            aria-current={activeTab === item.title ? 'page' : undefined}
                            className='block transition-colors hover:text-base-50 dark:hover:text-base-25'>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
