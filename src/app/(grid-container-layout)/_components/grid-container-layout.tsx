'use client';

import React, { useMemo } from 'react';

import useActiveMenuTab from '@/store/useActiveMenuTab';
import { LayoutPosition, Layouts } from '@/types/layouts.types';

import { gridCardConfigs } from '../grid-card-configs';
import GridCard from './grid-card';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);
const defaultLayout: LayoutPosition = { x: 0, y: 0, w: 1, h: 1 };

const generateLayoutByTab = (tab: NavigationTitles, screenSize: keyof Layouts) =>
    [...gridCardConfigs].map((item) => {
        const layout = item.layouts?.[screenSize]?.[tab] ?? defaultLayout;

        return {
            ...layout,
            i: String(item.id)
        };
    });

interface LayoutGridProps {
    layoutProps?: ResponsiveProps;
}

const GridContainerLayout: React.FC<LayoutGridProps> = ({ layoutProps }) => {
    const { activeTab } = useActiveMenuTab();

    // Keep layout object stable between renders unless the selected tab changes.
    const layouts = useMemo(
        () => ({
            xs: generateLayoutByTab(activeTab, 'xs'),
            sm: generateLayoutByTab(activeTab, 'sm'),
            md: generateLayoutByTab(activeTab, 'md'),
            lg: generateLayoutByTab(activeTab, 'lg')
        }),
        [activeTab]
    );

    return (
        <div className='space-y-4'>
            <div className='relative'>
                <ResponsiveGridLayout
                    isDraggable={false}
                    className='layout'
                    layouts={layouts}
                    compactType={'vertical'}
                    rowHeight={30}
                    breakpoints={{ lg: 996, md: 768, sm: 480, xs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 2 }}
                    isResizable={false}
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
