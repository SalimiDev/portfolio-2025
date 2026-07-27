'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { gridCardConfigs } from '../config/grid-cards';
import { generateLayoutByTab } from '../model/layout';
import type { Layouts } from '../model/layout.types';
import type { NavigationTitle } from '../model/navigation.types';
import GridCard from './grid-card';
import { LegacyResponsiveReactGridLayoutProps, Responsive, WidthProvider } from 'react-grid-layout/legacy';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface LayoutGridProps {
    activeTab: NavigationTitle;
    layoutProps?: LegacyResponsiveReactGridLayoutProps;
}

type WidthChangeHandler = NonNullable<LegacyResponsiveReactGridLayoutProps['onWidthChange']>;

const PortfolioGrid: React.FC<LayoutGridProps> = ({ activeTab, layoutProps }) => {
    const [isInitialWidthSettled, setIsInitialWidthSettled] = useState(false);
    const settleFrameRef = useRef<number | null>(null);
    const { className: layoutClassName, onWidthChange, ...responsiveLayoutProps } = layoutProps ?? {};

    // Keep layout object stable between renders unless the selected tab changes.
    const layouts = useMemo(
        () => ({
            xs: generateLayoutByTab(gridCardConfigs, activeTab, 'xs'),
            sm: generateLayoutByTab(gridCardConfigs, activeTab, 'sm'),
            md: generateLayoutByTab(gridCardConfigs, activeTab, 'md'),
            lg: generateLayoutByTab(gridCardConfigs, activeTab, 'lg')
        }),
        [activeTab]
    );

    const settleInitialWidth = useCallback(() => {
        if (settleFrameRef.current !== null) {
            return;
        }

        // WidthProvider measures in requestAnimationFrame. Enable layout transitions
        // one frame later so the first measurement cannot animate from its SSR fallback.
        settleFrameRef.current = requestAnimationFrame(() => {
            settleFrameRef.current = requestAnimationFrame(() => {
                setIsInitialWidthSettled(true);
                settleFrameRef.current = null;
            });
        });
    }, []);

    const handleWidthChange = useCallback<WidthChangeHandler>(
        (...args) => {
            onWidthChange?.(...args);
            settleInitialWidth();
        },
        [onWidthChange, settleInitialWidth]
    );

    useEffect(() => {
        // If the fallback width already matches the container, WidthProvider does
        // not emit a change. Still enable normal animations after the first paint.
        const fallbackTimer = window.setTimeout(settleInitialWidth, 250);

        return () => {
            window.clearTimeout(fallbackTimer);

            if (settleFrameRef.current !== null) {
                cancelAnimationFrame(settleFrameRef.current);
            }
        };
    }, [settleInitialWidth]);

    return (
        <div className='space-y-4'>
            <div className='relative'>
                <ResponsiveGridLayout
                    isDraggable={false}
                    className={['layout', !isInitialWidthSettled && 'grid-width-pending', layoutClassName]
                        .filter(Boolean)
                        .join(' ')}
                    layouts={layouts}
                    compactType={'vertical'}
                    rowHeight={30}
                    breakpoints={{ lg: 996, md: 768, sm: 480, xs: 0 }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 2 }}
                    isResizable={false}
                    onWidthChange={handleWidthChange}
                    {...responsiveLayoutProps}>
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
