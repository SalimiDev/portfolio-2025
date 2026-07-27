'use client';

import React, { useMemo } from 'react';

import {
    LegacyResponsiveReactGridLayoutProps,
    Responsive,
    WidthProvider
} from 'react-grid-layout/legacy';

import { gridCardConfigs } from '../config/grid-cards';
import type { Layouts } from '../model/layout.types';
import type { NavigationTitle } from '../model/navigation.types';
import useActiveMenuTab from '../model/use-active-menu-tab';
import GridCard from './grid-card';

const ResponsiveGridLayout = WidthProvider(Responsive);

const generateLayoutByTab = (tab: NavigationTitle, screenSize: keyof Layouts) =>
    [...gridCardConfigs].map((item) => {
        const layout = item.layouts[screenSize][tab];

        return {
            ...layout,
            i: String(item.id)
        };
    });

interface LayoutGridProps {
    layoutProps?: LegacyResponsiveReactGridLayoutProps;
}

const PortfolioGrid: React.FC<LayoutGridProps> = ({ layoutProps }) => {
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
                        <div key={item.id}>
                            <GridCard item={item} />
                        </div>
                    ))}
                </ResponsiveGridLayout>
            </div>
        </div>
    );
};

export default PortfolioGrid;
