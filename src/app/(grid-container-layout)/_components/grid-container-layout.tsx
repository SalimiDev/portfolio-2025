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

        // Generating layout based on selected tab
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

    // Generating a layout for all available sizes
    const layouts = {
        xs: generateLayoutByTab(activeTab, 'xs'),
        sm: generateLayoutByTab(activeTab, 'sm'),
        md: generateLayoutByTab(activeTab, 'md'),
        lg: generateLayoutByTab(activeTab, 'lg')
    };

    const onStopLayoutFun = (layoutItems: LayoutItem[]) => {
        const updatedConfigs = layoutItems.map((item) => {
            const config = gridCardConfigs.find((config) => config.id === Number(item.i));

            return {
                ...item,
                componentType: config?.componentType || null
            };
        });

        // console.log('Updated Layouts:', updatedConfigs);
    };

    return (
        <div className='space-y-4'>
            <div className='relative'>
                <ResponsiveGridLayout
                    isDraggable={false}
                    className='layout'
                    layouts={layouts}
                    compactType={null}
                    rowHeight={30}
                    breakpoints={{ lg: 996, md: 768, sm: 480, xs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 2 }}
                    onBreakpointChange={(newBreakpoint) => console.log('Current Breakpoint:', newBreakpoint)}
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
