import { describe, expect, it } from '@jest/globals';

import { gridColumns } from '../model/layout';
import type { NavigationTitle } from '../model/navigation.types';
import { gridCardConfigs } from './grid-cards';

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
});
