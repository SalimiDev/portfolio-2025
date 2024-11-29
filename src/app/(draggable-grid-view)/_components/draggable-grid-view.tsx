'use client';

import React from 'react';

import useActiveMenuTab from '@/store/useActiveMenuTab';

import { draggableCardConfigs } from '../draggable-card-configs';
import DraggableItem from './draggable-card';
import { Responsive, ResponsiveProps, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface DraggableGridProps {
    layoutProps?: ResponsiveProps;
}

interface LayoutItem {
    x: number;
    y: number;
    w: number;
    h: number;
    i: string; // معمولاً `i` به عنوان ID یا شناسه استفاده می‌شود
    color: string; // اضافه‌شده برای دسترسی به رنگ هر آیتم
}

const DraggableGrid: React.FC<DraggableGridProps> = ({ layoutProps }) => {
    const { activeTab } = useActiveMenuTab();

    //==========new==========
    type NavigationTitles = 'all' | 'about' | 'work';

    const generateLayoutByTab = (tab: NavigationTitles): LayoutItem[] => {
        // مرتب‌سازی کارت‌ها بر اساس priority
        const sortedConfigs = [...draggableCardConfigs].sort((a, b) => {
            const priorityA = a.priority?.[tab] || 0; // مقدار پیش‌فرض در صورت نبود priority
            const priorityB = b.priority?.[tab] || 0;

            return priorityA - priorityB;
        });

        // تولید layout بر اساس اولویت
        return sortedConfigs.map((item) => {
            const layout = item.layouts?.[tab] || { x: 0, y: 0, w: 1, h: 1 }; // اینجا دیگر خطایی نخواهد بود.

            return {
                ...layout,
                i: String(item.id),
                color: item.color
            };
        });
    };

    const layout = generateLayoutByTab(activeTab);

    return (
        <div className='space-y-4'>
            <div className='relative'>
                <ResponsiveGridLayout
                    className='layout'
                    layouts={{ lg: layout }}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={30}
                    {...layoutProps}>
                    {draggableCardConfigs.map((item) => (
                        <div key={item.id} style={{ backgroundColor: item.color }}>
                            <DraggableItem item={item} />
                        </div>
                    ))}
                </ResponsiveGridLayout>
            </div>
        </div>
    );
};

export default DraggableGrid;
