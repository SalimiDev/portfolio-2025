import { describe, expect, it } from '@jest/globals';

import { generateLayoutByTab } from './layout';
import type { Layouts } from './layout.types';

const position = (x: number) => ({ x, y: 0, w: 1, h: 1 });
const layouts: Layouts = {
    xs: { All: position(1), About: position(2), Work: position(3) },
    sm: { All: position(4), About: position(5), Work: position(6) },
    md: { All: position(7), About: position(8), Work: position(9) },
    lg: { All: position(10), About: position(11), Work: position(12) }
};

describe('generateLayoutByTab', () => {
    it('selects the requested breakpoint and tab for every card', () => {
        const result = generateLayoutByTab(
            [
                { id: 10, layouts },
                { id: 20, layouts }
            ],
            'About',
            'md'
        );

        expect(result).toEqual([
            { i: '10', x: 8, y: 0, w: 1, h: 1 },
            { i: '20', x: 8, y: 0, w: 1, h: 1 }
        ]);
    });

    it('does not mutate the source layout', () => {
        generateLayoutByTab([{ id: 1, layouts }], 'Work', 'lg');

        expect(layouts.lg.Work).toEqual(position(12));
        expect(layouts.lg.Work).not.toHaveProperty('i');
    });
});
