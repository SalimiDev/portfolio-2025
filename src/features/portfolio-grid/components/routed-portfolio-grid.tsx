'use client';

import { usePathname } from 'next/navigation';

import { getNavigationTitle } from '../model/navigation';
import PortfolioGrid from './portfolio-grid';

export default function RoutedPortfolioGrid() {
    const pathname = usePathname();

    return <PortfolioGrid activeTab={getNavigationTitle(pathname)} />;
}
