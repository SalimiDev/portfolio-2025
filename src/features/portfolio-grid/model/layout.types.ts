import type { NavigationTitle } from './navigation.types';

export type LayoutPosition = {
    x: number;
    y: number;
    w: number;
    h: number;
};

export type Layouts = Readonly<
    Record<'lg' | 'md' | 'sm' | 'xs', Readonly<Record<NavigationTitle, LayoutPosition>>>
>;
