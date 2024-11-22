'use client';

import React, { Suspense } from 'react';

import Loader from '@/app/_components/loader/loader';

type ComponentType = 'LocationCard' | 'ResumeCard' | 'AboutMeCard';

interface DraggableItemProps {
    item: {
        componentType: ComponentType;
        settings?: Record<string, unknown>;
        link?: string; // Optional link field
        icon?: string; // Optional icon field
    };
}

const components = {
    ResumeCard: React.lazy(() => import('../../(grid-cards)/resume/resume-card')),
    LocationCard: React.lazy(() => import('../../(grid-cards)/location/location-card')),
    AboutMeCard: React.lazy(() => import('../../(grid-cards)/about-me/about-me-card'))
};

const DraggableItem: React.FC<DraggableItemProps> = ({ item }) => {
    console.log('🚀 ~ DraggableItem ~ item:', item);
    const ItemComponent = components[item.componentType] || null;
    console.log('🚀 ~ DraggableItem ~ ItemComponent:', ItemComponent);

    return (
        <Suspense fallback={<Loader />}>
            {ItemComponent ? <ItemComponent {...item.settings} /> : <div>Component not found</div>}
        </Suspense>
    );
};

export default DraggableItem;
