'use client';

import React, { Suspense } from 'react';

import Loader from '@/app/_components/loader/loader';

import { GridCardConfig } from '../grid-card-configs.type';

interface GridCardProps {
    item: GridCardConfig;
}

// تعریف دقیق تایپ کامپوننت‌ها
type ComponentMap = {
    [key in GridCardConfig['componentType']]: React.ComponentType<{
        config: Extract<GridCardConfig, { componentType: key }>;
    }>;
};

// ایجاد نقشه کامپوننت‌ها
const components: ComponentMap = {
    ProjectCard: React.lazy(() => import('../../_components/grid-cards/project/project-card')),
    ResumeCard: React.lazy(() => import('../../_components/grid-cards/resume/resume-card')),
    LocationCard: React.lazy(() => import('../../_components/grid-cards/location/location-card')),
    AboutMeCard: React.lazy(() => import('../../_components/grid-cards/about-me/about-me-card')),
    MovingBarCard: React.lazy(() => import('../../_components/grid-cards/moving-bar/moving-bar-card')),
    WorkExperiences: React.lazy(() => import('../../_components/grid-cards/work-experiences/work-experiences'))
};

const GridCard: React.FC<GridCardProps> = ({ item }) => {
    // تطبیق نوع کامپوننت با استفاده از item.componentType
    const ItemComponent = components[item.componentType] as React.ComponentType<{
        config: typeof item;
    }> | null;

    return (
        <Suspense fallback={<Loader />}>
            {ItemComponent ? <ItemComponent config={item} /> : <div>Component not found</div>}
        </Suspense>
    );
};

export default GridCard;
