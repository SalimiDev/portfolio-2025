import type { Metadata } from 'next';

import PortfolioGrid from '@/features/portfolio-grid/components/portfolio-grid';

export const metadata: Metadata = {
    title: 'Work'
};

export default function WorkPage() {
    return <PortfolioGrid activeTab='Work' />;
}
