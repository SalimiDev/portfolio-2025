import { ReactElement } from 'react';

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
    icon: string;
}

//Grid cards types
interface LocationCard extends BaseGridCardConfig {
    componentType: 'LocationCard';
    location: string;
    locationImage: StaticImageData;
}
interface ResumeCard extends BaseGridCardConfig {
    componentType: 'ResumeCard';
    resumePreviewIcon: React.ElementType;
    resumeDownloadIcon: React.ElementType;
    resumePreviewUrl: string;
    resumeDownloadUrl: string;
    CVDate: string;
}
interface AboutMeCard extends BaseGridCardConfig {
    componentType: 'AboutMeCard';
    avatar: string;
    fullName: string;
    description: string;
}
interface WorkExperiencesCard extends BaseGridCardConfig {
    componentType: 'WorkExperiences';
    yearsOfExperience: number;
    experiences: ExperienceRecordTypes[];
    test?: string;
}
interface MovingBarCard extends BaseGridCardConfig {
    componentType: 'MovingBarCard';
    moveSpeed: number;
}
interface ProjectCard extends BaseGridCardConfig {
    componentType: 'ProjectCard';
    projectImage: StaticImageData;
    companyName?: string;
    companyLogo?: React.ElementType;
    projectName: string;
    projectDescription?: string;
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
    platformIcon: React.ElementType;
    platformUrl: string;
}
interface ThemeToggleCard extends BaseGridCardConfig {
    componentType: 'ThemeToggleCard';
    platform: string;
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
