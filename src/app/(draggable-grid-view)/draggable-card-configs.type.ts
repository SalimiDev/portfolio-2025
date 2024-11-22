export interface DraggableCardConfig {
    id: number;
    componentType: DraggableComponent;
    settings: Record<string, unknown>;
    color: string;
    tags: string[];
    link?: string;
    icon?: string;
}
