'use client';

// because use want use usePathname for change style of active page
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TopNavigation: React.FC = () => {
    const menuItems: NavigationMenuItem[] = [
        { title: 'All', href: '/' },
        { title: 'About', href: '/about' },
        { title: 'Work', href: '/work' }
    ];

    const pathname = usePathname();

    return (
        <ul className='mr-12 flex gap-x-8'>
            {menuItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <li key={`navigation-${item.href}`}>
                        <button
                            // href={item.href}
                            className={`pb-2 transition-colors hover:text-primary ${
                                isActive && 'border-b-2 dark:border-primary/30 dark:text-primary'
                            }`}>
                            {item.title}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};
