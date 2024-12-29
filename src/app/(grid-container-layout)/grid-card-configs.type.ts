import { StaticImageData } from 'next/image';

import { Layouts } from '@/types/layouts.types';

import { ExperienceRecordTypes } from '../_components/grid-cards/work-experiences/experience-records.interface';

interface BaseGridCardConfig {
    id: number;
    componentType: GridComponent;
    tags: string[];
    priority: Record<string, number>;
    layouts?: Layouts;
    settings: Record<string, unknown>;
    color: string;
    link: string;
    icon: string;
}

//Grid cards types
interface LocationCard extends BaseGridCardConfig {
    componentType: 'LocationCard';
    location: string;
}
interface ResumeCard extends BaseGridCardConfig {
    componentType: 'ResumeCard';
    eyeIcon: string;
    downloadIcon: string;
}
interface AboutMeCard extends BaseGridCardConfig {
    componentType: 'AboutMeCard';
    avatar: string;
}
interface WorkExperiencesCard extends BaseGridCardConfig {
    componentType: 'WorkExperiences';
    content: ExperienceRecordTypes[];
    test?: string;
}
interface MovingBarCard extends BaseGridCardConfig {
    componentType: 'MovingBarCard';
    moveSpeed: number;
}
interface ProjectCard extends BaseGridCardConfig {
    componentType: 'ProjectCard';
    projectImage: string;
    companyName?: string;
    companyLogo?: string;
    projectName: string;
    projectDescription?: string;
    projectLink?: string;
    projectTags?: string[];
}
interface TechCard extends BaseGridCardConfig {
    componentType: 'TechCard';
    technologies: { techName: string; techLogo: StaticImageData }[];
}
interface SocialCard extends BaseGridCardConfig {
    componentType: 'SocialCard';
    platform: string;
    platformIcon: StaticImageData;
}
interface ThemeToggleCard extends BaseGridCardConfig {
    componentType: 'ThemeToggleCard';
    platform: string;
    platformIcon: StaticImageData;
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
