'use client';

import React, { Suspense } from 'react';

import Loader from '@/app/_components/loader/loader';

interface DraggableItemProps {
    item: {
        componentType: DraggableComponent;
        settings?: Record<string, unknown>;
        link?: string; // Optional link field
        icon?: string; // Optional icon field
    };
}

const components = {
    ResumeCard: React.lazy(() => import('../../(grid-cards)/resume/resume-card')),
    LocationCard: React.lazy(() => import('../../(grid-cards)/location/location-card')),
    AboutMeCard: React.lazy(() => import('../../(grid-cards)/about-me/about-me-card')),
    MovingBarCard: React.lazy(() => import('../../(grid-cards)/moving-bar/moving-bar-card'))
};

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
    const ItemComponent = components[item.componentType] || null;

    return (
        <Suspense fallback={<Loader />}>
            {ItemComponent ? <ItemComponent {...item.settings} /> : <div>Component not found</div>}
        </Suspense>
    );
};

export default DraggableItem;
