export interface DraggableCardConfig {
    id: number;
    settings: Record<string, unknown>;
    componentType: DraggableComponent;
    color: string;
    tags: string[];
    link: string;
    icon: string;
    priority: Record<string, number>; // تعریف تایپ priority به صورت دینامیک
    layouts?: Record<NavigationTitles, { x: number; y: number; w: number; h: number }>;
}
