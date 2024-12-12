'use client';

import React, { Suspense } from 'react';

import Loader from '@/app/_components/loader/loader';

interface GridCardProps {
    item: {
        componentType: GridComponent;
        settings?: Record<string, unknown>;
        link?: string; // Optional link field
        icon?: string; // Optional icon field
    };
}

const components = {
    ResumeCard: React.lazy(() => import('../../_components/grid-cards/resume/resume-card')),
    LocationCard: React.lazy(() => import('../../_components/grid-cards/location/location-card')),
    AboutMeCard: React.lazy(() => import('../../_components/grid-cards/about-me/about-me-card')),
    MovingBarCard: React.lazy(() => import('../../_components/grid-cards/moving-bar/moving-bar-card')),
    WorkExperiences: React.lazy(() => import('../../_components/grid-cards/work-experiences/work-experiences'))
};

const GridCard: React.FC<GridCardProps> = ({ item }) => {
    const ItemComponent = components[item.componentType] || null;

    return (
        <Suspense fallback={<Loader />}>
            {ItemComponent ? <ItemComponent {...item.settings} /> : <div>Component not found</div>}
        </Suspense>
    );
};

export default GridCard;
