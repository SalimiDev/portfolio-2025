import type { GridCardConfig } from './grid-card.types';
import type { Layouts } from './layout.types';
import type { NavigationTitle } from './navigation.types';

export const gridBreakpoints = { lg: 996, md: 768, sm: 480, xs: 0 } as const;
export const gridColumns = { lg: 12, md: 10, sm: 6, xs: 2 } as const;

type LayoutSource = Pick<GridCardConfig, 'id' | 'layouts'>;

export function generateLayoutByTab(cards: readonly LayoutSource[], tab: NavigationTitle, screenSize: keyof Layouts) {
    return cards.map((card) => ({
        ...card.layouts[screenSize][tab],
        i: String(card.id)
    }));
}
