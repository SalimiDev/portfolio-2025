import { describe, expect, it } from '@jest/globals';

import { getNavigationTitle } from './navigation';

describe('getNavigationTitle', () => {
    it.each([
        ['/', 'All'],
        ['/about', 'About'],
        ['/work', 'Work']
    ] as const)('maps %s to %s', (pathname, expected) => {
        expect(getNavigationTitle(pathname)).toBe(expected);
    });

    it('falls back to All for unknown paths', () => {
        expect(getNavigationTitle('/missing')).toBe('All');
    });
});
