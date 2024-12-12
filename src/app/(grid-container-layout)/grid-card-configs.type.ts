export interface GridCardConfig {
    id: number;
    settings: Record<string, unknown>;
    componentType: GridComponent;
    color: string;
    tags: string[];
    link: string;
    icon: string;
    priority: Record<string, number>; // تعریف تایپ priority به صورت دینامیک
    layouts?: Record<NavigationTitles, { x: number; y: number; w: number; h: number }>;
}
