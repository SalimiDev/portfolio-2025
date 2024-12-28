export type LayoutPosition = {
    x: number;
    y: number;
    w: number;
    h: number;
};

export type Layouts = Record<'sm' | 'md' | 'lg', Record<NavigationTitles, LayoutPosition>>;
