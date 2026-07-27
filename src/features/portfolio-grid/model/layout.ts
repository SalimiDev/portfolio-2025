import type { GridCardConfig } from './grid-card.types';
import type { Layouts } from './layout.types';
import type { NavigationTitle } from './navigation.types';

type LayoutSource = Pick<GridCardConfig, 'id' | 'layouts'>;

export function generateLayoutByTab(
    cards: readonly LayoutSource[],
    tab: NavigationTitle,
    screenSize: keyof Layouts
) {
    return cards.map((card) => ({
        ...card.layouts[screenSize][tab],
        i: String(card.id)
    }));
}
