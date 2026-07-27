'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { gridCardConfigs } from '../config/grid-cards';
import { generateLayoutByTab, gridBreakpoints, gridColumns } from '../model/layout';
import type { Layouts } from '../model/layout.types';
import type { NavigationTitle } from '../model/navigation.types';
import GridCard from './grid-card';
import { useContainerWidth } from 'react-grid-layout';
import { LegacyResponsiveReactGridLayoutProps, Responsive } from 'react-grid-layout/legacy';

interface LayoutGridProps {
    activeTab: NavigationTitle;
    layoutProps?: Partial<Omit<LegacyResponsiveReactGridLayoutProps, 'children' | 'width'>>;
}

type WidthChangeHandler = NonNullable<LegacyResponsiveReactGridLayoutProps['onWidthChange']>;

const PortfolioGrid: React.FC<LayoutGridProps> = ({ activeTab, layoutProps }) => {
    const { width, containerRef, mounted } = useContainerWidth({
        measureBeforeMount: true
    });
    const [animationsReady, setAnimationsReady] = useState(false);
    const readinessFrameRef = useRef<number | null>(null);
    const animationsReadyRef = useRef(false);
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

    const enableAnimations = useCallback(() => {
        if (animationsReadyRef.current || readinessFrameRef.current !== null) {
            return;
        }

        // Responsive updates its breakpoint in an effect after receiving the measured
        // width. Wait until that correction has painted before enabling transitions.
        readinessFrameRef.current = requestAnimationFrame(() => {
            readinessFrameRef.current = requestAnimationFrame(() => {
                animationsReadyRef.current = true;
                setAnimationsReady(true);
                readinessFrameRef.current = null;
            });
        });
    }, []);

    const handleWidthChange = useCallback<WidthChangeHandler>(
        (...args) => {
            onWidthChange?.(...args);
            enableAnimations();
        },
        [enableAnimations, onWidthChange]
    );

    useEffect(() => {
        if (!mounted) {
            return;
        }

        // When the measured width equals the SSR fallback, Responsive emits no
        // width change and no correction is needed.
        const fallbackTimer = window.setTimeout(enableAnimations, 100);

        return () => {
            window.clearTimeout(fallbackTimer);

            if (readinessFrameRef.current !== null) {
                cancelAnimationFrame(readinessFrameRef.current);
            }
        };
    }, [enableAnimations, mounted]);

    return (
        <div className='space-y-4'>
            <div ref={containerRef} className='relative min-w-0'>
                <Responsive
                    isDraggable={false}
                    className={['layout', !animationsReady && 'grid-measuring', layoutClassName]
                        .filter(Boolean)
                        .join(' ')}
                    layouts={layouts}
                    compactType={'vertical'}
                    rowHeight={30}
                    breakpoints={gridBreakpoints}
                    cols={gridColumns}
                    isResizable={false}
                    {...responsiveLayoutProps}
                    onWidthChange={handleWidthChange}
                    width={width}>
                    {gridCardConfigs.map((item) => (
                        <div key={item.id}>
                            <GridCard item={item} />
                        </div>
                    ))}
                </Responsive>
            </div>
        </div>
    );
};

export default PortfolioGrid;
