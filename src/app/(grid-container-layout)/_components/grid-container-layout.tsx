'use client';

import React from 'react';

import useActiveMenuTab from '@/store/useActiveMenuTab';
import { LayoutPosition, Layouts } from '@/types/layouts.types';

import { gridCardConfigs } from '../grid-card-configs';
import GridCard from './grid-card';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface LayoutGridProps {
    layoutProps?: ResponsiveProps;
}

interface LayoutItem {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string; // i is used as an ID or identifier
    color: string;
}

const GridContainerLayout: React.FC<LayoutGridProps> = ({ layoutProps }) => {
    const { activeTab } = useActiveMenuTab();

    const generateLayoutByTab = (tab: NavigationTitles, screenSize: keyof Layouts): LayoutItem[] => {
        const defaultLayout: LayoutPosition = { x: 0, y: 0, w: 1, h: 1 };

        // Sorting cards based on priority
        const sortedConfigs = [...gridCardConfigs].sort((a, b) => {
            const priorityA = a.priority?.[tab] || 0;
            const priorityB = b.priority?.[tab] || 0;

            return priorityA - priorityB;
        });

        // Generating layout
        return sortedConfigs.map((item) => {
            const layout = item.layouts?.[screenSize]?.[tab] ?? defaultLayout;

            return {
                ...layout,
                i: String(item.id),
                color: item.color,
                componentType: item.componentType
            };
        });
    };

    // Creating a layout for all available sizes
    const layouts = {
        lg: generateLayoutByTab(activeTab, 'lg'),
        md: generateLayoutByTab(activeTab, 'md'),
        sm: generateLayoutByTab(activeTab, 'sm')
    };

    const onStopLayoutFun = (layoutItems: LayoutItem[]) => {
        const updatedConfigs = layoutItems.map((item) => {
            const config = gridCardConfigs.find((config) => config.id === Number(item.i));

            return {
                ...item,
                // color: config?.color || '',
                componentType: config?.componentType || null
            };
        });

        console.log('Updated Layouts:', updatedConfigs);
    };

    return (
        <div className='space-y-4'>
            <div className='relative'>
                <ResponsiveGridLayout
                    preventCollision={false}
                    isDraggable={true}
                    className='layout'
                    layouts={layouts}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={30}
                    onDragStop={(layout) => onStopLayoutFun(layout)}
                    {...layoutProps}>
                    {gridCardConfigs.map((item) => (
                        <div key={item.id} style={{ backgroundColor: item.color }}>
                            <GridCard item={item} />
                        </div>
                    ))}
                </ResponsiveGridLayout>
            </div>
        </div>
    );
};

export default GridContainerLayout;
