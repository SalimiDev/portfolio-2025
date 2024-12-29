export type LayoutPosition = {
    x: number;
    y: number;
    w: number;
    h: number;
};

export type Layouts = Record<'lg' | 'md' | 'sm' | 'xs', Record<NavigationTitles, LayoutPosition>>;
