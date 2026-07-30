import { describe, expect, it } from '@jest/globals';

import { gridColumns } from '../model/layout';
import type { NavigationTitle } from '../model/navigation.types';
import { gridCardConfigs } from './grid-cards';
import { projectCards } from './project-cards';

const navigationTitles: NavigationTitle[] = ['All', 'About', 'Work'];
const breakpoints = Object.keys(gridColumns) as Array<keyof typeof gridColumns>;

describe('portfolio grid configuration', () => {
    it('keeps every card inside the columns available at each breakpoint', () => {
        const invalidLayouts: string[] = [];

        for (const card of gridCardConfigs) {
            for (const breakpoint of breakpoints) {
                for (const title of navigationTitles) {
                    const { x, w } = card.layouts[breakpoint][title];
                    const columns = gridColumns[breakpoint];

                    if (x < 0 || w <= 0 || x + w > columns) {
                        invalidLayouts.push(`card ${card.id}, ${breakpoint}/${title}: x=${x}, w=${w}, cols=${columns}`);
                    }
                }
            }
        }

        expect(invalidLayouts).toEqual([]);
    });

    it('keeps project cards ordered without layout overlaps', () => {
        const overlaps: string[] = [];

        expect(projectCards[0].projectName).toBe('Nobino');

        for (const breakpoint of breakpoints) {
            for (const title of navigationTitles) {
                for (let leftIndex = 0; leftIndex < projectCards.length; leftIndex += 1) {
                    for (let rightIndex = leftIndex + 1; rightIndex < projectCards.length; rightIndex += 1) {
                        const left = projectCards[leftIndex].layouts[breakpoint][title];
                        const right = projectCards[rightIndex].layouts[breakpoint][title];
                        const overlapsHorizontally = left.x < right.x + right.w && left.x + left.w > right.x;
                        const overlapsVertically = left.y < right.y + right.h && left.y + left.h > right.y;

                        if (overlapsHorizontally && overlapsVertically) {
                            overlaps.push(
                                `${breakpoint}/${title}: ${projectCards[leftIndex].projectName} overlaps ${projectCards[rightIndex].projectName}`
                            );
                        }
                    }
                }
            }
        }

        expect(overlaps).toEqual([]);
    });
});
