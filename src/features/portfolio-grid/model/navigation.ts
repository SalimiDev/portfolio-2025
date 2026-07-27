import type { NavigationMenuItem, NavigationTitle } from './navigation.types';

export const navigationItems = [
    { title: 'All', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Work', href: '/work' }
] satisfies NavigationMenuItem[];

export function getNavigationTitle(pathname: string): NavigationTitle {
    if (pathname === '/about') return 'About';
    if (pathname === '/work') return 'Work';

    return 'All';
}
