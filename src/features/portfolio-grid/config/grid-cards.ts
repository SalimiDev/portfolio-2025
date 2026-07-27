import type { GridCardConfig } from '../model/grid-card.types';
import { profileCards } from './profile-cards';
import { projectCards } from './project-cards';
import { socialCards } from './social-cards';

export const gridCardConfigs = [...profileCards, ...socialCards, ...projectCards] satisfies GridCardConfig[];
