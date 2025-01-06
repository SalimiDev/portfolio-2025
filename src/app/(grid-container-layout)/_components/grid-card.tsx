import React, { Suspense } from 'react';

import dynamic from 'next/dynamic';

import Loader from '@/app/_components/loader/loader';

import AboutMeCard from '../../_components/grid-cards/about-me/about-me-card';
import MovingBarCard from '../../_components/grid-cards/moving-bar/moving-bar-card';
import ResumeCard from '../../_components/grid-cards/resume/resume-card';
import SocialCard from '../../_components/grid-cards/social/social-card';
import ThemeToggleCard from '../../_components/grid-cards/theme-toggle/theme-toggle-card';
import WorkExperiences from '../../_components/grid-cards/work-experiences/work-experiences';
import { GridCardConfig } from '../grid-card-configs.type';

const LocationCard = dynamic(() => import('../../_components/grid-cards/location/location-card'));
const ProjectCard = dynamic(() => import('../../_components/grid-cards/project/project-card'));
const TechCard = dynamic(() => import('../../_components/grid-cards/technology/tech-card'));

interface GridCardProps {
    item: GridCardConfig;
}

//Precise definition of component types
type ComponentMap = {
    [key in GridCardConfig['componentType']]: React.ComponentType<{
        config: Extract<GridCardConfig, { componentType: key }>;
    }>;
};

// Creating a components map
const components: ComponentMap = {
    TechCard,
    ProjectCard,
    LocationCard,
    SocialCard,
    ResumeCard,
    AboutMeCard,
    MovingBarCard,
    ThemeToggleCard,
    WorkExperiences
};

const GridCard: React.FC<GridCardProps> = ({ item }) => {
    //Matching the component type using item.componentType
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
