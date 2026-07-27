import type React from 'react';

import type { GridCardConfig } from '../model/grid-card.types';
import AboutMeCard from './cards/about-me/about-me-card';
import LocationCard from './cards/location/location-card';
import MovingBarCard from './cards/moving-bar/moving-bar-card';
import ProjectCard from './cards/project/project-card';
import ResumeCard from './cards/resume/resume-card';
import SocialCard from './cards/social/social-card';
import TechCard from './cards/technology/tech-card';
import ThemeToggleCard from './cards/theme-toggle/theme-toggle-card';
import WorkExperiences from './cards/work-experiences/work-experiences';

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

    return ItemComponent ? <ItemComponent config={item} /> : <div>Component not found</div>;
};

export default GridCard;
