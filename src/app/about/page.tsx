import type { Metadata } from 'next';

import PortfolioGrid from '@/features/portfolio-grid/components/portfolio-grid';

export const metadata: Metadata = {
    title: 'About'
};

export default function AboutPage() {
    return <PortfolioGrid activeTab='About' />;
}
