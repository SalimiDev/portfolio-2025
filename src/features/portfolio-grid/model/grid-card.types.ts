import type { StaticImageData } from 'next/image';

import type { SvgIconProp } from '@/components/icons/icon.types';

import type { ExperienceRecord } from './experience-record.types';
import type { GridComponent } from './grid-component.types';
import type { Layouts } from './layout.types';

type IconComponent = React.ComponentType<SvgIconProp>;

interface BaseGridCardConfig {
    id: number;
    componentType: GridComponent;
    layouts: Layouts;
}

//Grid cards types
interface LocationCard extends BaseGridCardConfig {
    componentType: 'LocationCard';
    locationImage: StaticImageData;
}
interface ResumeCard extends BaseGridCardConfig {
    componentType: 'ResumeCard';
    resumePreviewIcon: IconComponent;
    resumeDownloadIcon: IconComponent;
    resumePreviewUrl: string;
    resumeDownloadUrl: string;
    cvDate: string;
}
interface AboutMeCard extends BaseGridCardConfig {
    componentType: 'AboutMeCard';
    avatar: StaticImageData;
    fullName: string;
    description: string;
}
interface WorkExperiencesCard extends BaseGridCardConfig {
    componentType: 'WorkExperiences';
    yearsOfExperience: number;
    experiences: ExperienceRecord[];
}
interface MovingBarCard extends BaseGridCardConfig {
    componentType: 'MovingBarCard';
}
interface ProjectCard extends BaseGridCardConfig {
    componentType: 'ProjectCard';
    projectImage: StaticImageData;
    projectImageFit?: 'fill' | 'contain' | 'cover';
    companyName?: string;
    companyLogo?: IconComponent;
    projectName: string;
    projectUrl: string;
    projectTech?: string[];
}
interface TechCard extends BaseGridCardConfig {
    componentType: 'TechCard';
    technologies: { techName: string; techLogo: StaticImageData }[];
}
interface SocialCard extends BaseGridCardConfig {
    componentType: 'SocialCard';
    platform: string;
    platformIcon: IconComponent;
    platformUrl: string;
}
interface ThemeToggleCard extends BaseGridCardConfig {
    componentType: 'ThemeToggleCard';
}

export type GridCardConfig =
    | ResumeCard
    | AboutMeCard
    | WorkExperiencesCard
    | LocationCard
    | MovingBarCard
    | ProjectCard
    | TechCard
    | SocialCard
    | ThemeToggleCard;
