import { ExperienceRecordTypes } from '../_components/grid-cards/work-experiences/experience-records.interface';

interface BaseGridCardConfig {
    id: number;
    componentType: GridComponent;
    tags: string[];
    priority: Record<string, number>;
    layouts?: Record<NavigationTitles, { x: number; y: number; w: number; h: number }>;
    settings: Record<string, unknown>;
    color: string;
    link: string;
    icon: string;
}

interface LocationCard extends BaseGridCardConfig {
    // componentType: 'LocationCard';
    location: string;
}

interface ResumeCard extends BaseGridCardConfig {
    // componentType: 'ResumeCard';
    // link: string;
    eyeIcon: string;
    downloadIcon: string;
}

interface AboutMeCard extends BaseGridCardConfig {
    // componentType: 'AboutMeCard';
    avatar: string;
}

interface WorkExperiencesCard extends BaseGridCardConfig {
    // componentType: 'WorkExperiences';
    content: ExperienceRecordTypes[];
    test?: string;
}
interface MovingBarCard extends BaseGridCardConfig {
    // componentType: 'MovingBarCard';
    moveSpeed: number;
}

export type GridCardConfig = ResumeCard | AboutMeCard | WorkExperiencesCard | LocationCard | MovingBarCard;

//=========================================================================
// export interface GridCardConfig {
//     id: number;
//     settings: Record<string, unknown>;
//     componentType: GridComponent;
//     color: string;
//     tags: string[];
//     link: string;
//     icon: string;
//     priority: Record<string, number>; // تعریف تایپ priority به صورت دینامیک
//     layouts?: Record<NavigationTitles, { x: number; y: number; w: number; h: number }>;
// }
